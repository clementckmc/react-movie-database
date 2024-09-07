import { Container, Row } from "react-bootstrap"
import { MovieCard } from "../../components/MovieCard/container"
import { MovieDto } from "../../types/MovieDto"

type Props = {
  movieDtos?: MovieDto[]
  query: string
}

export const SearchResultPagePresenter = ({
  movieDtos,
  query
}: Props) => {
  return (
      <Container>
        <h2 style={{ textAlign: "center" }}>Top Search Results for "{query}"</h2>
        {
          movieDtos && movieDtos.length > 0 ?
          <Row>
            {movieDtos.map((movieDto: MovieDto) => (
              <MovieCard 
                key={movieDto.id}
                movieDto={movieDto}
              />
            ))}
          </Row> :
          <h3>No movies found</h3>
        }
      </Container>
  )
}
