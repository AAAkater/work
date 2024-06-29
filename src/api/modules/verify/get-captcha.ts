import { request } from "@/utils/request";

const url: string = "user/captcha";

export const getCaptcha = () => {
  return request.get(url);
};
