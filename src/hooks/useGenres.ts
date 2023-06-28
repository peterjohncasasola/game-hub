import genres from "../data/genres"
import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchDataResponse } from "../services/api-client"

const apiClient = new APIClient<Genre>('/genres')
export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  staleTime:24 * 60 * 60 * 1000,
  initialData: {count: genres.length, results: genres},
  queryFn: apiClient.getAll
})
export default useGenres;