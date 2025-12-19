import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import startupUrl from '../assets/sounds/startup.mp3';

const SoundContext = createContext(undefined);

export const SoundProvider = ({ children }) => {
    const [soundEnabled, setSoundEnabled] = useState(() => {
        const saved = localStorage.getItem('soundEnabled');
        return saved !== null ? JSON.parse(saved) : true;
    });

    const hasStartedRef = useRef(false);
    const audioContextRef = useRef(null);
    const noiseBufferRef = useRef(null);
    const startupBufferRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
    }, [soundEnabled]);

    // Initialize AudioContext and Buffers
    useEffect(() => {
        const initAudio = async () => {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!AudioContext) return;

                const ctx = new AudioContext();
                audioContextRef.current = ctx;

                // 1. Create White Noise Buffer
                const bufferSize = ctx.sampleRate * 2;
                const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const noiseData = noiseBuffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    noiseData[i] = Math.random() * 2 - 1;
                }
                noiseBufferRef.current = noiseBuffer;

                // 2. Load Startup Sound
                const response = await fetch(startupUrl);
                const arrayBuffer = await response.arrayBuffer();
                const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
                startupBufferRef.current = audioBuffer;

            } catch (e) {
                console.error("Audio init failed", e);
            }
        };

        initAudio();
    }, []);

    // Play Startup Sound
    const playStartupSound = async () => {
        if (!soundEnabled || hasStartedRef.current || !audioContextRef.current || !startupBufferRef.current) return;

        try {
            const ctx = audioContextRef.current;

            if (ctx.state === 'suspended') {
                await ctx.resume();
            }

            const source = ctx.createBufferSource();
            source.buffer = startupBufferRef.current;

            const gain = ctx.createGain();
            // Adjust volume if needed, usually startup sounds are loud
            gain.gain.value = 0.5;

            source.connect(gain);
            gain.connect(ctx.destination);

            source.start();

            // Only mark as started if we successfully triggered start
            hasStartedRef.current = true;

        } catch (e) {
            // Autoplay blocked
        }
    };

    // Interaction handler to unlock audio context and play startup if needed
    useEffect(() => {
        const handleInteraction = () => {
            if (audioContextRef.current?.state === 'suspended') {
                audioContextRef.current.resume();
            }

            // Retry startup sound if it hasn't played yet
            if (!hasStartedRef.current) {
                playStartupSound();
            }

            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, [soundEnabled]);

    const toggleSound = () => {
        setSoundEnabled((prev) => !prev);
    };

    const playSound = async (type) => {
        if (!soundEnabled || !audioContextRef.current) return;

        try {
            const ctx = audioContextRef.current;
            if (ctx.state === 'suspended') {
                await ctx.resume();
            }

            if (type === 'click') {
                // Cinematic "Boom"
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const filter = ctx.createBiquadFilter();

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);

                osc.type = 'sine';
                osc.frequency.setValueAtTime(120, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.5);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(200, ctx.currentTime);
                filter.frequency.linearRampToValueAtTime(50, ctx.currentTime + 0.4);

                gain.gain.setValueAtTime(0.6, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

                osc.start();
                osc.stop(ctx.currentTime + 0.6);

            } else if (type === 'hover') {
                // Hover sound removed per user request
            }
        } catch (e) {
            console.error("Audio play failed", e);
        }
    };

    return (
        <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound, playStartupSound }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => {
    const context = useContext(SoundContext);
    if (context === undefined) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
};
