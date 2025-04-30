export default {
    content: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
        './app.vue',
        './plugins/**/*.{js,ts,jsx,tsx}',
    ],
     theme: {
        extend: {},
     },
     plugins: [require('daisyui')]
}