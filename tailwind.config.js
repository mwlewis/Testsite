/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vault: {
          blue: "#3F6F8E",
          blueDark: "#274C67",
          blueLight: "#ECF2F6",
          ink: "#0B0F10"
        },
      },
      borderRadius: { "2xl": "1.5rem" },
      fontFamily: { sans: ["Inter","ui-sans-serif","system-ui","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","Apple Color Emoji","Segoe UI Emoji"] }
    },
  },
  plugins: [],
}
