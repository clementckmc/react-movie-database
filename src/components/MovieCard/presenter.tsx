import { Button, Card } from "react-bootstrap"
import noImage from "../../assets/no_image.jpg";

export const MovieCardPresenter: React.FC = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={noImage} alt="No Image Found" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
