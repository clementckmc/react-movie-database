export type MovieDetailDto = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  overview: string;
  genres: Genre[];
}

type Genre = {
  id: number;
  name: string;
}
