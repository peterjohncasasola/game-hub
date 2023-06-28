import genres from "../data/genres"
import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"
import { FetchDataResponse } from "../services/api-client"

export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  staleTime:24 * 60 * 60 * 1000,
  initialData: {count: genres.length, results: genres},
  queryFn: () => apiClient.get<FetchDataResponse<Genre>>('/genres').then(res => res.data)
})
export default useGenres;