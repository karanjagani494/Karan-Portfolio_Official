import { useEffect, useRef } from 'react';

export const CursorGlow = () => {
    const glow = useRef(null);
    useEffect(() => {
        const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
        let frame;
        const hide = () => { glow.current.style.opacity = '0'; };
        const move = event => {
            if (!media.matches || event.pointerType === 'touch') return hide();
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                glow.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
                glow.current.style.opacity = '1';
            });
        };
        window.addEventListener('pointermove', move, { passive: true });
        document.documentElement.addEventListener('pointerleave', hide);
        window.addEventListener('blur', hide);
        media.addEventListener('change', hide);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('pointermove', move);
            document.documentElement.removeEventListener('pointerleave', hide);
            window.removeEventListener('blur', hide);
            media.removeEventListener('change', hide);
        };
    }, []);
    return <div ref={glow} className="cursor-glow" aria-hidden="true" />;
};
