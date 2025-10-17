// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <h1
          onClick={() => handleNav("/")}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          MyWebsite
        </h1>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
          <motion.li whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => handleNav("/")}
              className="hover:text-blue-500 transition-colors"
            >
              Home
            </button>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => handleNav("/services")}
              className="hover:text-blue-500 transition-colors"
            >
              Our Services
            </button>
          </motion.li>
<motion.li whileHover={{ scale: 1.05 }}>
  <button
    onClick={() => handleNav("/gallery")}
    className="hover:text-blue-500 transition-colors"
  >
    Gallery
  </button>
</motion.li>
<motion.li whileHover={{ scale: 1.05 }}>
  <button
    onClick={() => handleNav("/contact")}
    className="hover:text-blue-500 transition-colors"
  >
    Contact Us
  </button>
</motion.li>



          <motion.li whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => handleNav("/appointment")}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <SlCalender className="text-white text-lg" />
              Schedule Appointment
            </button>
          </motion.li>
        </ul>

        {/* ===== Mobile Menu Toggle ===== */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t shadow-md"
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-lg font-medium">
            <li>
              <button
                onClick={() => handleNav("/")}
                className="hover:text-blue-500"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/services")}
                className="hover:text-blue-500"
              >
                Our Services
              </button>
            </li>
            <li>
  <button
    onClick={() => handleNav("/gallery")}
    className="hover:text-blue-500"
  >
    Gallery
  </button>
</li>
<li>
  <button
    onClick={() => handleNav("/contact")}
    className="hover:text-blue-500"
  >
    Contact Us
  </button>
</li>
            <li>
              <button
                onClick={() => handleNav("/appointment")}
                className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                <SlCalender className="text-white text-lg" />
                Schedule Appointment
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
