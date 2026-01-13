import { useState } from "react";

function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const user = JSON.parse(localStorage.getItem("a1_user"));
      if (user && user.email === form.email && user.password === form.password) {
        localStorage.setItem("a1_auth", "true");
        onClose();
        window.location.reload();
      } else {
        alert("Invalid login details");
      }
    } else {
      localStorage.setItem("a1_user", JSON.stringify(form));
      alert("Signup successful! Please login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2>{isLogin ? "Login" : "Signup"}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? (
            <>Don’t have an account? <span onClick={() => setIsLogin(false)}>Signup</span></>
          ) : (
            <>Already have an account? <span onClick={() => setIsLogin(true)}>Login</span></>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
