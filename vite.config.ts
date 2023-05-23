import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    UnoCSS(),
    vuePlugin(),
    Icons({
      autoInstall: true,
    }),
  ],
});
