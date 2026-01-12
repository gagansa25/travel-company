import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Enquiry:", form);
    alert("Thank you! We will contact you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      <h1>Contact Us</h1>
      <p>We’d love to help you plan your perfect trip 🇮🇳</p>

      <div className="contact-container">

        <div className="contact-info">
          <h3>IndiaTrips Travel Company</h3>
          <p><strong>Phone:</strong> 9938069896</p>
          <p><strong>Email:</strong> info@indiatrips.com</p>
          <p><strong>Service Area:</strong> All over India</p>
          <p><strong>Working Hours:</strong> Mon – Sat (9 AM – 7 PM)</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
          <input name="email" placeholder="Email (optional)" value={form.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows="4" />
          <button type="submit">Send Message</button>
        </form>

      </div>

      {/* Google Map */}
      <div className="map-section">
        <h2>Our Location</h2>
        <iframe
          title="IndiaTrips Location"
          src="https://www.google.com/maps?q=India&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}

export default Contact;
