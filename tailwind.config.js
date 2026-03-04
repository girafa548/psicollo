/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
    ],
    theme: {
        extend: {
            colors: {
                ivory: '#F5F0EB',
                stone: '#E8E0D5',
                blush: '#C9A99A',
                sage: '#668472',
                forest: '#2E4E3F',
                gold: '#C5A059',
                black: '#1A1A1A',
            },
            fontFamily: {
                serif: ['var(--font-cormorant)', 'serif'],
                sans: ['var(--font-dm-sans)', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                }
            }
        },
    },
    plugins: [],
}
