// src/components/Appointment.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Appointment() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [employee, setEmployee] = useState("Any");
  const [startTime, setStartTime] = useState("02:30");
  const [endTime, setEndTime] = useState("12:30");
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "" });

  const steps = ["Service", "Time", "Details", "Done"];

  const handleNext = () => {
    if (step < steps.length - 1) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const formVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-green-700"
      >
        Let’s Bring Your Landscape & Garden Ideas to Life.{" "}
        <span className="text-black">Book an Appointment</span>
      </motion.h1>

      {/* Progress Bar */}
      <div className="flex justify-center gap-4 mt-10 w-full max-w-4xl">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-col items-center w-full">
            <p
              className={`font-semibold ${
                i <= step ? "text-green-700" : "text-gray-400"
              }`}
            >
              {i + 1}. {label}
            </p>
            <motion.div
              layout
              className={`h-2 w-full rounded-full ${
                i <= step ? "bg-green-700" : "bg-gray-300"
              }`}
              transition={{ duration: 0.4 }}
            />
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="mt-10 w-full max-w-4xl bg-gray-50 rounded-xl shadow-md p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Step 1 - Service */}
          {step === 0 && (
            <motion.div
              key="service"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p className="font-semibold mb-2">Please select service:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">
                    Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select service</option>
                    <option value="Lawn Maintenance">Lawn Maintenance</option>
                    <option value="Irrigation Setup">Irrigation Setup</option>
                    <option value="Tree & Shrub Care">Tree & Shrub Care</option>
                    <option value="Hardscaping">Hardscaping</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 text-gray-600 font-medium">
                    Employee
                  </label>
                  <select
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                  >
                    <option>Any</option>
                    <option>John</option>
                    <option>Sarah</option>
                    <option>Michael</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2 - Time */}
          {step === 1 && (
            <motion.div
              key="time"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p className="font-semibold mb-4">Select your available time:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">
                    Start from
                  </label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-gray-600 font-medium">
                    Finish by
                  </label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                </div>
              </div>
              <input
                type="date"
                className="border rounded-lg px-3 py-2 w-full md:w-1/2"
                defaultValue="2025-10-13"
              />
            </motion.div>
          )}

          {/* Step 3 - Details */}
          {step === 2 && (
            <motion.div
              key="details"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p className="font-semibold mb-4">Enter your contact details:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={customer.name}
                    onChange={(e) =>
                      setCustomer({ ...customer, name: e.target.value })
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) =>
                      setCustomer({ ...customer, phone: e.target.value })
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-600 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    value={customer.email}
                    onChange={(e) =>
                      setCustomer({ ...customer, email: e.target.value })
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4 - Done */}
          {step === 3 && (
            <motion.div
              key="done"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 8 }}
                className="text-6xl text-green-600 mb-4"
              >
                ✓
              </motion.div>
              <h2 className="text-2xl font-bold text-green-700 mb-2">
                Appointment Booked!
              </h2>
              <p className="text-gray-600">
                Thank you, {customer.name || "Customer"}! We’ll contact you soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 0 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg"
            >
              ← Prev
            </motion.button>
          ) : (
            <div></div>
          )}

          {step < steps.length - 1 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg"
            >
              Next →
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
