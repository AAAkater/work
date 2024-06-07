import type { recoverFileBody } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/recoverFile";

export const recoverFile = ({
  fileId,
  parentFolderId,
  userId,
}: recoverFileBody) => {
  const body = {
    fileId: fileId,
    parentFolderId: parentFolderId,
    userId: userId,
  };
  return request.post(url, body);
};
