import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from "unocss";


import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetUno({
      dark: "media",
    }),
  ],
  theme: {
    colors: {
      cream: "#eff0eb",
    },
  },
})
