/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "Light-Grey": "hsl(217, 12%, 63%)",
                "Medium-Grey": "hsl(216, 12%, 54%)",
                "Dark-Blue": "hsl(213, 19%, 18%)",
                "Light-Dark-Blue": "hsl(213, 19%, 25%)",
                "Very-Dark-Blue": "hsl(216, 12%, 8%)",
                "my-Orange": "hsl(25, 97%, 53%)",
            },
            borderRadius: {
                "4xl": "3rem",
            },
        },
    },
    plugins: [],
};
