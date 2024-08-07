/**
 * @param {string} email 邮箱
 * @param {string} username 用户名
 * @param {string} password 密码
 * @param {string} captcha 图片验证码(四位)
 * @param {string} captchaId 验证码Id
 * @export
 * @interface loginBody
 */
export interface loginBody {
  email?: string;
  username?: string;
  password: string;
  captchaId: string;
  captcha: string;
}
/**
 * @param {string} captcha 图像验证码
 * @param {string} captchaId 验证码Id
 * @param {string} email 邮箱
 * @param {string} emailCode 邮箱验证码
 * @param {string} password 用户密码
 * @param {string} username 用户名
 *
 * @export
 * @interface registerBody
 */
export interface registerBody {
  captcha: string;
  captchaId: string;
  email: string;
  emailCode: string;
  password: string;
  username: string;
}
/**
 * @param {string} emailCode 邮箱验证码
 * @param {string} newPassword 新密码
 * @param {string} oldPassword 旧密码
 * @param {string} userId 用户Id
 *
 * @export
 * @interface changePassword
 */
export interface changePasswordBody {
  emailCode: string;
  newPassword: string;
  oldPassword: string;
  userId: string;
}
/**
 *
 *
 * @export
 * @interface updateBody
 */
export interface updateBody {
  email: string;
  username: string;
}
/**
 * @param {string} fileType 文件类型
 * @param file 文件
 * @param {string} parentFolderId 所属文件夹Id
 * @export
 * @interface uploadFileBody
 */
export interface uploadFileBody {
  fileType: string;
  file: any;
  parentFolderId: string;
}
/**
 *
 *
 * @export
 * @interface createFolderBody
 */
export interface createFolderBody {
  parentFolderId: string;
  folderName: string;
}
/**
 *
 *
 * @export
 * @interface recoverFileBody
 */
export interface recoverFileBody {
  fileId: string;
  parentFolderId: string;
  userId: string;
}
/**
 *
 *
 * @export
 * @interface recoverFolderBody
/**
 *
 *
 * @export
 * @interface recoverFolderBody
 */
export interface recoverFolderBody {
  folderId: string;
  parentFolderId: string;
  userId: string;
}
/**
 *
 *
 * @export
 * @interface downloadFile
 */
export interface downloadFileParam {
  fileId: string;
}
/**
 *
 *
 * @export
 * @interface getFolderInfoBody
 */
export interface getFolderInfoParam {
  folderId: string;
}
/**
 *
 *
 * @export
 * @interface getFileInfoParam
 */
export interface getFileInfoParam {
  id: string;
}
/**
 *
 *
 * @export
 * @interface searchFileParam
 */
export interface searchFileParam {
  desc: string;
}
/**
 *
 *
 * @export
 * @interface moveFileBody
 */
export interface moveFileBody {
  fileId: string;
  newFolderId: string;
  oldFolderId: string;
}

/**
 *
 *
 * @export
 * @interface moveFolderBody
 */
export interface moveFolderBody {
  folderId: string;
  newFolderId: string;
  oldFolderId: string;
}
/**
 *
 *
 * @export
 * @interface deleteFileBody
 */
export interface deleteFileBody {
  fileId: string;
  fileType: string;
}
/**
 *
 *
 * @export
 * @interface deleteFolderBody
 */
export interface deleteFolderBody {
  folderId: string;
}
/**
 *
 *
 * @export
 * @interface modifyFileNameBody
 */
export interface modifyFileNameBody {
  fileId: string;
  fileType: string;
  newFileName: string;
}
/**
 *
 *
 * @export
 * @interface modifyFolderNameBody
 */
export interface modifyFolderNameBody {
  folderId: string;
  newFolderName: string;
}
/**
 *
 *
 * @export
 * @interface getEmailParam
 */
export interface getEmailParam {
  email: string;
}

export interface getFileInfoParam {
  fileId: string;
}
