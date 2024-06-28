export const isValidToken = (token: string) => {
  if (token === "") {
    return false;
  }
  // 解码 token，获取 payload 部分
  const tokenPayload: string = token.split(".")[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));

  // 获取过期时间（以秒为单位）
  const expirationTime = decodedPayload.exp;

  // 获取当前时间（以秒为单位）
  const currentTime = Math.floor(Date.now() / 1000);

  // 判断是否过期
  if (expirationTime < currentTime) {
    return false;
  } else {
    return true;
  }
};
