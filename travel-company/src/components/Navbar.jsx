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

        {/* Hamburger / Close Icon */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </div>

        {/* Links */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/packages" onClick={() => setOpen(false)}>Packages</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
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
