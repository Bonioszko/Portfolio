/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 2s ease-in-out",
            },
            scale: ["active"],
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },

                slideInFromLeft: {
                    "0%": {
                        transform: " translateX(-100%)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
            },
            colors: {
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
                "third-color": "var(--third-color)",
                "fourth-color": "var(--fourth-color)",
                "text-color": "var(--text-color)",
            },
            fontFamily: {
                default: ["Mukta"],
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
