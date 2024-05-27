import { request } from "@/utils/request";
import { useUserStore } from "@/stores";

const url: string = "/user/signout";

export const userSignout = () => {
  const header: Record<string, string> = {
    Authorization: useUserStore().token,
  };
  return request.get(url, { headers: header });
};
