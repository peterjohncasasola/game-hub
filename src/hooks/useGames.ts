import { GameQuery } from "../App"
import useData from "./useData"
import { Platform } from "./usePlatforms"

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: {platform: Platform}[]
  metacritic: number
  rating_top: number
}

const useGames = (gameQuery : GameQuery) => 
useData<Game>('/games', {
  params: {
    genres: gameQuery.genre?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
    platforms: gameQuery.platform?.id
  }
}, 
[gameQuery])

export default useGames;