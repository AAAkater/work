/**
 * @param {string} email 邮箱
 * @param {string} username 用户名
 * @param {string} password 密码
 * @param {string} captcha 图片验证码(四位)
 *
 * @export
 * @interface loginBody
 */
export interface loginBody {
  email?: string;
  username?: string;
  password: string;
  captcha: string;
}
/**
 * @param {string} captcha 图像验证码
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
  email: string;
  emailCode: string;
  password: string;
  username: string;
}
