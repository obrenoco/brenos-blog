module.exports = {
  important: "html",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.+(js|jsx)", "./pages/**/*.+(js|jsx)"],
  darkMode: "media",
  plugins: [require("@tailwindcss/typography")],
};
