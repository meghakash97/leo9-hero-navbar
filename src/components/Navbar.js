import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
  const sections = document.querySelectorAll("section");
  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    current = "contact";
  }

  setActiveSection(current);
};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-links">
        <li><a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
        <li><a href="#work" className={activeSection === "work" ? "active" : ""}>Work</a></li>
        <li><a href="#knowledge" className={activeSection === "knowledge" ?"active" : ""}>Knowledge </a> </li>
        <li><a href="#skills"className={activeSection ==="skills" ? "active" : ""}>Skills</a></li>
        <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
        <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
