/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        darkYellow:"#FF9801",
        darkblack:"#1e1c22",
        black:"#0F1111",
        lightGray:"#F9F8F8",
        yellow:"#ffc107",
        lightgreen:"#20c997",
        darkGreen:"#28a745",
        white:"#ffffff"

      },
      fontFamily:{
        // Bree:["Bree Serif"]
        Bree:["Bree"],
        Elephant:["Elephant"],
        Roboto: ["Roboto", "sans-serif"],
        Poppins:["Poppins,sans-serif"]


      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
