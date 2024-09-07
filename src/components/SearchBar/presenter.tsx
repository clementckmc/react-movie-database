import { Button, Dropdown, Form, InputGroup } from "react-bootstrap"

type Props = {
  searchText: string
  onChangeSearchText: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSearchMovie: (searchText: string) => void
  onSelectLanguage: (language: string) => void
}

export const SearchBarPresenter: React.FC<Props> = ({
  searchText,
  onChangeSearchText,
  onSearchMovie,
  onSelectLanguage
}) => {
  return (
    <InputGroup className="mb-1">
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          English
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onSelectLanguage('en-US')}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => onSelectLanguage('ja-JP')}>Japanese</Dropdown.Item>
          <Dropdown.Item onClick={() => onSelectLanguage('es-ES')}>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form.Control
        placeholder="Type a movie name to search..."
        aria-label="Search Movie By Name"
        value={searchText}
        onChange={onChangeSearchText}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={() => onSearchMovie(searchText)}>
        <i className="bi bi-search"></i>
      </Button>
    </InputGroup>
  )
}
