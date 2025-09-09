import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Knowledge from "./components/Knowledge";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Work />
      <Knowledge/>
      <Skills/>
      <About />
      <Contact />
    </div>
  );
}

export default App;
