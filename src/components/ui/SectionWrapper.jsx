import { motion as Motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const SectionWrapper = ({ children, className, id }) => {
    const reduceMotion = useReducedMotion();
    return <Motion.div id={id}
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }}
        className={cn('py-20 md:py-28 px-6 md:px-10 max-w-6xl mx-auto w-full', className)}>
        {children}
    </Motion.div>;
};
