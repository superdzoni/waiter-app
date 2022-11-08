import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className="rounded" bg="primary mt-4 mb-4" variant="dark" >
      <Container>
        <Navbar.Brand
        as={NavLink}
        to="/">Waiter.app</Navbar.Brand>
        <Nav>
          <Nav.Link
          as={NavLink}
          to="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;