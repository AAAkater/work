import type { getFileInfoParam } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/getFileInfo";

export const getFileInfo = ({ fileId }: getFileInfoParam) => {
  const param = {
    id: fileId,
  };
  return request.get(url, { params: param });
};
