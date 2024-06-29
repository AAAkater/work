export * from "./modules/user";
export * from "./modules/files";
export * from "./modules/info";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

export default pinia;
