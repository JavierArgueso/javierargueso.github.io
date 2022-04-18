import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import { useCookies } from "react-cookie";

const NavBar = () => {
  const [cookies, setCookie] = useCookies(["code"]);
  const [selected, setSelected] = useState(
    cookies.code === undefined ? "ES" : cookies.code
  );
  const onSelect = (code) => {
    setSelected(code);
    setCookie("code", code, { path: "/" });
  };

  const customLabels = {
    ES: "ES",
    US: "US",
  };

  const countries = ["US", "ES"];

  if (cookies.code === undefined) {
    setCookie("code", "ES", { path: "/" });
  }
  // cookies.code === undefined ? setCookie("code", "ES", { path: "/"});

  return (
    <Navbar
      className="pt-3 border-bottom border-botom-dark opacity-75"
      bg="light"
      variant="light"
      fixed="top"
      expand="md"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>
          <FontAwesomeIcon icon={faCode} />
        </Navbar.Brand>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link href="#home">
              {cookies.code == "ES" ? "Inicio" : "Home"}
            </Nav.Link>
            <Nav.Link href="#experience">
              {cookies.code == "ES" ? "Experiencia" : "Experience"}
            </Nav.Link>
            <Nav.Link href="#technologies">
              {cookies.code == "ES" ? "Tecnologías" : "Technologies"}
            </Nav.Link>
            <Nav.Link href="#contact">
              {cookies.code == "ES" ? "Contacto" : "Contact"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <ReactFlagsSelect
          selected={selected}
          onSelect={onSelect}
          countries={countries}
          customLabels={customLabels}
        />
      </Container>
    </Navbar>
  );
};

export default NavBar;
