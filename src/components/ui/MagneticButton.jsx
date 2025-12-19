import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../../context/SoundContext';

export const MagneticButton = ({ children, className = "", onClick, ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { playSound } = useSound();

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const handleMouseEnter = () => {
        playSound('hover');
    };

    const handleClick = (e) => {
        playSound('click');
        if (onClick) onClick(e);
    };

    return (
        <motion.button
            ref={ref}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};
