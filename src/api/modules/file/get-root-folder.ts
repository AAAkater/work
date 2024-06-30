import type { getFolderInfoParam } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/folder/root";

export const getRootFolderInfo = ({ folderId }: getFolderInfoParam) => {
  const param = {
    RootFolderId: folderId,
  };
  return request.get(url, { params: param });
};
