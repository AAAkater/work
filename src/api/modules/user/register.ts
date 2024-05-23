import { request } from "@/utils/request";
import { type registerBody } from "@/api/type";

const url: string = "/user/register";

export const userRegister = async ({
  captcha,
  email,
  emailCode,
  password,
  username,
}: registerBody) => {
  const body: Record<string, string> = {
    captcha: captcha,
    email: email,
    emailCode: emailCode,
    password: password,
    username: username,
  };

  return request.post(url, body);
};

// const d = async () => {
//   let res = await userRegister({
//     captcha: "1233",
//     email: "sfsa.com",
//     emailCode: "123r",
//     password: "bccc",
//     username: "nnn",
//   });

//   console.log(res);
// };

// d();
