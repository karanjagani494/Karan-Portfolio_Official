/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#ffffffff', // Indigo 500
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#a855f7', // Purple 500
                    foreground: '#ffffff',
                },
                background: '#000000',
                foreground: '#ffffff',
                surface: '#18181b', // Zinc 900 - Neutral Dark
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 8s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
            },
        },
    },
    plugins: [],
}
