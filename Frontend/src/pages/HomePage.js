import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Header from "../components/Header";


function Home() {
  return (
    <div style={{ backgroundColor: "#e5eef5", minHeight: "100vh" }}>


      {/*  Navbar */}
      <Header />
      <Navbar />

      {/*  Main Container */}
      <div style={styles.container}>

        {/*  Marquee */}
        <marquee style={styles.marquee}>
          FLASH SALE: Get Flat 15% OFF on Coastal & Mountain Motorbike Expeditions using code RIDE15!
        </marquee>

        {/*  Heading */}
        <h1 style={styles.heading}>Our Services</h1>

        {/*  Cards */}
        <div style={styles.cardContainer}>

          {/* Visa */}
          <Link to="/visa" style={styles.link}>
            <div style={styles.card}>
              <img
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600"
                alt="visa"
                style={styles.image}
              />
              <div style={styles.overlay}>
                <h2 style={styles.cardTitle}>Visa Booking</h2>
                <p>Apply Easily ➤</p>
              </div>
            </div>
          </Link>

          {/* Packages */}
          <Link to="/packages" style={styles.link}>
            <div style={styles.card}>
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
                alt="packages"
                style={styles.image}
              />
              <div style={styles.overlay}>
                <h2 style={styles.cardTitle}>Holiday Packages</h2>
                <p>Explore Deals ➤</p>
              </div>
            </div>
          </Link>

          {/* AI */}
          <Link to="/recommender" style={styles.link}>
            <div style={styles.card}>
              <img
                src="https://images.unsplash.com/photo-1488229297570-58520851e868?w=600"
                alt="ai"
                style={styles.image}
              />
              <div style={styles.overlay}>
                <h2 style={styles.cardTitle}>AI Recommender</h2>
                <p>Get Suggestions ➤</p>
              </div>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
}

//  Only Home Page CSS (converted cleanly)
const styles = {
  header: {
    backgroundColor: "#0a1429",
    textAlign: "center",
    padding: "20px 0"
  },
  title: {
    color: "white",
    margin: 0,
    fontStyle: "italic"
  },
  container: {
    width: "80%",
    margin: "20px auto",
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  marquee: {
    color: "#d90429",
    fontWeight: "bold",
    background: "#fff0f0",
    padding: "10px",
    borderRadius: "5px"
  },
  heading: {
    textAlign: "center",
    color: "#0a1429",
    marginTop: "30px"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap"
  },
  card: {
    width: "300px",
    height: "200px",
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "15px",
    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
    color: "white"
  },
  cardTitle: {
    margin: 0
  },
  link: {
    textDecoration: "none"
  }
};

export default Home;