import { Badge, Button, Container, Stack } from "react-bootstrap"
import { MovieDetailDto } from "../../types/MovieDetailDto"
import noImage from "../../assets/no_image.jpg";
import { imageURL } from "../../common/urls";
import { useNavigate } from "react-router-dom";

type Props = {
  movieDetailDto?: MovieDetailDto
}

export const MovieDetailPagePresenter = ({
  movieDetailDto
}: Props) => {
  const navigate = useNavigate();

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
              <h4>
                {movieDetailDto.genres.map(genre => <Badge bg="info" pill={true} className="genre-badge">{genre.name}</Badge>)}
              </h4>
            </div>
          </Stack> :
          <h2>No movie found</h2>
        }
        <Button onClick={() => navigate(-1)} variant="secondary" className="mt-3" style={{textAlign: "left"}}>
          <i className="bi bi-arrow-return-left"></i> Previous Page
        </Button>
      </Container>
  )
}
