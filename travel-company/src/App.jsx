import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import ChatBot from "./components/ChatBot";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
      <ChatBot />
    </BrowserRouter>
  );
}

export default App;
