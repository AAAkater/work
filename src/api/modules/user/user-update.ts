import { request } from "@/utils/request";
import { type updateBody } from "@/api/type";

const url: string = "/user/update";

export const userUpdate = async ({
  email,
  username,
}: updateBody) => {
  const body: Record<string, string> = {
    email: email,
    username: username,
  };

  return request.post(url, body);
};
