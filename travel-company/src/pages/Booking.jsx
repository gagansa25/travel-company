import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Booking() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
const [image, setImage] = useState("");

const location = useLocation();

useEffect(() => {
  if (location.state) {
    setDestination(location.state.destination || "");
    setPrice(location.state.price || "");
    setImage(location.state.image || "");
  }
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      name,
      destination,
      date,
      phone,
      email,
    };

    console.log("Booking Data:", booking);

    alert("Booking Successful! We will contact you soon.");

    setName("");
    setDestination("");
    setDate("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="booking-page">
      <h2>Book Your Trip</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input type="text" value={`₹${price}`} readOnly />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {image && (
        <img
           src={image}
           alt="package"
           style={{
           width: "300px",
           borderRadius: "12px",
           marginBottom: "15px",
           }}
       />
      )}
        {price && <h3>Package Price: ₹{price}</h3>}

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;