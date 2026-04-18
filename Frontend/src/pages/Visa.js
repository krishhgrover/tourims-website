import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";


function Visa() {
  const [serverTime, setServerTime] = useState("");

  const checkVisa = () => {
    // Simple demo logic (you can improve later)
    const age = prompt("Enter your age:");
    const nationality = prompt("Enter your nationality:");

    if (age >= 18 && nationality.toLowerCase() === "india") {
      alert("✅ You are eligible for e-Visa!");
    } else {
      alert("❌ Visa eligibility failed. Please apply manually.");
    }
  };

  const showServerTime = () => {
    const now = new Date();
    setServerTime(now.toString());
  };

  return (
    <div style={{ backgroundColor: "#e5eef5", minHeight: "100vh" }}>
      
      {/* Header */}
     
      <Header />

      <NavBar />

      <div style={styles.container}>
        <h2>Visa-On-Arrival Eligibility</h2>
        <p>
          Check if you qualify for our instant e-Visa service based on demographic restrictions.
        </p>

        <button onClick={checkVisa} style={styles.btn}>
          Start e-Visa Check
        </button>

        <hr style={{ margin: "40px 0" }} />

        <h2>Server Clock Sync</h2>
        <p>Hover below to sync with our global server time.</p>

        <button onMouseOver={showServerTime} style={styles.hoverBtn}>
          Hover here to sync Server Date
        </button>

        <p style={styles.dateText}>{serverTime}</p>
      </div>
    </div>
  );
}

const styles = {
  header: {
    background: "#0a1429",
    textAlign: "center",
    padding: "20px",
  },
  logo: {
    color: "white",
    margin: 0,
    fontStyle: "italic",
  },
  container: {
    width: "80%",
    margin: "20px auto",
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  btn: {
    background: "#065af3",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  hoverBtn: {
    padding: "10px",
    background: "#eee",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
  dateText: {
    color: "#065af3",
    fontWeight: "bold",
    marginTop: "15px",
  },
};

export default Visa;