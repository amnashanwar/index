import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    vuePlugin(),
    Icons({
      autoInstall: true,
    }),
  ],
});
