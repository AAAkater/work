import { useUserStore } from "@/stores";
import { isValidToken } from "@/utils/isValidToken";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      component: () => import("@/views/dashboard/layout.vue"),
    },
    {
      path: "/404",
      component: () => import("@/views/404/NotFound.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/login/LoginView.vue"),
    },
    {
      path: "/userInfo",
      component: () => import("@/views/user-info-page/UserInfo.vue"),
    },
  ],
});
router.beforeEach((to, from) => {
  if (to.path === "/") {
    return "/login";
  }
  const userStore = useUserStore();
  if (!isValidToken(userStore.userToken) && to.path !== "/login")
    return "/login";
});
export default router;
