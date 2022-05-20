import { FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const MyNav: FC = () => {
  return (
      <Navbar className="mb-2 shadow"  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">RS401</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default MyNav;
