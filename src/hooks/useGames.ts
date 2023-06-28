import { useQuery } from "@tanstack/react-query"
import { GameQuery } from "../App"
import { Platform } from "./usePlatforms"
import APIClient, { FetchDataResponse } from "../services/api-client"

const apiClient = new APIClient<Game>('/games')

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: {platform: Platform}[]
  metacritic: number
  rating_top: number
}

const useGames = (gameQuery : GameQuery) => 
useQuery<FetchDataResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.getAll({
    params: { 
      genres: gameQuery.genre?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      parent_platforms: gameQuery.platform?.id
    }
  })
})

export default useGames;