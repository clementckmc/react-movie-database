import { Container } from "react-bootstrap"
import { SearchBar } from "../../components/SearchBar/container"
import { MovieCard } from "../../components/MovieCard/container"

export const IndexPagePresenter: React.FC = () => {
  return (
      <Container>
        <h2>Trending</h2>
        <MovieCard />
        <SearchBar />
      </Container>
  )
}
