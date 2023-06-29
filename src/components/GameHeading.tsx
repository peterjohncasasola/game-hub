import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGames from "../hooks/useGames"
import useGenres from "../hooks/useGenres"
import usePlatforms from "../hooks/usePlatforms"

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres()
  const { data: platforms } = usePlatforms()

  const selectedGenre = genres.results.find(
    (genre) => genre.id === gameQuery.genreId
  )
  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  )

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  )
}

export default GameHeading
