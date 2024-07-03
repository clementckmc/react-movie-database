import { useEffect, useState } from "react"
import { Layout } from "../../layout/container"
import { IndexPagePresenter } from "./presenter"
import axios, { AxiosResponse } from "axios";
import { MovieDto } from "../../types/MovieDto";

export const IndexPage: React.FC = () => {

  const [movieDtos, setMovieDtos] = useState<MovieDto[]>();

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/day").then((response: AxiosResponse) => {
      setMovieDtos(response.data.results)
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
