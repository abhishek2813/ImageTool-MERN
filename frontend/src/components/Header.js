import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Col, Row, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

function Header({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  //handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLogin({});
    navigate("/login");
  };
  return (
    <Container fluid>
      <Row className="">
        <Navbar expand="lg" className="navbar-dark bg-dark">
          <Col xs={7}>
            <Navbar.Brand href="#home" className="mx-2">
              Image Tool
            </Navbar.Brand>
          </Col>
          <Col xs={5}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {isLogin.name ? (
                  <>
                    <NavLink to="/" className="nav-link mx-2">
                      Home
                    </NavLink>
                    <NavLink to="/upload-images" className="nav-link mx-2">
                    Upload Image
                    </NavLink>
                    <NavLink to="/images" className="nav-link mx-2">
                      Saved Image
                    </NavLink>
                    <div className="nav-link mx-2">
                      <p className="text-warning">Welcome {isLogin.name}</p>
                    </div>
                    <div className="nav-link mx-2">
                      <Button onClick={handleLogout}>Logout</Button>
                    </div>
                  </>
                ) : (
                  <>
                    <NavLink to="/login" className="nav-link mx-2">
                      Login
                    </NavLink>
                    <NavLink to="/signup" className="nav-link mx-2">
                      Signup
                    </NavLink>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Header;
