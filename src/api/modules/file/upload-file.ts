import type { uploadFileBody } from "@/api/type";
import { request } from "@/utils/request";
const url: string = "/file/uploadFile";
export const uploadFile = ({
  fileType,
  file,
  parentFolderId,
}: uploadFileBody) => {
  const header = {
    "Content-Type": "multipart/form-data",
  };
  const formData = new FormData();
  formData.append("fileType", fileType);
  formData.append("file", file);
  formData.append("parentFolderId", parentFolderId);

  return request.post(url, formData, { headers: header });
};
