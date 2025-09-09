import React, { useEffect, useState } from "react";
import "./Contact.css";
import "../App.css"; 

function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
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
    <section id="contact" className="contact-section">
      <h2 className={`fade-in ${visible ? "show" : ""}`}>Contact</h2>
      <div className={`contact-details fade-in ${visible ? "show" : ""}`}>
        <p>
          <strong>Email:</strong>{" "}
  <a
    href="mailto:meghakash.mohanty@gmail.com"
    className={`fade-in ${visible ? "show" : ""}`}
  >
    meghakash.mohanty@gmail.com
    </a>
        </p>
        <p>
          
          <p>
  <strong>LinkedIn:</strong>{" "}
  <a
    href="https://www.linkedin.com/in/soumya-mohanty-b432a6340/"
    target="_blank"
    rel="noopener noreferrer"
    className={`fade-in ${visible ? "show" : ""}`}
  >
    Visit my LinkedIn
  </a>
</p>
<p>
  <strong>GitHub:</strong>{" "}
  <a
    href="https://github.com/meghakash97"
    target="_blank"
    rel="noopener noreferrer"
    className={`fade-in ${visible ? "show" : ""}`}
  >
    Visit my GitHub Account
  </a>
</p>

        </p>
      </div>
    </section>
  );
}

export default Contact;
