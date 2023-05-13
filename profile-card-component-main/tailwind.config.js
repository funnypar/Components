/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "Dark-gray": "hsl(0, 0%, 59%)",
                "Dark-cyan": "hsl(185, 75%, 39%)",
                "Very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
                "Dark-grayish-blue": "hsl(227, 10%, 46%)",
            },
            height: {
                box: "38rem",
            },
            width: {
                box: "35rem",
            },
            backgroundImage: {
                box: "url('/images/bg-pattern-card.svg')",
            },
        },
    },
    plugins: [],
};
