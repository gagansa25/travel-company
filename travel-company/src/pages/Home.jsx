import { useNavigate } from "react-router-dom";
import HomePackagesSlider from "../components/HomePackagesSlider";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
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
            <button>✨ Plan my holiday</button>
            <button>🏔️ Show me amazing places</button>
            <button>🚗 Build my road trip</button>
          </div>
        </div>
      </div>
      {/* PACKAGE SLIDER */}
      <HomePackagesSlider />
    </>
  );
}

export default Home;