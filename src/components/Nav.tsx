import { FC, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { AuthContext } from "../services/AuthContext";

const MyNav: FC = () => {
  const user = useContext(AuthContext);
  return (
    <Navbar className="mb-2 shadow" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">RS401</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#/about">About Me</Nav.Link>
          <Nav.Link href="/#/projects">Projects</Nav.Link>
          <Nav.Link href="/#/blog">Blog</Nav.Link>
        </Nav>
        <Nav>
          {user ? (
            <>
            {user.email === "rich.stadnick@gmail.com" ? (
              <Nav.Link className="" href="/#/newpost">
                newpost
              </Nav.Link>
            ):(<></>)}
              <Nav.Link href="/#/signout">Sign Out</Nav.Link>
            </>
          ) : (
            <Nav.Link className="" href="/#/login">
              login
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
