/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "Very-dark-blue": "hsl(233, 47%, 7%)",
                "Dark-desaturated-blue": "hsl(244, 38%, 16%)",
                "Soft-violet": "hsl(277, 64%, 61%)",
                "Soft-violet-img": "hsl(277, 64%, 40%)",
                "Slightly-transparent-white-main": "hsla(0, 0%, 100%, 0.75)",
                "Slightly-transparent-white": "hsla(0, 0%, 100%, 0.6)",
            },
            fontFamily: {
                LexendDeca: ["Lexend Deca", "sans-serif"],
                Inter: ["Inter", "sans-serif"],
            },
            height: {
                "box-height": "35rem",
            },
            width: {
                "box-width": "85rem",
                "img-width": "90rem",
            },
            lineHeight: {
                "right-side": "3.75rem",
            },
        },
    },
    plugins: [],
};
