import React from "react";
import { Link } from "react-router-dom";

// ✅ Inline CSS (only navbar related)
const styles = {
  navbar: {
    backgroundColor: "#0a1429",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "5px 15px"
  }
};

function Navbar() {
  return (
    <div style={styles.navbar}>

      <Link to="/" style={styles.link}>
        <i className="fa-solid fa-house"></i> Home
      </Link>

      <Link to="/transport" style={styles.link}>
        <i className="fa-solid fa-bus"></i> Transport
      </Link>

      <Link to="/packages" style={styles.link}>
        <i className="fa-solid fa-umbrella-beach"></i> Holiday Packages
      </Link>

      <Link to="/recommender" style={styles.link}>
        <i className="fa-solid fa-compass"></i> AI Recommender
      </Link>

      <Link to="/booking" style={styles.link}>
        <i className="fa-solid fa-ticket"></i> Manage Booking
      </Link>

      <Link to="/visa" style={styles.link}>
        <i className="fa-solid fa-passport"></i> Visa Services
      </Link>

      <Link to="/offers" style={styles.link}>
        <i className="fa-solid fa-tags"></i> Offers
      </Link>

    </div>
  );
}

export default Navbar;