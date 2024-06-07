import { request } from "@/utils/request";
import { type loginBody } from "@/api/type";
import { useUserStore } from "@/stores";
const url: string = "/user/login";
export const userLogin = async ({
  email,
  username,
  password,
  captcha,
  captchaId,
}: loginBody) => {
  const body: Record<string, string> = {
    password: password,
    captcha: captcha,
    captchaId: captchaId,
  };
  if (email) {
    body["email"] = email;
  } else if (username) {
    body["username"] = username;
  }

  const res = await request.post(url, body);
  // 登录成功就存储token
  if (res.status === 200 && res.data.message === "ok") {
    const userStore = useUserStore();
    userStore.setUserToken(res.data.data);
  }

  return res;
};
