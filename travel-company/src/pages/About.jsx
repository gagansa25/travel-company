import aboutImg from "../assets/about-travel.jpg";
import teamImg from "../assets/team.jpg";

function About() {
  return (
    <div className="about-page">
      
      {/* Section 1 */}
      <div className="about-section">
        <div className="about-text">
          <h1>About IndiaTrips</h1>
          <p>
            IndiaTrips is a trusted travel booking company providing
            customized and affordable tour packages across India.
            We help travelers explore India comfortably, safely,
            and memorably.
          </p>
          <p>
            From mountains to beaches, heritage to wildlife,
            we design journeys that create lifetime memories.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="About IndiaTrips" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="about-section reverse">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make travel easy, affordable,
            and enjoyable for everyone by offering transparent
            pricing and personalized services.
          </p>

          <h2>Why Choose Us</h2>
          <ul>
            <li>✔ All-India tour coverage</li>
            <li>✔ Customized travel packages</li>
            <li>✔ Affordable pricing</li>
            <li>✔ Dedicated customer support</li>
          </ul>
        </div>

        <div className="about-image">
          <img src={teamImg} alt="Our Team" />
        </div>
      </div>

    </div>
  );
}

export default About;
