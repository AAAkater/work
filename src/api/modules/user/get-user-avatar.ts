import { request } from "@/utils/request";

const url: string = "/user/getAvatar";

export const getAvatar = () => {
  return request.get(url);
};
