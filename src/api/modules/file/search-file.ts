import type { searchFileParam } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/searchFile";

export const searchFile = ({ desc }: searchFileParam) => {
  const param = {
    desc: desc,
  };
  return request.get(url, { params: param });
};
