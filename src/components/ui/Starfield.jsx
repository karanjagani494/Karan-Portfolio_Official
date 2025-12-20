import React, { useEffect, useRef } from 'react';
import { useStarfield } from '../../context/StarfieldContext';

const StarfieldComponent = () => {
    const canvasRef = useRef(null);
    const { speedMultiplier, steeringRef, faceSpeedRef } = useStarfield();

    // Use ref for speed to access it inside the animation loop without re-triggering useEffect
    const speedRef = useRef(speedMultiplier);

    useEffect(() => {
        speedRef.current = speedMultiplier;
    }, [speedMultiplier]);

    useEffect(() => {
        let animationId;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let stars = [];
        const isMobile = window.innerWidth < 768;
        const numStars = isMobile ? 80 : 200; // Reduce stars on mobile for performance

        // Speed control
        const baseSpeed = 100;
        let currentSpeed = baseSpeed;

        // Steering control
        let cx = window.innerWidth / 2;
        let cy = window.innerHeight / 2;
        let targetCx = cx;
        let targetCy = cy;

        let lastTime = 0;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Reset center on resize
            targetCx = width / 2;
            targetCy = height / 2;

            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width - width / 2,
                    y: Math.random() * height - height / 2,
                    z: Math.random() * width,
                    pz: 0
                });
                stars[i].pz = stars[i].z;
            }
        };

        const handleMouseMove = (e) => {
            targetCx = width / 2 + (width / 2 - e.clientX) * 0.5;
            targetCy = height / 2 + (height / 2 - e.clientY) * 0.5;
        };

        // Internal warp (click and hold)
        let isMouseDown = false;
        const handleMouseDown = () => {
            isMouseDown = true;
        };
        const handleMouseUp = () => { isMouseDown = false; };

        const update = (time) => {
            if (!lastTime) lastTime = time;
            const deltaTime = (time - lastTime) / 1000;
            lastTime = time;

            const dt = Math.min(deltaTime, 0.1);

            // Determine target speed based on Context OR Mouse Down
            const externalMultiplier = speedRef.current;
            let currentBase = baseSpeed;

            // Check for Face Speed Boost (Eyebrows)
            // faceSpeedRef is 0-1. We want to boost significantly.
            if (faceSpeedRef.current > 0.05) {
                // Non-linear boost for better feel
                const boost = Math.pow(faceSpeedRef.current, 2) * 19; // Cap at 20x speed to match click
                currentBase = baseSpeed * (1 + boost);
            }

            const targetSpeed = (isMouseDown || externalMultiplier > 1) ? baseSpeed * 20 : currentBase;

            // Apply steering from Face Tracker if available
            if (steeringRef.current) {
                // steeringRef contains relative coordinates from -1 to 1 (inverted x for mirror feel)
                // Map to screen coordinates
                const steerX = steeringRef.current.x * (width / 2);
                const steerY = steeringRef.current.y * (height / 2);

                targetCx = width / 2 + steerX;
                targetCy = height / 2 + steerY;
            } else if (!steeringRef.current) {
                // Only use mouse if no face tracking (optional fallback logic, currently mixed)
            }

            // Smoothly interpolate speed
            currentSpeed += (targetSpeed - currentSpeed) * 5 * dt;

            // Smoothly interpolate steering
            cx += (targetCx - cx) * 2 * dt;
            cy += (targetCy - cy) * 2 * dt;

            ctx.clearRect(0, 0, width, height);

            // Warp effect threshold
            const tailLength = currentSpeed > baseSpeed * 2 ? (currentSpeed / (baseSpeed * 20)) * 30 : 0;

            // Force white stars
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'white';

            for (let i = 0; i < numStars; i++) {
                const star = stars[i];

                star.z -= currentSpeed * dt;

                if (star.z <= 0) {
                    star.z = width;
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * height - height / 2;
                    star.pz = star.z;
                }

                const x = cx + (star.x / star.z) * width;
                const y = cy + (star.y / star.z) * height;

                const size = (1 - star.z / width) * 4;
                const alpha = (1 - star.z / width);

                if (x >= 0 && x <= width && y >= 0 && y <= height) {
                    ctx.globalAlpha = alpha;

                    if (tailLength > 1) {
                        // Draw warp lines
                        const px = cx + (star.x / (star.z + tailLength)) * width;
                        const py = cy + (star.y / (star.z + tailLength)) * height;

                        ctx.beginPath();
                        ctx.moveTo(px, py);
                        ctx.lineTo(x, y);
                        ctx.lineWidth = size > 0 ? size : 0.1;
                        ctx.stroke();
                    } else {
                        // Draw dots
                        ctx.beginPath();
                        ctx.arc(x, y, size > 0 ? size : 0, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }

                star.pz = star.z;
            }

            ctx.globalAlpha = 1.0;
            requestAnimationFrame(update);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchstart', handleMouseDown);
        window.addEventListener('touchend', handleMouseUp);

        resize();

        // Delay animation loop to allow initial UI (name scramble) to render smoothly
        const startTimeout = setTimeout(() => {
            animationId = requestAnimationFrame(update);
        }, 1000);

        return () => {
            clearTimeout(startTimeout);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchstart', handleMouseDown);
            window.removeEventListener('touchend', handleMouseUp);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []); // Empty dependency array - we use refs for updates

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-transparent pointer-events-none"
        />
    );
};

export const Starfield = React.memo(StarfieldComponent);
