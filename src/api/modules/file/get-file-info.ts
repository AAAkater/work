import type { getFileInfoParam } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/getFileInfo";

export const getFileInfo = ({ id }: getFileInfoParam) => {
  const param = {
    id: id,
  };
  return request.get(url, { params: param });
};