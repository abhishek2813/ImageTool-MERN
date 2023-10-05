import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container fluid>
        <Row>
          <Col xs={8}>
            <Navbar.Brand href="#home">Image Tool</Navbar.Brand>
          </Col>
          <Col xs={4}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/images" className="nav-link">
                  Saved Image
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
                <NavLink to="/signup" className="nav-link">
                  Signup
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
