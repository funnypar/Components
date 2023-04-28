/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        fontFamily: {
            "Hanken-Grotesk": "Hanken Grotesk",
        },
        screens: {
            mobile: "375px",
        },
        extend: {
            colors: {
                "Light-red": "hsl(0, 100%, 67%)",
                "Bg-Light-red": "hsl(0, 100%, 98%)",
                "Orangey-yellow": "hsl(39, 100%, 56%)",
                "Bg-Orangey-yellow": "hsl(39, 100%, 98%)",
                "Green-teal": "hsl(166, 100%, 37%)",
                "Bg-Green-teal": "hsl(166, 100%, 98%)",
                "Cobalt-blue": "hsl(234, 85%, 45%)",
                "Pale-blue": "hsl(221, 100%, 96%)",
                "Light-lavender": "hsl(241, 100%, 89%)",
                "Darker-lavender": "hsla(241, 100%, 89%, 0.8)",
                "Darkest-lavender": "hsla(241, 100%, 89%, 0.6)",
                "Dark-gray-blue": "hsl(224, 30%, 27%)",
                "Light-gray-blue": "hsl(224, 30%, 27%, 0.6)",
                "Light-slate-blue": "hsl(252, 100%, 67%)",
                "Light-royal-blue": "hsl(241, 81%, 54%)",
                "Violet-blue": "hsla(256, 72%, 46%, 1)",
                "Bg-Violet-blue": "hsl(256, 72%, 98%)",
                "Persian-blue": "hsla(241, 72%, 46%, 0)",
            },
            width: {
                "w-box": "60rem",
            },
            height: {
                "h-box": "40rem",
            },
            borderRadius: {
                box: "3rem",
            },
        },
    },
    plugins: [],
};
