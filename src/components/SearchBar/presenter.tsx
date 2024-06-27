import { Button, Form, InputGroup } from "react-bootstrap"

export const SearchBarPresenter: React.FC = () => {
  return (
    <InputGroup className="mb-3">
    <Form.Control
      placeholder="Type a movie name to search..."
      aria-label="Search Movie By Name"
    />
    <Button variant="outline-secondary" id="button-addon2">
      <i className="bi bi-search"></i>
    </Button>
  </InputGroup>
  )
}
