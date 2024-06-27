import { defineStore } from "pinia";
import { ref, type Ref, computed, type ComputedRef } from "vue";
import { type file } from "@/stores/type";
export const useFilesStore = defineStore(
  "files",
  () => {
    const Files: Ref<file[]> = ref([]);
    const clearFiles = () => {
      Files.value = [];
    };
    const setFiles = (files: file[]) => {
      Files.value = files;
    };
    const isEmpty: ComputedRef<boolean> = computed(() => {
      return Files.value.length === 0;
    });
    return {
      Files,
      isEmpty,
      clearFiles,
      setFiles,
    };
  },
  {
    persist: true,
  }
);
