import { request } from "@/utils/request";
import { type registerBody } from "@/api/type";

const url: string = "/user/register";

export const userRegister = async ({
  captcha,
  captchaId,
  email,
  emailCode,
  password,
  username,
}: registerBody) => {
  const body: Record<string, string> = {
    captcha: captcha,
    captchaId: captchaId,
    email: email,
    emailCode: emailCode,
    password: password,
    username: username,
  };

  return request.post(url, body);
};
