import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/navBar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";

function Landing() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Projects/>
      </Router>
    </>
  );
}

export default Landing;
