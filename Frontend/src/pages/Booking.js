import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Header from "../components/Header";


function Booking() {

  // ✅ State (instead of document.getElementById)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Validation
  const validate = () => {
    let err = {};

    if (!formData.name) err.name = "Name is required";

    if (!formData.age || formData.age < 21 || formData.age > 89) {
      err.age = "Age must be between 21 and 89";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      err.phone = "Enter valid 10 digit number";
    }

    if (!formData.email.endsWith("@gmail.com")) {
      err.email = "Only Gmail allowed";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // ✅ Submit Function (API call same as yours)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const response = await fetch("/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.text();
    alert(result);
  };

  return (
    <div style={{ backgroundColor: "#e5eef5", minHeight: "100vh" }}>

      {/* ✅ Navbar Component */}
      <Header />
      <Navbar />

      {/* ✅ Container */}
      <div style={styles.container}>
        <h2>Traveler Details & Payment</h2>
        <p style={{ color: "#666" }}>
          Please enter details exactly as they appear on your government ID.
        </p>

        <div style={styles.formBox}>
          <form onSubmit={handleSubmit}>

            <p>
              <label>Primary Traveler Name:</label><br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                placeholder="e.g. JOHN DOE"
              />
              <span style={styles.error}>{errors.name}</span>
            </p>

            <p>
              <label>Age (21-89):</label><br />
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                style={styles.input}
                placeholder="e.g. 25"
              />
              <span style={styles.error}>{errors.age}</span>
            </p>

            <p>
              <label>Mobile Number:</label><br />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                style={styles.input}
                placeholder="9876543210"
              />
              <span style={styles.error}>{errors.phone}</span>
            </p>

            <p>
              <label>Email:</label><br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="user@gmail.com"
              />
              <span style={styles.error}>{errors.email}</span>
            </p>

            <hr />

            <button type="submit" style={styles.button}>
              Proceed to Secure Payment
            </button>

          </form>
        </div>
      </div>

    </div>
  );
}

// ✅ Only Booking CSS (converted from your file)
const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  formBox: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #e1e1e1"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px"
  },
  button: {
    backgroundColor: "#065af3",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  error: {
    color: "#d90429",
    fontSize: "12px",
    fontWeight: "bold"
  }
};

export default Booking;