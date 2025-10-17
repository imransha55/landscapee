import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ServiceCard({ number, title, desc, highlight = false }) {
  const [isHovered, setIsHovered] = useState(false);
   const [showModal, setShowModal] = useState(false);
  const active = isHovered || highlight;

  return (
    <>
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }} // Start position
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible
      viewport={{ once: false, amount: 0.2 }} // Animate every time in view (scroll down or up)
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className={`relative p-6 rounded-2xl shadow-md w-72 md:w-80 text-left cursor-pointer transition-all duration-300
        ${active ? "bg-green-700 text-white" : "bg-white text-gray-800"}
      `}
    >
      <h3 className={`font-semibold text-lg mb-2 ${active ? "text-white" : "text-gray-800"}`}>
        {title}
      </h3>

      <p className={`text-sm leading-relaxed ${active ? "text-green-100" : "text-gray-600"}`}>
        {desc}
      </p>

     <button
          onClick={() => setShowModal(true)}
          className={`mt-3 text-sm font-medium flex items-center gap-1 ${active ? "text-white" : "text-green-700"}`}
        >
          READ MORE →
        </button>
      <span
        className={`absolute top-4 right-5 font-bold text-sm ${active ? "text-green-200" : "text-gray-300"}`}
      >
        {number}
      </span>
    </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 w-80 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-green-700 mb-4">In Progress</h2>
              <p className="text-gray-600 text-sm">This feature is currently being developed.</p>
              <motion.button
                onClick={() => setShowModal(false)}
                className="mt-6 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
                whileHover={{ scale: 1.05 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}