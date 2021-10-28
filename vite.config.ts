import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [
    WindiCSS(),
    vuePlugin(),
    Icons({
      autoInstall: true,
    }),
  ],
});
