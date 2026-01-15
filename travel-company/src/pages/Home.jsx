import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          A1 TRAVEL <br />
          <span>DISCOVER INCREDIBLE INDIA</span>
        </h1>

        <p>
          From mountains to beaches, explore India with comfort & trust 🇮🇳
        </p>

        <div className="hero-buttons">
          {/* ✅ LINKED TO PACKAGES */}
          <button onClick={() => navigate("/packages")}>
            ✨ Plan my holiday
          </button>
          <button onClick={() => navigate("/packages")}>
            🏔️ Show me amazing places
          </button>
          <button> 
            🚗 Build my road trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;