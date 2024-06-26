import type { getFolderInfoParam } from "@/api/type";
import { request } from "@/utils/request";

const url: string = "/file/getFolderInfo";

export const getFolderInfo = ({ folderId }: getFolderInfoParam) => {
  const param = {
    folderId: folderId,
  };
  return request.get(url, { params: param });
};
