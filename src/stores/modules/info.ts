import { defineStore } from "pinia";
import { ref } from "vue";

export const useInfoStore = defineStore("info", () => {
  const isInfo = ref(false);

  return {
    isInfo,
  };
});
