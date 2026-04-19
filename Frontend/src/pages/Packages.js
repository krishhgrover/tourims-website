import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Header from "../components/Header";

function Packages() {

  const [packages, setPackages] = useState([]);

  // 🔥 Fetch data from backend
  useEffect(() => {
    fetch("http://localhost:3000/packages")   // or "http://localhost:3000/packages"
      .then(res => res.json())
      .then(data => {
        setPackages(data);
      })
      .catch(err => console.error("Error fetching packages:", err));
  }, []);

  return (
    <div style={{ backgroundColor: "#e5eef5", minHeight: "100vh" }}>

      <Header />
      <Navbar />

      <div style={styles.container}>

        <h2 style={styles.heading}>
          Top Trending Holiday Packages
        </h2>

        <div style={styles.grid}>

          {packages.map((pkg) => (
            <div key={pkg.id} style={styles.card}>

              <img src={pkg.image} alt="package" style={styles.image} />

              <div style={styles.content}>
                <h3 style={{ margin: 0 }}>{pkg.name}</h3>
                <p style={styles.desc}>{pkg.description}</p>
                <p style={styles.price}>₹ {pkg.price}</p>

                <a href="#" style={styles.link}>
                  View Details ➤
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

//  Only Packages CSS
const styles = {
  container: {
    width: "85%",
    margin: "20px auto",
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },

  heading: {
    color: "#0a1429",
    textAlign: "center",
    marginBottom: "30px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
    gap: "25px",
    justifyContent: "center"
  },

  card: {
    display: "flex",
    width: "100%",
    height: "180px",   // 🔥 FIXED HEIGHT
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },

  image: {
    width: "40%",
    height: "100%",     // 🔥 FIXED HEIGHT MATCH
    objectFit: "cover"  // 🔥 prevents stretching
  },

  content: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  desc: {
    color: "#555",
    fontSize: "13px",
    margin: "5px 0",
    lineHeight: "1.4"
  },

  price: {
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "5px"
  },

  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500",
    marginTop: "8px"
  }
};

export default Packages;