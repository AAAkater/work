import { request } from "@/utils/request";

const url: string = "/user/logout";

export const userLogout = () => {
  return request.get(url);
};
