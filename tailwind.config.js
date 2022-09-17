/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        ptserif: "'PT Serif', serif;",
      },
      colors: {
        "main-orange": "#DD8D5A",
        "light-orange": "#E2AC86",
        "very-light-orange": "#E4CFB4",
        "main-green": "#708A81",
        "dark-green": "#42524C",
        "main-blue": "#1E3444",
        "main-background": "#FBF9ED",
      },
      fontSize: {
        title1: "3.2rem",
        title2: "2.8rem",
        title3: "2rem",
        base: "1.4rem",
      },
      backgroundImage: {
        hero: "url('/images/hero.png')",
        "body-doodle": "url('/images/body.png')",
      },
    },
  },
  plugins: [],
};
