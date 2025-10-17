import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function ContactUs() {
  // Variants for staggered animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[url('/bg-texture.png')] bg-cover bg-fixed flex justify-center items-center px-4 py-16 relative overflow-hidden"
    >
      {/* Soft floating gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-100/60 via-white/70 to-green-50/60 blur-2xl"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-green-50/95 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-3xl p-8 md:p-12 z-10"
      >
        {/* Header */}
        <motion.h2
          variants={fadeInUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-2"
        >
          MyLandscaping Solutions Private Limited
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="h-px bg-green-900 mb-6 mx-auto w-2/3"
        />

        {/* Contact Info Buttons */}
        <motion.div
          variants={fadeInUp}
          custom={0.4}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.08, y: -3 }}
            href="tel:+18008662255"
            className="flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-lg font-medium shadow-lg hover:bg-green-800 hover:shadow-green-400/40 transition"
          >
            <Phone size={20} /> +1 800-866-2255
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08, y: -3 }}
            href="mailto:sales@landscape.com"
            className="flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-lg font-medium shadow-lg hover:bg-green-800 hover:shadow-green-400/40 transition"
          >
            <Mail size={20} /> sales@landscape.com
          </motion.a>
        </motion.div>

        {/* Animated floating text */}
        <motion.p
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="text-center text-green-800 font-medium mb-4"
        >
          ✳ Get in Touch
        </motion.p>

        <motion.h3
          variants={fadeInUp}
          custom={0.6}
          initial="hidden"
          animate="visible"
          className="text-2xl text-center text-green-900 font-semibold mb-8"
        >
          Reach Us
        </motion.h3>

        {/* Contact Form */}
        <motion.form
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-4"
        >
          {[
            { label: "Name *", type: "text" },
            { label: "Email *", type: "email" },
            { label: "Phone Number *", type: "tel" },
          ].map((field, i) => (
            <motion.div key={i} variants={fadeInUp} custom={i + 1}>
              <label className="block font-semibold text-green-800 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </motion.div>
          ))}

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
            custom={4}
          >
            <div className="flex-1">
              <label className="block font-semibold text-green-800 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold text-green-800 mb-1">
                Time
              </label>
              <input
                type="time"
                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} custom={5}>
            <label className="block font-semibold text-green-800 mb-1">
              Any questions or specific requirements?
            </label>
            <textarea
              rows="4"
              className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            custom={6}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 12px rgba(34,197,94,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-800 transition mx-auto block"
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
