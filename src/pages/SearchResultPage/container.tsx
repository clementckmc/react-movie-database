import { useEffect, useState } from "react";
import { Layout } from "../../layout/container";
import { SearchResultPagePresenter } from "./presenter";
import { MovieDto } from "../../types/MovieDto";
import axios, { AxiosResponse } from "axios";
import { useSearchParams } from "react-router-dom";

export const SearchResultPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieDtos, setMovieDtos] = useState<MovieDto[]>();

  const q = searchParams.get("q");
  const lang = searchParams.get("lang");

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&language=${lang}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
      }
    }
    ).then((response: AxiosResponse) => {
      setMovieDtos(response.data.results.slice(0, 4))
    })
  })
  
  return (
    <Layout>
      <SearchResultPagePresenter
        movieDtos={movieDtos}
        query={q}
      />
    </Layout>
  );
};
