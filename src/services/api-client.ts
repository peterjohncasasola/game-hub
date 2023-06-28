import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '971aac1673c84dad8c83a956361c23de'
  }
});

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchDataResponse<T>>(this.endpoint, config);
    return res.data;
  }
}

export default APIClient
