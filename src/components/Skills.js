import React, { useEffect } from "react";
import "./Skills.css";

const skillsData = [
  {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Java",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    name: "Node.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
  name: "MongoDB",
  icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
}
,
  {
    name: "CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
];

const Skills = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const onScroll = () => {
      fadeElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 50) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // trigger on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="skills-section fade-in" id="skills">
      <h2 className="fade-in">Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card fade-in">
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
