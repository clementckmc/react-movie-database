import { Button, Card } from "react-bootstrap"
import noImage from "../../assets/no_image.jpg";
import { ComponentProps } from "react";
import { MovieCard } from "./container";
import { imageURL } from "../../common/urls";

type Props = Pick<ComponentProps<typeof MovieCard>, "movieDto">

export const MovieCardPresenter: React.FC<Props> = ({
  movieDto
}: Props) => {
  return (
    <Card style={{ width: '18rem' }} className="mx-1 mb-4">
      <Card.Img variant="top" src={movieDto.poster_path ? `${imageURL}/${movieDto.poster_path}` : noImage} alt="No Image Found" />
      <Card.Body>
        <Card.Title>{movieDto.title}</Card.Title>
        <Card.Text>{movieDto.release_date}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
