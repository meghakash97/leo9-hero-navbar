import React, { useEffect, useState } from "react";
import "./Knowledge.css";

const knowledgeLinks = [
  { title: "JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { title: "React Documentation", url: "https://reactjs.org/docs/getting-started.html" },
  { title: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
  { title: "MongoDB Docs", url: "https://www.mongodb.com/docs/" },
  { title: "Java Docs", url: "https://docs.oracle.com/javase/8/docs/" }
];

const Knowledge = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("knowledge");
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
    <section className="knowledge-section" id="knowledge">
      <h2 className={`fade-in ${visible ? "show" : ""}`}>Knowledge</h2>
      <ul>
        {knowledgeLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`fade-in ${visible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 0.2}s` }} // staggered delay
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Knowledge;
