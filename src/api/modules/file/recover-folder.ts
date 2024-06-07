import type { recoverFolderBody } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/recoverFolder";

export const recoverFolder = ({
  folderId,
  parentFolderId,
  userId,
}: recoverFolderBody) => {
  const body = {
    folderId: folderId,
    parentFolderId: parentFolderId,
    userId: userId,
  };
  return request.post(url, body);
};
