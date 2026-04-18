import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";


function Transport() {
  const [mode, setMode] = useState("flight");
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
  );
  const [buttonText, setButtonText] = useState("Search Flights");

  const switchTransport = (type) => {
    setMode(type);

    if (type === "flight") {
      setImage(
        "https://static.vecteezy.com/system/resources/thumbnails/020/141/626/small/plane-in-the-sky-passenger-commercial-plane-flying-above-the-clouds-concept-of-fast-travel-vacation-and-business-photo.jpg"
      );
      setButtonText("Search Flights");
    } else if (type === "train") {
      setImage(
        "https://images.moneycontrol.com/static-mcnews/2017/02/Bullet_train_rail_railways_770x433-630x354.jpg"
      );
      setButtonText("Search Trains");
    } else if (type === "bus") {
      setImage(
        "https://chariot-electricbus.com/wp-content/uploads/2023/03/Electric-buses-report-2022-2031-scaled.jpg"
      );
      setButtonText("Search Buses");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${buttonText} clicked!`);
  };

  return (
    <div style={{ backgroundColor: "#e5eef5", minHeight: "100vh" }}>
      
      
      <Header />

      <NavBar />

      <div style={styles.container}>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            style={mode === "flight" ? styles.activeTab : styles.tab}
            onClick={() => switchTransport("flight")}
          >
            ✈ Flights
          </button>

          <button
            style={mode === "train" ? styles.activeTab : styles.tab}
            onClick={() => switchTransport("train")}
          >
            🚆 Trains
          </button>

          <button
            style={mode === "bus" ? styles.activeTab : styles.tab}
            onClick={() => switchTransport("bus")}
          >
            🚌 Buses
          </button>
        </div>

        {/* Main Box */}
        <div style={styles.mainBox}>

          {/* Image */}
          <div style={{ flex: 1 }}>
            <img src={image} alt="transport" style={styles.image} />
          </div>

          {/* Form */}
          <div style={styles.form}>
            <h2 style={{ color: "#0a1429" }}>Book Your Journey</h2>

            <form onSubmit={handleSubmit}>

              <div style={styles.row}>
                <input placeholder="From" required style={styles.input} />
                <input placeholder="To" required style={styles.input} />
              </div>

              <div style={styles.row}>
                <input type="date" required style={styles.input} />
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue="1"
                  style={styles.input}
                />
              </div>

              <select style={styles.input}>
                <option>Economy Class</option>
                <option>Business Class</option>
                <option>First Class</option>
              </select>

              <button type="submit" style={styles.searchBtn}>
                {buttonText}
              </button>

            </form>
          </div>
        </div>

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
    fontStyle: "italic",
    margin: 0,
  },
  container: {
    width: "80%",
    margin: "40px auto",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 15px",
    background: "#ddd",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  activeTab: {
    padding: "10px 15px",
    background: "#ff6d38",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  mainBox: {
    display: "flex",
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  form: {
    flex: 1,
    padding: "25px",
  },
  row: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "10px",
  },
  searchBtn: {
    width: "100%",
    padding: "12px",
    background: "#ff6d38",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "15px",
  },
};

export default Transport;