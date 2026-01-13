import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import AuthModal from "./AuthModal";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const location = useLocation();

  const isAuth = localStorage.getItem("a1_auth");

  const logout = () => {
    localStorage.removeItem("a1_auth");
    window.location.reload();
  };

  return (
    <>
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

          {!isAuth ? (
            <>
              <button className="auth-btn" onClick={() => setShowAuth(true)}>
                Login / Signup
              </button>
            </>
          ) : (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Popup Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
}

export default Navbar;
