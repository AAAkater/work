import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/global.css";
import pinia from "./stores";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(pinia);
app.use(router);

app.mount("#app");
