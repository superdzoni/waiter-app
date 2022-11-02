import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar className="rounded" bg="primary" variant="dark" >
      <Container>
        <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;