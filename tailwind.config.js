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
                    DEFAULT: '#ffffff',
                    foreground: '#000000',
                },
                secondary: {
                    DEFAULT: '#a1a1aa', // Zinc 400
                    foreground: '#000000',
                },
                background: '#09090b', // Deep sleek zinc black
                foreground: '#f4f4f5',
                surface: '#121215',    // Refined subtle dark surface
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
