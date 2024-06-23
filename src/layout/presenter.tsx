import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

type Props = {
  children: React.ReactNode;
};

export const LayoutPresenter: React.FC<Props> = ({children}) => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Movie Database</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
