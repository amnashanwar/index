import '@unocss/reset/normalize.css'
import "virtual:uno.css";
import "./custom.css";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./router";

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {}
);
