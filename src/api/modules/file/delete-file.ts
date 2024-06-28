import type { deleteFileBody } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/deleteFile";

export const deleteFile = ({ fileId, fileType }: deleteFileBody) => {
  const body = {
    fileId: fileId,
    fileType: fileType,
  };
  return request.post(url, body);
};
