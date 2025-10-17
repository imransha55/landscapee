// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import OurServices from "./components/OurServices";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Appointment from "./components/Appointment.JSX";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";


export default function App() {
  return (
    <Router>
     <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/appointment" element={<Appointment />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/contact" element={<ContactUs />} />
      </Routes>
    <Footer/>
    </Router>
  );
}
