import { useState } from "react"
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
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newLanguage = event.currentTarget.innerText;
    setSelectedLanguage(newLanguage);
  };

  return (
    <InputGroup className="mb-1">
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {selectedLanguage}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={(e) => { handleLanguageDropdown(e as React.MouseEvent<HTMLButtonElement>); onSelectLanguage('en-US') }}>English</Dropdown.Item>
          <Dropdown.Item onClick={(e) => { handleLanguageDropdown(e as React.MouseEvent<HTMLButtonElement>); onSelectLanguage('ja-JP') }}>Japanese</Dropdown.Item>
          <Dropdown.Item onClick={(e) => { handleLanguageDropdown(e as React.MouseEvent<HTMLButtonElement>); onSelectLanguage('es-ES') }}>Spanish</Dropdown.Item>
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
