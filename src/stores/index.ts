export * from "./modules/files";
export * from "./modules/user";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

export default pinia;
