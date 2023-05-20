/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "Very-Dark-Blue": "hsl(234, 12%, 34%)",
                "Grayish-Blue": "hsl(229, 6%, 66%)",
                "Very-Light-Gray": "hsl(0, 0%, 98%)",
            },
            width: {
                container: "35%",
            },
        },
    },
    plugins: [],
};
