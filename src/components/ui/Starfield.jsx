import React, { useEffect, useRef } from 'react';
import { useStarfield } from '../../context/StarfieldContext';

const StarfieldComponent = () => {
    const canvasRef = useRef(null);
    const { speedMultiplier } = useStarfield();

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
        const numStars = isMobile ? 70 : 130; // Subtle, elegant star count

        // Slow, elegant ambient speed
        const baseSpeed = 22;
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
            targetCx = width / 2 + (width / 2 - e.clientX) * 0.15;
            targetCy = height / 2 + (height / 2 - e.clientY) * 0.15;
        };

        const update = (time) => {
            if (!lastTime) lastTime = time;
            const deltaTime = (time - lastTime) / 1000;
            lastTime = time;

            const dt = Math.min(deltaTime, 0.1);

            // Smoothly interpolate speed without any click acceleration
            currentSpeed = baseSpeed;

            // Subtle gentle parallax steering
            cx += (targetCx - cx) * 1.2 * dt;
            cy += (targetCy - cy) * 1.2 * dt;

            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = '#ffffff';

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

                // Subtle delicate dots, soft opacity
                const depthFactor = 1 - star.z / width;
                const size = depthFactor * 1.8;
                const alpha = depthFactor * 0.55;

                if (x >= 0 && x <= width && y >= 0 && y <= height) {
                    ctx.globalAlpha = alpha;
                    ctx.beginPath();
                    ctx.arc(x, y, Math.max(size, 0.4), 0, Math.PI * 2);
                    ctx.fill();
                }

                star.pz = star.z;
            }

            ctx.globalAlpha = 1.0;
            animationId = requestAnimationFrame(update);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();

        // Delay animation loop to allow initial UI to render smoothly
        const startTimeout = setTimeout(() => {
            animationId = requestAnimationFrame(update);
        }, 300);

        return () => {
            clearTimeout(startTimeout);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-transparent pointer-events-none"
        />
    );
};

export const Starfield = React.memo(StarfieldComponent);
