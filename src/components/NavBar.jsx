import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container fluid>
        <Navbar.Brand><Link to="/">Supermercados de La Pampa</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item><Link to="/">Todos los productos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Bebidas">Bebidas</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Carnes">Carnes</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Pastas">Pastas</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Verduras">Verduras</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}
