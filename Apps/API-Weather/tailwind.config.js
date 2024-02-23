export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "app-gradiant": "linear-gradient(to top, #a8edea 0%, #fed6e3 100%);",
        "app-darkMode-gradiant":
          "linear-gradient(to right, #868f96 0%, #596164 100%);",
        "custom-white-gradiant":
          "linear-gradient(135deg, #fdfcfbd5 0%, #e2d1c3b8 100%);",
        "custom-dark-gradiant":
          "linear-gradient(60deg, #29323c 0%, #485563 100%);",
      },
    },
  },
  plugins: [],
};
