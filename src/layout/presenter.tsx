import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar/container';

type Props = {
  children: React.ReactNode;
};

export const LayoutPresenter: React.FC<Props> = ({children}) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/react-movie-database">
              Movie Database
            </Link>
          </Navbar.Brand>
          <SearchBar />
        </Container>
      </Navbar>
      <Container className="mt-3">{children}</Container>
    </>
  )
}
