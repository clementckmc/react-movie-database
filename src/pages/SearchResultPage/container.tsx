import { Layout } from "../../layout/container";
import { SearchResultPagePresenter } from "./presenter";

export const SearchResultPage: React.FC = () => {
  return (
    <Layout>
      <SearchResultPagePresenter />
    </Layout>
  );
};
