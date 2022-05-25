import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import MyNav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import AuthProvider from "./services/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: FC = () => {
  return (
    <AuthProvider>
      <Container>
        <MyNav />
        <Outlet />
        <Footer />
      </Container>
    </AuthProvider>
  );
};

export default App;
