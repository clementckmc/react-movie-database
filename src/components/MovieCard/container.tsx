import { MovieDto } from "../../types/MovieDto"
import { MovieCardPresenter } from "./presenter"

type Props = {
  movieDto: MovieDto
}

export const MovieCard: React.FC<Props> = ({
  movieDto
}: Props) => {
  return (
    <MovieCardPresenter 
      movieDto={movieDto}
    />
  )
}
