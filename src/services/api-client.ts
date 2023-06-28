import axios from "axios";

export interface FetchDataResponse<T> {
  count: number
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '971aac1673c84dad8c83a956361c23de'
  }
}) 