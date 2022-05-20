import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import MyNav from "../components/Nav";
import Footer from "../components/Footer";

interface IRootPageProps {
  children: any;
}

const RootPage: FC<IRootPageProps> = (props) => {
  return (
    <Container>
      <MyNav />
      {props.children}
      <Footer />
    </Container>
  );
};

export default RootPage;
