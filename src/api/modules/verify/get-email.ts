import { request } from "@/utils/request";
import type{ getEmailParam } from "@/api/type";

const url: string = "/captcha/sendEmailCode";

export const getEmail = ({
    email
} :getEmailParam) => {
    const param={
        email:email,
    };
  return request.get(url,{params:param});
};
