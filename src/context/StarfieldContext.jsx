import React, { createContext, useContext, useState, useRef, useCallback } from 'react';

const StarfieldContext = createContext(undefined);

export const StarfieldProvider = ({ children }) => {
    const [isWarping, setIsWarping] = useState(false);
    const [speedMultiplier, setSpeedMultiplier] = useState(1);
    const timeoutRef = useRef(null);

    const triggerWarp = useCallback((duration = 1500) => {
        setIsWarping(true);
        setSpeedMultiplier(20); // 20x speed for warp

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIsWarping(false);
            setSpeedMultiplier(1);
        }, duration);
    }, []);

    return (
        <StarfieldContext.Provider value={{ isWarping, triggerWarp, speedMultiplier }}>
            {children}
        </StarfieldContext.Provider>
    );
};

export const useStarfield = () => {
    const context = useContext(StarfieldContext);
    if (context === undefined) {
        throw new Error('useStarfield must be used within a StarfieldProvider');
    }
    return context;
};
