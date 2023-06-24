/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "Light-grayish-blue": "hsl(240, 5%, 91%)",
                "Very-dark-grayish-blue": "hsl(237, 12%, 33%)",
                "Dark-grayish-blue": "hsl(240, 6%, 50%)",
                "Soft-violet": "hsl(273, 75%, 66%)",
                "Soft-blue": "hsl(240, 73%, 65%)",
                "Very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
                "Soft-red": "hsl(14, 88%, 65%)",
            },
            screens: {
                mobile: "375px",
            },
            spacing: {
                woman: "15%",
                box: "10%",
                "box-top": "70%",
            },
        },
    },
    plugins: [],
};
