import { Button, Dropdown, Form, InputGroup } from "react-bootstrap"

export const SearchBarPresenter: React.FC = () => {
  return (
    <InputGroup className="mb-1">
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          English
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Japanese</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
