import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Booking from "./pages/Booking";
import Home from "./pages/HomePage";
import Offers from "./pages/Offers";
import Packages from "./pages/Packages";
import Recommender from "./pages/Recommender";
import Transport from "./pages/Transport";
import Visa from "./pages/Visa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/transport" element={<Transport />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/recommender" element={<Recommender />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </Router>
  );
}

export default App;