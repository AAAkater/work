import { getUserInfo } from "@/api";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const userToken: Ref<string> = ref("");
    const userId = ref("");
    const username = ref("");
    const userEmail = ref("");
    const userRole = ref("");
    const userRootDir = ref("");

    const setUserInfo = () => {
      // let res = await getUserInfo();
      getUserInfo().then((res) => {
        if (res.status !== 200) {
          console.log("无此用户");
          console.error("用户信息存储失败");
          return;
        }
        if (res.data.code == 0) {
          const data = res.data.data;
          console.log(data);

          userId.value = data.userId;
          username.value = data.username;
          userEmail.value = data.email;
          userRole.value = data.userRole;
          userRootDir.value = data.userRootFolder;

          console.log("用户信息存储成功");
        } else {
          console.error("用户信息存储失败");
        }
      });
    };
    const setUserToken = (newToken: string) => {
      userToken.value = newToken;
    };
    const removeUserToken = () => {
      userToken.value = "";
      localStorage.removeItem("user");
    };
    return {
      userToken,
      userId,
      username,
      userEmail,
      userRole,
      userRootDir,
      setUserToken,
      removeUserToken,
      setUserInfo,
    };
  },
  {
    persist: true,
  }
);
