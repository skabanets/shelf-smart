/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "montserrat-regular": ["Montserrat-Regular.", "sans-serif"],
      "montserrat-semibold": ["Montserrat-SemiBold", "sans-serif"],
    },
    screens: {
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        primaryBgColor: "var(--background-color)",
        primaryTextColor: "var(--primary-text-color)",
        secondaryTextColor: "var(--secondary-text-color)",
        buttonColor: "var(--button-color)",
        buttonHoverColor: "var(--button-hover-color)",
        tableHeaderColor: "var(--table-header-color)",
        tableRowOddColor: "var(--table-row-odd-color)",
        tableRowEvenColor: "var(--table-row-even-color)",
        statusBorrowedColor: "var(--status-borrowed-color)",
        statusAvailableColor: "var(--status-available-color)",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          minWidth: "320px",
          maxWidth: "375px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          "@screen md": {
            paddingLeft: "32px",
            paddingRight: "32px",
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: "100px",
            paddingRight: "100px",
            maxWidth: "1440px",
          },
        },
      });
    },
  ],
};
