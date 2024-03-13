/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
                "third-color": "var(--third-color)",
                "fourth-color": "var(--fourth-color)",
            },
            fontFamily: {
                default: ["Mukta"],
            },
        },
    },
    plugins: [],
};
