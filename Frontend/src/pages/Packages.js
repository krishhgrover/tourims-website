import React from "react";
import Navbar from "../components/NavBar";
import Header from "../components/Header";


function Packages() {

  // ✅ Better: Store data in array (clean React way)
  const packages = [
    {
      title: "Romantic Maldives",
      desc: "Flights, 4N Water Villa, Meals",
      price: "₹ 85,000",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400"
    },
    {
      title: "Bali Adventure",
      desc: "Flights, 5N Hotel, Water Sports",
      price: "₹ 45,000",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400"
    },
    {
      title: "Himalayan High Altitude",
      desc: "Flights, Royal Enfield 450, Gear",
      price: "₹ 55,000",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400"
    },
    {
      title: "Western Ghats Coastal Ride",
      desc: "Flights, Triumph Speed 400, Fuel",
      price: "₹ 48,000",
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=400"
    }
  ];

  return (
    <div style={{ backgroundColor: "#e5eef5", minHeight: "100vh" }}>

      {/* ✅ Navbar */}
      <Header />
      <Navbar />

      {/* ✅ Container */}
      <div style={styles.container}>

        <h2 style={styles.heading}>
          Top Trending Holiday Packages
        </h2>

        {/* ✅ Cards */}
        <div style={styles.grid}>

          {packages.map((pkg, index) => (
            <div key={index} style={styles.card}>

              <img src={pkg.img} alt="package" style={styles.image} />

              <div style={styles.content}>
                <h3 style={{ margin: 0 }}>{pkg.title}</h3>
                <p style={styles.desc}>{pkg.desc}</p>
                <p style={styles.price}>{pkg.price}</p>
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

// ✅ Only Packages CSS
const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  heading: {
    color: "#0a1429",
    textAlign: "center",
    marginBottom: "30px"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center"
  },
  card: {
    width: "420px",
    display: "flex",
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  image: {
    width: "40%",
    objectFit: "cover"
  },
  content: {
    padding: "15px"
  },
  desc: {
    color: "#555"
  },
  price: {
    fontWeight: "bold"
  },
  link: {
    color: "#007bff",
    textDecoration: "none"
  }
};

export default Packages;