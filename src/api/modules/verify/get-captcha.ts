import { request } from "@/utils/request";

const url: string = "/captcha/image";

export const getCaptcha = () => {
  return request.get(url);
};
