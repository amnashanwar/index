import { defineConfig, presetUno, presetWebFonts, presetIcons } from "unocss";


import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetUno({
      dark: "media",
    }),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: 'Roboto:300',
        playfair: "Playfair Display",
      },
    })
  ],
  theme: {
    colors: {
      cream: "#eff0eb",
    },
  },
})
