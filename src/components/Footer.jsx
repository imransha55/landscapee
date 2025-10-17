// src/components/Footer.jsx
import { FaHeadset, FaWhatsapp   } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/footer-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 px-6 md:px-20 py-12">

      {/* Heading + Contact */}
<div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
  {/* Left Side - Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
    Think Green! Think Us!!
  </h2>

  {/* Right Side - Contact */}
  <div className="flex flex-col md:flex-row items-center gap-4">
    <span className="flex items-center gap-2 text-green-400 text-xl font-semibold">
      <FaHeadset /> 800-865-2255
    </span>
    <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md">
      Got questions? Ask here.
    </button>
  </div>
</div>


        {/* Locations + Newsletter */}
        <div className="border-t border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Hyderabad */}
          <div>
            <h3 className="text-green-400 font-semibold mb-2">Hyderabad (TG)</h3>
            <p className="text-sm">
              Sri Sai Sigma-1, 4th Floor Raja Rajeswara Nagar, Madhava Hills Estates, Kondapur, Telangana, India – 500084
            </p>
            <p className="mt-2 text-sm">sales@landscapic.com</p>
            <p className="text-sm">+91 800-865-2255</p>
          </div>

          {/* Bengaluru */}
          <div>
            <h3 className="text-green-400 font-semibold mb-2">Bengaluru (KA)</h3>
            <p className="text-sm">
              # C-51, G.K.Nagara, Near Police Quarters, Kadugodi Post, Whitefield, Bengaluru, Karnataka, India – 560067
            </p>
            <p className="mt-2 text-sm">sales@landscapic.com</p>
            <p className="text-sm">+91 800-865-2255</p>
          </div>

          {/* Kadiyam */}
          <div>
            <h3 className="text-green-400 font-semibold mb-2">Kadiyam (AP)</h3>
            <p className="text-sm">
              # 1-306/3, NH 16 Road, Venkayamma Peta Rd, Kadiyapalunka, Kadiyam, Andhra Pradesh, India – 533126
            </p>
            <p className="mt-2 text-sm">sales@landscapic.com</p>
            <p className="text-sm">+91 800-865-2255</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-2">Stay in the loop</h3>
            <p className="text-sm mb-4">
              Sign up for our newsletter and explore fresh ideas in gardening and landscaping.
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-2 rounded-md text-black border-1  bg-gray-50"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-3 py-2 rounded-md text-black border-1 bg-gray-50"
              />
            <div className="relative w-full">
  <input
    type="email"
    placeholder="Email Address"
    className="w-full px-3 py-2 pr-10 rounded-md text-white border-1"
  />
  <button
    type="submit"
    className="absolute  right-3 top-1/2 -translate-y-1/2 text-amber-50 hover:text-green-700 bg-green-600 hover:bg-amber-50 rounded-2xl "
  >
    <CiLocationArrow1  size={34} />
  </button>
</div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© Copyright 2019 – 2025 | MyLandscaping Solutions Private Limited | All rights reserved</p>
          <a href="#" className="hover:text-green-400">Privacy Policy</a>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918008652255"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600"
        >
          <FaWhatsapp />
        </a>
         <a
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-green-500 rounded-full p-1  shadow-lg hover:bg-green-600 cursor-pointer"
            >
            <IoMdArrowDropup size={28} />
            </a>

      </div>
    </footer>
  );
}
