import { useEffect, useRef } from 'react';
import { FilesetResolver, FaceLandmarker } from '@mediapipe/tasks-vision';
import { useStarfield } from '../../context/StarfieldContext';

export function FaceTracker() {
    const videoRef = useRef(document.createElement('video'));
    const faceLandmarkerRef = useRef(null);
    const { steeringRef, faceSpeedRef } = useStarfield();

    useEffect(() => {
        let timeoutId;
        const initFaceLandmarker = async () => {
            // Delay initialization to let the UI load first
            timeoutId = setTimeout(async () => {
                try {
                    const vision = await FilesetResolver.forVisionTasks(
                        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
                    );
                    faceLandmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
                        baseOptions: {
                            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
                            delegate: "GPU"
                        },
                        runningMode: "VIDEO",
                        numFaces: 1,
                        minFaceDetectionConfidence: 0.5,
                        minFacePresenceConfidence: 0.5,
                        minTrackingConfidence: 0.5,
                        outputFaceBlendshapes: true
                    });

                    startWebcam();
                } catch (error) {
                    console.error("Error initializing face landmarker:", error);
                }
                videoRef.current.addEventListener('loadeddata', predictWebcam);
                videoRef.current.play();
            }
                } catch (error) {
            console.error("Error accessing webcam:", error);
        }, 500); // Added missing closing parenthesis and delay for setTimeout
};

const startWebcam = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.addEventListener('loadeddata', predictWebcam);
            videoRef.current.play();
        }
    } catch (error) {
        console.error("Error accessing webcam:", error);
    }
};

initFaceLandmarker();

return () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        stream.getTracks().forEach(track => track.stop());
    }
    if (steeringRef) {
        steeringRef.current = null;
    }
};
    }, []);

const lastVideoTimeRef = useRef(-1);
const lastPredictionTimeRef = useRef(0);

const predictWebcam = () => {
    if (faceLandmarkerRef.current && videoRef.current) {
        const currentTime = performance.now();
        // Throttle to ~30 FPS (33ms)
        if (currentTime - lastPredictionTimeRef.current < 30) {
            requestAnimationFrame(predictWebcam);
            return;
        }

        if (videoRef.current.currentTime !== lastVideoTimeRef.current) {
            lastVideoTimeRef.current = videoRef.current.currentTime;
            const result = faceLandmarkerRef.current.detectForVideo(videoRef.current, currentTime);
            processLandmarks(result);
            lastPredictionTimeRef.current = currentTime;
        }
    }
    requestAnimationFrame(predictWebcam);
};

const processLandmarks = (result) => {
    if (result.faceLandmarks && result.faceLandmarks.length > 0) {
        const landmarks = result.faceLandmarks[0];

        // Use the nose tip (index 1) as the center point
        const nose = landmarks[1];

        // Calculate offset from center (0.5, 0.5)
        // Invert X because the webcam is mirrored usually
        const x = (nose.x - 0.5) * -2; // Multiplier to increase sensitivity
        const y = (nose.y - 0.5) * 2;

        if (steeringRef) {
            steeringRef.current = { x, y };
        }

        // Check for Eyebrow Raise (Blendshapes)
        if (result.faceBlendshapes && result.faceBlendshapes.length > 0) {
            const shapes = result.faceBlendshapes[0].categories;

            // Key shapes for "surprised/wide eyes": browInnerUp, browOuterUpLeft, browOuterUpRight
            const browInnerUp = shapes.find(s => s.categoryName === 'browInnerUp')?.score || 0;
            const browOuterUpLeft = shapes.find(s => s.categoryName === 'browOuterUpLeft')?.score || 0;
            const browOuterUpRight = shapes.find(s => s.categoryName === 'browOuterUpRight')?.score || 0;

            // Average them or take max
            const browActivity = Math.max(browInnerUp, (browOuterUpLeft + browOuterUpRight) / 2);

            if (faceSpeedRef) {
                faceSpeedRef.current = browActivity;
            }
        }
    } else {
        if (steeringRef) {
            // Decay back to center if no face (optional, or just hold last pos)
            // steeringRef.current = null; 
        }
        if (faceSpeedRef) {
            faceSpeedRef.current = 0;
        }
    }
};

return null;
}
