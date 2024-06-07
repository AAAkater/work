import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const userToken: Ref<string> = ref("");
    const setUserToken = (newToken: string) => {
      userToken.value = newToken;
    };
    const removeUserToken = () => {
      userToken.value = "";
      localStorage.removeItem("user");
    };
    return {
      userToken,
      setUserToken,
      removeUserToken,
    };
  },
  {
    persist: true,
  }
);
