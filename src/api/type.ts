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
