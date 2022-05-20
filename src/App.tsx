import React, { FC } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: FC = () => {
  console.log("App.tsx render");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
      </Routes>
    </>
  );
};

export default App;
