export default {
    tabWidth: 4,
    overrides: [
        {
            files: "./src/**/*.ts",
        },
        {
            files: ["./src/**/*.vue"],
            
        },
    ],
    plugins: ["prettier-plugin-tailwindcss"],
};
