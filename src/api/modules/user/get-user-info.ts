import { request } from "@/utils/request";

const url: string = "/user/getUserInfo";

export const getUserInfo = () => {
  return request.get(url);
};
