
module.exports = {
  purge: [ "./src/_includes/**/*.njk", "./src/*.html" ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          900: "var(--blue-900)",
          800: "var(--blue-800)",
          700: "var(--blue-700)",
          600: "var(--blue-600)",
          500: "var(--blue-500)",
          400: "var(--blue-400)",
          300: "var(--blue-300)",
          200: "var(--blue-200)",
          100: "var(--blue-100)",
          50: "var(--blue-50)"
        },
        green: {
          900: "var(--green-900)",
          800: "var(--green-800)",
          700: "var(--green-700)",
          600: "var(--green-600)",
          500: "var(--green-500)",
          400: "var(--green-400)",
          300: "var(--green-300)",
          200: "var(--green-200)",
          100: "var(--green-100)",
          50: "var(--green-50)"
        },
        gray: {
          900: "var(--gray-900)",
          800: "var(--gray-800)",
          700: "var(--gray-700)",
          600: "var(--gray-600)",
          500: "var(--gray-500)",
          400: "var(--gray-400)",
          300: "var(--gray-300)",
          200: "var(--gray-200)",
          100: "var(--gray-100)",
          50: "var(--gray-50)"
        }
      }
    },
    fontFamily: {
      mono: ["var(--font-mono)"],
      sans: ["var(--font-sans)"]
    }
  }
}