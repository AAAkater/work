import type { deleteFolderBody } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/deleteFolder";

export const deleteFolder = ({ folderId }: deleteFolderBody) => {
  const body = {
    folderId: folderId,
  };
  return request.post(url, body);
};
