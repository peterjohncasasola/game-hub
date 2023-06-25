import { GameQuery } from "../App"
import useData from "./useData"
import { Platform } from "./usePlatforms"

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: {platform: Platform}[]
  metacritic: number
}

const useGames = (gameQuery : GameQuery) => 
useData<Game>('/games', {
  params: {
    genres: gameQuery.genre?.id,
    ordering: gameQuery.sortOrder,
    platforms: gameQuery.platform?.id
  }
}, 
[gameQuery])

export default useGames;