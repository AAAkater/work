import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const token: Ref<string> = ref("");
    const setToken = (newToken: string) => {
      token.value = `Bearer ${newToken}`;
    };
    const removeToken = () => {
      token.value = "";
    };
    return {
      token,
      setToken,
      removeToken,
    };
  },
  {
    persist: true,
  }
);
