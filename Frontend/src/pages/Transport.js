import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function Transport() {
  const [mode, setMode] = useState("flight");
  const [tripType, setTripType] = useState("oneway");
  const [price, setPrice] = useState(null);
  const [from] = useState("Mumbai");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [message, setMessage] = useState("");

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

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!to || !departure) {
    setMessage("⚠️ Please select destination and departure date");
    return;
  }

  const url = `http://localhost:3000/search-transport?from=Mumbai&to=${to}&date=${departure}`;

  console.log("REQUEST URL:", url);

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("API RESPONSE:", data);

if (data.available) {
  let totalPrice = data.data?.price || 0;

  // ✅ ROUND TRIP = double price
  if (tripType === "round" && returnDate) {
    totalPrice = totalPrice * 2;
  }

  setPrice(totalPrice);
  setMessage("✅ Travel available on selected date!");
} else {
  setPrice(null); // reset price

  if (data.suggestions && data.suggestions.length > 0) {
    const correctedDates = data.suggestions.map((dateStr) => {
      const d = new Date(dateStr);
      d.setDate(d.getDate() + 1);
      return d.toISOString().split("T")[0];
    });

    setMessage(
      `❌ Not available. Suggested dates: ${correctedDates.join(", ")}`
    );
  } else {
    setMessage("❌ No available dates found");
  }
}

  } catch (err) {
    console.error(err);
    setMessage("❌ Server error. Try again later.");
  }
};
  const destinations = [
    "Goa",
    "Manali",
    "Kerala",
    "Jaipur & Udaipur",
    "Kashmir",
    "Andaman",
    "Rishikesh",
    "Darjeeling",
    "Ooty",
    "Ladakh",
    "Dubai",
    "Bali",
    "Bangkok & Phuket",
    "Singapore",
    "Maldives",
    "Paris & Rome",
    "Switzerland",
    "Tokyo & Kyoto",
    "Sydney & Melbourne",
    "USA",
    "Istanbul & Cappadocia"
  ];

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

            {/* Trip Toggle */}
            <div style={styles.tripToggle}>
              <button
                onClick={() => setTripType("oneway")}
                style={tripType === "oneway" ? styles.activeToggle : styles.toggle}
              >
                One Way
              </button>

              <button
                onClick={() => setTripType("round")}
                style={tripType === "round" ? styles.activeToggle : styles.toggle}
              >
                Round Trip
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* FROM - TO */}
              <div style={styles.row}>
                <input value="Mumbai" disabled style={styles.input} />

                <select
                  style={styles.input}
                  required
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                >
                  <option value="">Select Destination</option>
                  {destinations.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* DATE LABEL */}
              <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
                {tripType === "round"
                  ? "Departure & Return Dates"
                  : "Departure Date"}
              </div>

              {/* DATES */}
              <div style={styles.row}>
                <input
                  type="date"
                  required
                  style={styles.input}
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />

                {tripType === "round" && (
                  <input
                    type="date"
                    required
                    style={styles.input}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                )}
              </div>

              {/* CLASS */}
              <select style={styles.input}>
                <option>Economy Class</option>
                <option>Business Class</option>
                <option>First Class</option>
              </select>

              {/* BUTTON */}
              <button type="submit" style={styles.searchBtn}>
                {buttonText}
              </button>

              {/* MESSAGE */}
              {message && (
  <div style={{ marginTop: "10px", fontWeight: "bold" }}>
    <p>{message}</p>

    {price && (
      <p style={{ color: "green", fontSize: "18px" }}>
        💰 Price: ₹{price}
      </p>
    )}
  </div>
)}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
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
  tripToggle: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  toggle: {
    padding: "8px 12px",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
    borderRadius: "6px",
  },
  activeToggle: {
    padding: "8px 12px",
    border: "none",
    background: "#ff6d38",
    color: "white",
    cursor: "pointer",
    borderRadius: "6px",
  },
};

export default Transport;