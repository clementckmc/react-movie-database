import { ChangeEvent, useState } from "react"
import { SearchBarPresenter } from "./presenter"
import { useNavigate } from "react-router-dom"


export const SearchBar: React.FC = ({}) => {

  const navigate = useNavigate();

  const [searchText, setSearchText] = useState<string>("")

  const onChangeSearchText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const onSearchMovie = (searchText: string) => {
    navigate(`/react-movie-database/search/q=${searchText}`)
  }

  return (
    <SearchBarPresenter
      searchText={searchText}
      onChangeSearchText={onChangeSearchText}
      onSearchMovie={onSearchMovie}
    />
  )
}
