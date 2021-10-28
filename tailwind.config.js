import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]
  },
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        cream: "#eff0eb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
