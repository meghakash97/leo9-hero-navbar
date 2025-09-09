import React, { useEffect, useState } from "react";
import "./About.css";
import "../App.css";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about" id="about">
      <h2 className={`fade-in ${visible ? "show" : ""}`}>About</h2>
      <p className={`fade-in ${visible ? "show" : ""}`}>
        We create innovative digital experiences that solve real-world problems. 
  We leverage technologies like Java, React, Node.js, and MongoDB to build 
  scalable and engaging applications.
      </p>
    </section>
  );
};

export default About;
