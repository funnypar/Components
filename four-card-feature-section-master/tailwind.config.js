/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "Very-Dark-Blue": "hsl(234, 12%, 34%)",
                "Grayish-Blue": "hsl(229, 6%, 66%)",
                "Very-Light-Gray": "hsl(0, 0%, 98%)",
                "my-Red": "hsl(0, 78%, 62%)",
                "my-Cyan": "hsl(180, 62%, 55%)",
                "my-Orange": "hsl(34, 97%, 64%)",
                "my-Blue": "hsl(212, 86%, 64%)",
            },
            width: {
                container: "35%",
            },
        },
    },
    plugins: [],
};
