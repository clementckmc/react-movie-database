import { Container } from "react-bootstrap"
import { SearchBar } from "../../components/SearchBar/container"
import { MovieCard } from "../../components/MovieCard/container"
import { MovieDto } from "../../types/MovieDto"

type Props = {
  movieDtos?: MovieDto[]
}

export const IndexPagePresenter = ({
  movieDtos
}: Props) => {
  return (
      <Container>
        <h2>Trending</h2>
        {
          movieDtos && movieDtos.length > 0 ?
          <>
            {movieDtos.map((movieDto: MovieDto) => (
              <MovieCard 
                key={movieDto.id}
                movieDto={movieDto}
              />
            ))}
          </> :
          <h3>No movies found</h3>
        }
        <SearchBar />
      </Container>
  )
}
