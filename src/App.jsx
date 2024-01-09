
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import Owner from "./Owner";
import "./App.css";

function Navigation() {
  const location = useLocation();
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      {location.pathname !== "/owner" && <Link to="/owner">Owner</Link>}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <header className="top-bar">
        <Navigation />
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/owner" element={<Owner />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
