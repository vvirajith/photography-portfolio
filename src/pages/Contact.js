import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        Email: <a href="mailto:adithyav609@email.com">adithyav609@email.com</a>
      </p>
      <p>
        Phone: <a href="tel:+94707558702">+94-707558702</a>
      </p>
      <p>Follow me on:</p>
      <div className="social-links">
        <a href="https://www.instagram.com/_adhi__snapshot_/" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089604670130" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/?size=512&id=118497&format=png" alt="Facebook" />
        </a>
        <a href="https://www.tiktok.com/@adivirajith" target="_blank" rel="noreferrer">
          <img src="https://cdn2.iconfinder.com/data/icons/social-micon/512/tiktok-512.png" alt="TikTok" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
