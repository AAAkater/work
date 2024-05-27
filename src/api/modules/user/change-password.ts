import { request } from "@/utils/request";
import { useUserStore } from "@/stores";
import type { changePasswordBody } from "@/api/type";

const url: string = "/user/changePassword";

export const changePassword = async ({
  userId,
  newPassword,
  oldPassword,
  emailCode,
}: changePasswordBody) => {
  const header: Record<string, string> = {
    Authorization: useUserStore().token,
  };
  const body = {
    userId: userId,
    newPassword: newPassword,
    oldPassword: oldPassword,
    emailCode: emailCode,
  };

  return request.post(url, body, { headers: header });
};
