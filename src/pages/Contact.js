import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Email: example@email.com</p>
      <p>Phone: 123-456-7890</p>
      <p>
        Follow me on{" "}
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </p>
    </section>
  );
};

export default Contact;
