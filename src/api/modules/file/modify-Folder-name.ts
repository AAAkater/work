import type { modifyFileNameBody, modifyFolderNameBody } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/modifyFolderName";

export const modifyFolderName = ({
  folderId,
  newFolderName,
}: modifyFolderNameBody) => {
  const body = {
    folderId: folderId,
    newFolderName: newFolderName,
  };

  return request.post(url, body);
};
