module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rookie: "#FE5F7F",
        intraining: "#56C2E6",
        champion: "#F1C75B",
        ultimate: "#FF8B64",
        mega: "#4CCE84",
      },

      animation: {
        shake: "shake 1s ease-in-out 0s infinite normal forwards",
      },

      keyframes: {
        shake: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
            // transformOrigin: "50% 50%",
          },

          "50%": {
            transform: "rotate(3deg)",
          },

          // "10%": {
          //   transform: "rotate(3deg)",
          // },

          // "20%, 40%, 60%": {
          //   transform: "rotate(-5deg)",
          // },

          // "30%,50%,70%": {
          //   transform: "rotate(5deg)",
          // },

          // "80%": {
          //   transform: "rotate(-3deg)",
          // },

          // "90%": {
          //   transform: "rotate(3deg)",
          // },
        },
      },
    },
  },
  plugins: [],
};
