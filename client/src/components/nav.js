import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavComponent() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar key="lg" bg="light" expand="lg" className="mb-3 px-4">
        <Container fluid>
          <Navbar.Brand onClick={() => {
                    navigate('/main');
                  }}>Matchup Analyzer</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Account
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link onClick={() => {
                    navigate('/matchup');
                  }}>Create Matchup</Nav.Link>
                <NavDropdown
                  title="Account"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                >
                  <NavDropdown.Item onClick={() => {
                    navigate('/account');
                  }}>
                    My Matchups
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => {
                    Auth.logout();
                    navigate('/');
                  }}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComponent;
