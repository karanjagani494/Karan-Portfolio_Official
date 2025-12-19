import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const randomChars = "!@#$%^&*()_+{}[]|;:,.<>?/~`".split("");

export const HyperText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const iterations = useRef(0);

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);
        iterations.current = 0;

        const interval = setInterval(() => {
            setDisplayText(() =>
                text
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iterations.current) {
                            return text[index];
                        }
                        return randomChars[Math.floor(Math.random() * randomChars.length)];
                    })
                    .join("")
            );

            if (iterations.current >= text.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iterations.current += 1 / 3; // Speed of reveal
        }, 80); // Throttled for performance (was 30)
    };

    useEffect(() => {
        scramble();
    }, []);

    return (
        <motion.span
            className={`inline-block cursor-pointer ${className}`}
            onMouseEnter={scramble}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayText}
        </motion.span>
    );
};
