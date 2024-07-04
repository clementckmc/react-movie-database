import { useEffect, useState } from "react"
import { Layout } from "../../layout/container"
import { IndexPagePresenter } from "./presenter"
import axios, { AxiosResponse } from "axios";
import { MovieDto } from "../../types/MovieDto";

export const IndexPage: React.FC = () => {

  const [movieDtos, setMovieDtos] = useState<MovieDto[]>();

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/day", {
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
      <IndexPagePresenter 
        movieDtos={movieDtos}
      />
    </Layout>
  )
}
