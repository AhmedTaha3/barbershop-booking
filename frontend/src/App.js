import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import BookingPage from "./components/BookingPage";

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "#0033cc", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
