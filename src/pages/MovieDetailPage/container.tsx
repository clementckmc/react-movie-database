import { useEffect, useState } from "react";
import { Layout } from "../../layout/container";
import { MovieDetailPagePresenter } from "./presenter";
import { MovieDetailDto } from "../../types/MovieDetailDto";
import axios, { AxiosResponse } from "axios";

export const MovieDetailPage: React.FC = () => {
  const [movieDetailDto, setMovieDetailDto] = useState<MovieDetailDto>();

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/974262", {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
      }
    }
    ).then((response: AxiosResponse) => {
      setMovieDetailDto(response.data)
    })
  })


  return (
    <Layout>
      <MovieDetailPagePresenter movieDetailDto={movieDetailDto} />
    </Layout>
  );
};
