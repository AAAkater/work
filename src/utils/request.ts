import axios, {
    AxiosError,
    type InternalAxiosRequestConfig,
    type AxiosResponse,
} from 'axios'

let url= `http://127.0.0.1:4523/m1/4513055-0-default/` //mock
// let url = `http://localhost:8080/`
let Host = `127.0.0.1`

const instance = axios.create({
    baseURL: url,
    timeout: 1000000,
    headers: {
        Host: Host,
        Origin: url,
        Accept: 'application/json, text/plain, */*',
    },
})

instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log(config)
        return config
    },
    (error: Error | AxiosError) => {
        console.error(error)
        return Promise.reject(error)
    },
)
instance.interceptors.response.use(
    (res: AxiosResponse) => {
        return res
    },
    (err: AxiosError) => {
        return Promise.reject(err)
    },
)
export { instance as request }
