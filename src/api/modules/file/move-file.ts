import type { moveFileBody } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/moveFile";

export const moveFile = ({
  fileId,
  oldFolderId,
  newFolderId,
}: moveFileBody) => {
  const body = {
    fileId: fileId,
    oldFolderId: oldFolderId,
    newFolderId: newFolderId,
  };
  return request.post(url, body);
};
