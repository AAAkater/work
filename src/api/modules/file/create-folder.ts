import { request } from "@/utils/request";
import { type createFolderBody } from "@/api/type";

const url: string = "/file/createFolder";
export const createFolder = ({
  parentFolderId,
  folderName,
}: createFolderBody) => {
  const body = {
    parentFolderId: parentFolderId,
    folderName: folderName,
  };

  return request.post(url, body);
};
