/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "my-Cyan": "hsl(179, 62%, 43%)",
                "my-Cyan-Light": "hsl(179, 62%, 50%)",
                "Bright-Yellow": "hsl(71, 73%, 54%)",
                "Light-Gray": "hsl(204, 43%, 93%)",
                "Grayish-Blue": "hsl(218, 22%, 67%)",
            },
            screens: {
                "mobile-size": "375px",
            },
            width: {
                "my-width": "68%",
            },
        },
    },
    plugins: [],
};
