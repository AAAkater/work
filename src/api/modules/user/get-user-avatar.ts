import { request } from "@/utils/request";

const url: string = "/user/getAvatar";

export const getUserInfo = () => {
  return request.get(url);
};
