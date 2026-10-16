/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: { extend: {
        colors: { primary: { DEFAULT: '#ffffff', foreground: '#09090b' }, background: '#09090b', foreground: '#f4f4f5', surface: '#121214' },
        fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
    } },
    plugins: [],
};
