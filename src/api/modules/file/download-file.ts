import type { downloadFileParam } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/downloadFile";

export const downloadFile = ({ fileId }: downloadFileParam) => {
  const param = {
    fileId: fileId,
  };
  return request.get(url, { params: param, responseType: "blob" });
};
