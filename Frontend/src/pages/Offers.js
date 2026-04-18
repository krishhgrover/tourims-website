import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Header from "../components/Header";

function Offers() {

  // ✅ State for Ticket Name
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [ticketName, setTicketName] = useState("");

  // ✅ State for Email
  const [email, setEmail] = useState("");

  // ✅ Format Ticket Name (replaces onkeyup)
  const formatTicketName = (first, last) => {
    const formatted = `${first.toUpperCase()} ${last.toUpperCase()}`;
    setTicketName(formatted);
  };

  // ✅ Handle First Name
  const handleFName = (e) => {
    const value = e.target.value;
    setFName(value);
    formatTicketName(value, lName);
  };

  // ✅ Handle Last Name
  const handleLName = (e) => {
    const value = e.target.value;
    setLName(value);
    formatTicketName(fName, value);
  };

  // ✅ Verify Email
  const verifyEmail = () => {
    const atIndex = email.indexOf("@");

    if (atIndex === -1) {
      alert("❌ Invalid Email (No @ symbol)");
    } else {
      alert(`✅ '@' found at position: ${atIndex}`);
    }
  };

  return (
    <div style={{ backgroundColor: "#e5eef5", minHeight: "100vh" }}>

      {/* ✅ Navbar */}
      <Header />
      <Navbar />


      {/* ✅ Container */}
      <div style={styles.container}>
        <h2>My Account & Utilities</h2>

        <div style={styles.flex}>

          {/* ✅ Ticket Name Box */}
          <div style={styles.card}>
            <h3>Print E-Ticket Name</h3>

            <label>First Name:</label><br />
            <input
              type="text"
              value={fName}
              onChange={handleFName}
              style={styles.input}
            /><br /><br />

            <label>Last Name:</label><br />
            <input
              type="text"
              value={lName}
              onChange={handleLName}
              style={styles.input}
            /><br /><br />

            <label>Boarding Pass Result:</label><br />
            <input
              type="text"
              value={ticketName}
              readOnly
              style={styles.resultInput}
            />
          </div>

          {/* ✅ Email Verify Box */}
          <div style={styles.card}>
            <h3>Verify Account Email</h3>

            <input
              type="text"
              placeholder="user@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            /><br /><br />

            <button onClick={verifyEmail} style={styles.button}>
              Verify '@' Position
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

// ✅ Only Offers Page CSS
const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  flex: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    flex: 1,
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    minWidth: "300px"
  },
  input: {
    width: "90%",
    padding: "8px"
  },
  resultInput: {
    width: "90%",
    backgroundColor: "#f2f6fa",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#065af3",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Offers;