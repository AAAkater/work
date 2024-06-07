import type { modifyFileNameBody } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/modifyFileName";

export const modifyFileName = ({
  fileId,
  fileType,
  newFileName,
}: modifyFileNameBody) => {
  const body = {
    fileId: fileId,
    fileType: fileType,
    newFileName: newFileName,
  };

  return request.post(url, body);
};
