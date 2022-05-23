import React, { FC } from "react";
import { Routes, Route } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: FC = () => {
  console.log("App.tsx render");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
