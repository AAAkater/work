import { request } from "@/utils/request";

const url: string = "/user/signout";

export const userSignout = () => {
  return request.post(url);
};
