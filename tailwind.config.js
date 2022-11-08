/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
        "eina01-semibold": "Eina01-SemiBold",
        ubuntu: "Ubuntu",
      },
    },
    colors: {
      gray: {
        "100": "#0c3844",
        "200": "#001d25",
        "300": "rgba(255, 255, 255, 0.03)",
        "400": "rgba(255, 255, 255, 0.6)",
      },
      white: "#fff",
      indigo: "#0070ff",
      brown: "#fc0160",
      orange: "#e49f36",
      black: "#000",
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "18.33px",
      "2xl": "22px",
      "3xl": "48px",
      "4xl": "52px",
      "5xl": "66px",
    },
  },
  corePlugins: { preflight: false },
};
