import React from "react";

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
  }
};

function Header() {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>MakeMyJourney</h1>
    </div>
  );
}

export default Header;