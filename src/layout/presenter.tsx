import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

type Props = {
  children: React.ReactNode;
};

export const LayoutPresenter: React.FC<Props> = ({children}) => {
  return (
    <>
      <Navbar fixed="top">
        <Container>
          <Navbar.Brand>Movie Database</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  )
}
