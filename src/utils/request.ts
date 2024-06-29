import { useUserStore } from "@/stores";
import axios, {
  AxiosError,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { isValidToken } from "./isValidToken";
// const mock_url = "http://127.0.0.1:4523/m1/4513055-4160394-default";
const url: string = `http://localhost:8080/`;

const instance = axios.create({
  baseURL: url,
  timeout: 1000000,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});
// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userStore = useUserStore();
    // 为所有请求设置token
    if (isValidToken(userStore.userToken)) {
      config.headers.Authorization = `Bearer ${userStore.userToken}`;
    }
    console.log(config.headers);
    return config;
  },
  (error: Error | AxiosError) => {
    console.error(`请求错误\n${error}`);
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: AxiosError) => {
    console.error(`响应错误\n${err}`);
    return Promise.reject(err);
  }
);
export { instance as request };
