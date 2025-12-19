import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';

export const SectionWrapper = ({ children, className, id }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

    return (
        <motion.section
            ref={ref}
            id={id}
            style={{ opacity, y, scale }}
            className={cn("py-20 px-4 md:px-8 max-w-7xl mx-auto", className)}
        >
            {children}
        </motion.section>
    );
};
