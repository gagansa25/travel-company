import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  

  const logout = () => {
    localStorage.removeItem("team_access");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        
        <Link to="/">
          <img src={logo} alt="A1 Travel Logo" />
        </Link>
      </div>
      

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About</Link>
        <Link className={location.pathname === "/packages" ? "active" : ""} to="/packages">Packages</Link>
        <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
