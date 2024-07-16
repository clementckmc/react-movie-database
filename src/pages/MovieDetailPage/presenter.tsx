import { Container } from "react-bootstrap"
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
          <Container>
            <h1>{movieDetailDto.title}</h1>
            <img src={movieDetailDto.poster_path ? `${imageURL}/${movieDetailDto.poster_path}` : noImage} alt="No Image Found" />
            <p>{movieDetailDto.overview}</p>
            <p>Release Date: {movieDetailDto.release_date}</p>
            <p>Runtime: {movieDetailDto.runtime} minutes</p>
            <p>Genres: {movieDetailDto.genres.map(genre => genre.name).join(", ")}</p>
          </Container> :
          <h2>No movie found</h2>
        }
      </Container>
  )
}
