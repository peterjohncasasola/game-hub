import { useInfiniteQuery } from "@tanstack/react-query"
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
useInfiniteQuery<FetchDataResponse<Game>, Error>({
  queryKey: ['games', gameQuery], 
  staleTime: 24 * 60 * 60 * 1000, //24h
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined 
  },
  queryFn: ({pageParam = 1}) => apiClient.getAll({
    params: {
      page: pageParam,
      genres: gameQuery.genreId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      parent_platforms: gameQuery.platformId
    }
  })
})

export default useGames;