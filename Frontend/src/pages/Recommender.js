import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Header from "../components/Header";


function Recommender() {

  //  State
  const [budget, setBudget] = useState("");
  const [type, setType] = useState("");
  const [vibe, setVibe] = useState("");
  const [result, setResult] = useState("");

  //  Recommendation Logic (your JS → React)
  const recommend = () => {
    if (!budget || !type || !vibe) {
      setResult("❌ Please select all options.");
      return;
    }

    let suggestion = "";

    if (type === "beach" && vibe === "relaxed") {
      suggestion = "🌴 Maldives or Goa - Perfect for relaxation!";
    } 
    else if (type === "mountain" && vibe === "adventure") {
      suggestion = "🏔️ Himachal / Ladakh - Adventure awaits!";
    } 
    else if (type === "city" && vibe === "cultural") {
      suggestion = "🏛️ Jaipur / Varanasi - Cultural exploration!";
    } 
    else if (type === "desert") {
      suggestion = "🏜️ Dubai / Rajasthan Desert Safari!";
    } 
    else if (type === "jungle") {
      suggestion = "🌳 Kerala / Jim Corbett Wildlife!";
    } 
    else {
      suggestion = "✈️ Bali or Thailand - Best all-round destinations!";
    }

    setResult(suggestion);
  };

  return (
    <div style={{ backgroundColor: "#e5eef5", minHeight: "100vh" }}>

      {/*  Navbar */}
      <Header />
      <Navbar />

      {/*  Container */}
      <div style={styles.container}>

        <h1 style={styles.title}>🌍 Advanced AI Travel Recommender</h1>
        <p>Our algorithm will now analyze your travel persona.</p>

        {/*  Select Inputs */}
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Budget</option>
          <option value="student">Student / Shoestring</option>
          <option value="standard">Standard Comfort</option>
          <option value="premium">Premium / Business</option>
          <option value="ultra">Ultra Luxury</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={styles.select}
        >
          <option value="">Preferred Terrain</option>
          <option value="beach">Tropical Beaches</option>
          <option value="mountain">Snowy Mountains</option>
          <option value="city">Historic Cities</option>
          <option value="desert">Desert Safari</option>
          <option value="jungle">Wilderness / Jungle</option>
        </select>

        <select
          value={vibe}
          onChange={(e) => setVibe(e.target.value)}
          style={styles.select}
        >
          <option value="">Travel Vibe</option>
          <option value="relaxed">Relaxed & Spa</option>
          <option value="adventure">Hardcore Adventure</option>
          <option value="cultural">Cultural & Religious</option>
          <option value="party">Nightlife & Party</option>
        </select>

        <br /><br />

        {/*  Button */}
        <button onClick={recommend} style={styles.button}>
          Analyze & Find Destination
        </button>

        {/*  Result */}
        {result && (
          <div style={styles.result}>
            <h3>{result}</h3>
          </div>
        )}

      </div>
    </div>
  );
}

//  Only Recommender CSS
const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  title: {
    color: "#0a1429"
  },
  select: {
    width: "200px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #0a1429",
    margin: "10px",
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
  },
  result: {
    marginTop: "30px",
    border: "2px solid #065af3",
    padding: "25px",
    borderRadius: "15px",
    background: "#fff"
  }
};

export default Recommender;