import { request } from "@/utils/request";
import { useUserStore } from "@/stores";

const url: string = "/user/logout";

export const userLogout = () => {
  const header: Record<string, string> = {
    Authorization: useUserStore().token,
  };
  return request.get(url, { headers: header });
};
