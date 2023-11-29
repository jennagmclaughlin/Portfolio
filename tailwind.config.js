/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "blue": "#747cbd",
                "dark-blue": "#1b3554",
                "pink": "#fabaa2",
                "pink-hover": "#b87056",
                "white": "#efefef",
                "white-transparent": "rgba(239,239,239,0)",
            },
        },
    },
    plugins: [require("tailwindcss-bg-patterns")],
};
