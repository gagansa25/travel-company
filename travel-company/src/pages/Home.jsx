import banner from "../assets/banner.jpg";

function Home() {
  return (
    <div className="page">
      <img src={banner} alt="Travel Banner" className="banner" />
      <h1>Explore India With Us</h1>
      <p>Your trusted travel partner for tours across India.</p>
    </div>
  );
}

export default Home;
