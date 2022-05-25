import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routes, Route } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";
import { SignOut } from "./components/SignOut";
import PostContent from "./components/PostContent";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/post/:id" element={<PostContent />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signout" element={<SignOut />}></Route>
          <Route path="/newpost" element={<NewPost />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
