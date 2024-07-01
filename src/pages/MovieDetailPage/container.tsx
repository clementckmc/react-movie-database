import { Layout } from "../../layout/container";
import { MovieDetailPagePresenter } from "./presenter";

export const MovieDetailPage: React.FC = () => {
  return (
    <Layout>
      <MovieDetailPagePresenter />
    </Layout>
  );
};
