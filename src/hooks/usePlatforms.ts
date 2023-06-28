import { useQuery } from "@tanstack/react-query"
import { FetchDataResponse } from "../services/api-client"
import apiClient from "../services/api-client"
import platforms from "../data/platforms"

export interface Platform {
  id: number
  name: string
  slug: string
}


const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  staleTime: 24 * 60 * 60 * 1000,
  initialData: {count: platforms.length, results: platforms},
  queryFn: () => apiClient.get<FetchDataResponse<Platform>>('/platforms/lists/parents').then(res => res.data)
})


export default usePlatforms