import { ChangeEvent, useState } from "react"
import { SearchBarPresenter } from "./presenter"
import { useNavigate } from "react-router-dom"


export const SearchBar: React.FC = ({}) => {

  const navigate = useNavigate();

  const [searchText, setSearchText] = useState<string>("")
  const [language, setLanguage] = useState<string>("en-US")

  const onChangeSearchText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const onSelectLanguage = (e: string) => {
    const language = e;
    setLanguage(language);
  }

  const onSearchMovie = (searchText: string) => {
    navigate({ pathname: '/react-movie-database/results', search: `?q=${searchText}&lang=${language}` })
  }

  return (
    <SearchBarPresenter
      searchText={searchText}
      onChangeSearchText={onChangeSearchText}
      onSearchMovie={onSearchMovie}
      onSelectLanguage={onSelectLanguage}
    />
  )
}
