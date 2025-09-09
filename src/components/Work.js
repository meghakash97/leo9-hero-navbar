import React, { useEffect, useState } from "react";
import "./Work.css";

const projects = [
  {
    title: "Book Review Platform",
    description: "A full-stack app with React frontend and Node.js + MongoDB backend. Features authentication, book management, and reviews.",
    link: "https://github.com/meghakash97/Book-Review-Platform"
  },
  {
    title: "Java Chat Application",
    description: "A socket-based chat app built in Java, supporting multiple users in real time.",
    link: "https://github.com/meghakash97/Java-Chat-Application"
  },
  {
    title: "Java-jdbc-employee-db",
    description: "Java JDBC Employee Database App — A console-based CRUD application that connects to an Oracle 21c XE database using JDBC. Supports adding, viewing, updating, and deleting employee records with PreparedStatement for secure SQL execution. Demonstrates Java–Oracle DB connectivity, exception handling, and clean code structure with DAO pattern.",
    link: "https://github.com/meghakash97/java-jdbc-employee-db"
  }
];

const Work = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("work");
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
    <section className="work" id="work">
      <h2 className={`fade-in ${visible ? "show" : ""}`}>Work</h2>
      <div className="work-list">
        {projects.map((proj, index) => (
          <div className={`work-card fade-in ${visible ? "show" : ""}`} key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
