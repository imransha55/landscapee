// src/components/OurServices.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import irrigation from "../assets/irriga.png";
import lawn from "../assets/lawn.png";
import cominout from "../assets/comInOut.png";
import tree from "../assets/treeShrub.png";
import comland from "../assets/comLand.png";
import hardscaping from "../assets/hardscaping.png";

const services = [
  {
    title: "Irrigation & Watering Solutions",
    desc: "Our Irrigation & Watering Services ensure proper irrigation for healthy growth.",
    img: irrigation,
    details:
      "We provide complete irrigation system installation, repair, and maintenance. Our expert team designs systems to optimize water usage and promote healthy plant growth.",
    includes: [
      "Sprinkler installation and maintenance",
      "Drip irrigation systems",
      "Water management and audits",
      "Seasonal system adjustments",
    ],
    faqs: [
      {
        q: "How often should I water my lawn?",
        a: "It depends on soil type and weather, but generally 2–3 times per week is ideal for most lawns.",
      },
      {
        q: "Do you provide maintenance for existing irrigation systems?",
        a: "Yes, we offer maintenance, repair, and system optimization for all irrigation setups.",
      },
    ],
  },
  {
    title: "Lawn & Garden Maintenance",
    desc: "We offer full-service lawn and garden maintenance for a perfect landscape.",
    img: lawn,
    details:
      "Our team provides comprehensive lawn care, trimming, fertilizing, and pest management to keep your garden vibrant year-round.",
    includes: [
      "Lawn mowing and edging",
      "Seasonal fertilization",
      "Weed and pest control",
      "Garden bed maintenance",
    ],
    faqs: [
      {
        q: "Do you provide organic lawn care?",
        a: "Yes! We offer organic fertilizer and pest management options.",
      },
      {
        q: "How frequently should I mow my lawn?",
        a: "Once a week during growing season is ideal for most lawns.",
      },
    ],
  },
  {
    title: "Commercial Indoor & Outdoor Planting",
    desc: "Professional planting services for commercial and residential spaces.",
    img: cominout,
    details:
      "From offices to large outdoor spaces, we design and install beautiful plant arrangements that elevate the atmosphere.",
    includes: [
      "Indoor potted plant design",
      "Outdoor plant installation",
      "Seasonal plant replacement",
      "Maintenance contracts for businesses",
    ],
    faqs: [
      {
        q: "Do you handle large commercial projects?",
        a: "Yes, our team specializes in commercial-scale installations.",
      },
      {
        q: "Do you offer ongoing maintenance?",
        a: "Absolutely! We provide flexible maintenance plans for all clients.",
      },
    ],
  },
  {
    title: "Tree & Shrubs Maintenance",
    desc: "We specialize in tree pruning, shaping, and maintenance for healthier growth.",
    img: tree,
    details:
      "Healthy trees and shrubs form the backbone of your landscape. We ensure proper care through trimming, shaping, and seasonal pruning.",
    includes: [
      "Tree pruning and trimming",
      "Shrub shaping",
      "Disease and pest control",
      "Stump removal",
    ],
    faqs: [
      {
        q: "When is the best time to prune trees?",
        a: "Late winter or early spring is ideal for most species.",
      },
      {
        q: "Do you remove dead or fallen trees?",
        a: "Yes, we offer full tree removal and cleanup services.",
      },
    ],
  },
  {
    title: "Commercial Landscaping",
    desc: "We design and maintain stunning commercial landscapes that impress.",
    img: comland,
    details:
      "We bring businesses to life with professionally designed landscapes, ensuring aesthetic appeal and sustainability.",
    includes: [
      "Landscape design consultation",
      "Plant selection and layout",
      "Seasonal color planning",
      "Maintenance and upgrades",
    ],
    faqs: [
      {
        q: "Do you provide 3D landscape designs?",
        a: "Yes, our designers use 3D software for accurate visualizations.",
      },
      {
        q: "Can you maintain existing landscapes?",
        a: "Definitely! We offer long-term contracts for maintenance.",
      },
    ],
  },
  {
    title: "Hardscaping & Lighting Installation",
    desc: "Enhance your property with elegant hardscaping and lighting designs.",
    img: hardscaping,
    details:
      "We create beautiful patios, pathways, and lighting setups that transform outdoor areas into luxurious living spaces.",
    includes: [
      "Pathways & patios",
      "Stone walls & seating",
      "Outdoor lighting design",
      "Water features installation",
    ],
    faqs: [
      {
        q: "Do you install outdoor water fountains?",
        a: "Yes, we install custom-designed fountains and ponds.",
      },
      {
        q: "Are your lights energy-efficient?",
        a: "Absolutely! We use modern, low-energy LED systems.",
      },
    ],
  },
];

export default function OurServices() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-28 px-6 bg-gray-50 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-green-700 mb-12"
      >
        Our Services
      </motion.h2>

      {/* Grid of services */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, i) => (
       <motion.div
  key={i}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
  whileHover={{
    scale: 1.05,
    y: -8,
    boxShadow: "0px 12px 25px rgba(34, 197, 94, 0.25)", // soft green glow
  }}
  whileTap={{ scale: 0.98 }}
  onClick={() => setSelected(service)}
  className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden transition-all flex flex-col"
>
  <div className="w-full bg-gray-100 flex justify-center items-center">
    <motion.img
      src={service.img}
      alt={service.title}
      className="w-full max-h-56 object-contain"
      whileHover={{
        scale: 1.08, // image also gently zooms
        transition: { type: "spring", stiffness: 220, damping: 20 },
      }}
    />
  </div>
  <div className="p-6 flex flex-col items-center text-center">
    <h3 className="text-xl font-semibold text-green-700 mb-3">{service.title}</h3>
    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#16a34a", color: "#fff" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:text-white transition-colors"
    >
      Read More →
    </motion.button>
  </div>
</motion.div>

        ))}
      </div>

    
      {/* Modal for selected service */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-[90%] max-h-[85vh] overflow-y-auto relative"
            >
             <motion.button
  onClick={() => setSelected(null)}
  className="absolute cursor-pointer top-4 right-4 text-red-600 font-semibold text-lg"
  whileHover={{ rotate: 180 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
  ✕
</motion.button>


              <img
                src={selected.img}
                alt={selected.title}
                className="w-full max-h-80 object-contain rounded-lg mb-6"
              />

              <h3 className="text-3xl font-bold text-green-700 mb-4">
                {selected.title}
              </h3>
              <p className="text-gray-700 mb-6 text-justify">
                {selected.details}
              </p>

              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Our Services Include:
              </h4>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                {selected.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Frequently Asked Questions
              </h4>
              <div className="space-y-3">
                {selected.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-green-50 rounded-lg p-4 text-left"
                  >
                    <p className="font-semibold text-green-700">
                      Q: {faq.q}
                    </p>
                    <p className="text-gray-700 mt-1">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            {/* Navigation Buttons */}
              <div className=" bottom-0 bg-white py-4 mt-6 flex justify-between border-t border-dashed border-green-300">
                {(() => {
                  const index = services.findIndex((s) => s.title === selected.title);
                  const prev = services[index - 1];
                  const next = services[index + 1];

                  return (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!prev}
                        onClick={() => prev && setSelected(prev)}
                        className="flex items-center gap-2 bg-green-700 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                      >
                        ← {prev ? prev.title : "First Service"}
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!next}
                        onClick={() => next && setSelected(next)}
                        className="flex items-center gap-2 bg-green-700 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                      >
                        {next ? next.title : "Last Service"} →
                      </motion.button>
                    </>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}