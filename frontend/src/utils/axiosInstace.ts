import axios, { Method, AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";

export const url = `http://localhost:3001/`;

const config: AxiosRequestConfig = {
    baseURL: url,
}

export const api: AxiosInstance = axios.create(config);

const request = <T>(
    method: Method,
    url: string,
    data?: any,
    params?: object,
): Promise<AxiosResponse<T>> => {
    return api.request<T>({
        method,
        url,
        data,
        params
    });
};

export default request;
