import { request } from "@/utils/request";
import { type loginBody } from "@/api/type";

const url: string = "/user/login";
export const userLogin = async ({
  email,
  username,
  password,
  captcha,
}: loginBody) => {
  const body: Record<string, string> = {
    password: password,
    captcha: captcha,
  };
  if (email) {
    body["email"] = email;
  } else if (username) {
    body["username"] = username;
  }

  return request.post(url, body);
};
