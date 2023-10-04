import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import UnoCSS from "unocss/vite";

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  plugins: [UnoCSS(), vuePlugin(), svgLoader()],
});
