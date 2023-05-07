/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "Very-dark-blue": "hsl(233, 47%, 7%)",
                "Dark-desaturated-blue": "hsl(244, 38%, 16%)",
            },
            fontFamily: {
                LexendDeca: ["Lexend Deca", "sans-serif"],
                Inter: ["Inter", "sans-serif"],
            },
            height: {
                "box-height": "35rem",
            },
            width: {
                "box-width": "75rem",
            },
        },
    },
    plugins: [],
};
