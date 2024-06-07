import type { moveFolderBody } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/moveFolder";

export const moveFolder = ({
  folderId,
  oldFolderId,
  newFolderId,
}: moveFolderBody) => {
  const body = {
    folderId: folderId,
    oldFolderId: oldFolderId,
    newFolderId: newFolderId,
  };
  return request.post(url, body);
};
