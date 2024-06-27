import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

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
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  )
}
