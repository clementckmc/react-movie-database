import { Container, Stack } from "react-bootstrap"
import { MovieDetailDto } from "../../types/MovieDetailDto"
import noImage from "../../assets/no_image.jpg";
import { imageURL } from "../../common/urls";

type Props = {
  movieDetailDto?: MovieDetailDto
}

export const MovieDetailPagePresenter = ({
  movieDetailDto
}: Props) => {
  return (
      <Container>
        {
          movieDetailDto ?
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <img src={movieDetailDto.poster_path ? `${imageURL}/${movieDetailDto.poster_path}` : noImage} alt="No Image Found" width="100%" height="100%" />
            </div>
            <div className="p-2 movie-detail-text">
              <h1>{movieDetailDto.title}</h1>
              <p><i>{movieDetailDto.overview}</i></p>
              <p><strong>Release Date:</strong> {movieDetailDto.release_date}</p>
              <p><strong>Runtime:</strong> {movieDetailDto.runtime} minutes</p>
              <p>Genres: {movieDetailDto.genres.map(genre => genre.name).join(", ")}</p>
            </div>
          </Stack> :
          <h2>No movie found</h2>
        }
      </Container>
  )
}
