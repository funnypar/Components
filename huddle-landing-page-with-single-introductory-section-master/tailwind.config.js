/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                Violet: "hsl(257, 40%, 49%)",
                "Soft-Magenta": "hsl(300, 69%, 71%)",
            },
            width: {
                logo: "20rem",
            },
            height: {
                logo: "20rem",
            },
            fontFamily: {
                heading: ["Poppins", "sans-serif"],
            },
            boxShadow: {
                "3xl": "0 1rem 1rem .5rem rgba(0, 0, 0, 0.2)",
            },
            screens: {
                mobile: "375px",
            },
            fontSize: {
                "4.5xl": "2.5rem",
            },
        },
    },
    plugins: [],
};
