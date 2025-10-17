import { AnimatePresence, motion } from "framer-motion";
import { FaLeaf, FaTools } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import FallingLeaves from "./FallingLeaves";
// import { ServiceCard } from "./ServiceCard"
import yearofexp from "../assets/lawn-care.png";
import lawnboy from "../assets/lawnboy.png"
import tubeplant from "../assets/tubeplant.png"
import plant1 from "../assets/plant1.png"
import plant2 from "../assets/plant2.png"
import plant3 from "../assets/plant3.png"
import plant4 from "../assets/plant4.png"
import plant5 from "../assets/plant5.png"
export default function About() {
   const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10;
    const duration = 2000; // ms
    const frameRate = 30; // update per x ms
    const totalFrames = duration / frameRate;
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const currentCount = Math.round(progress * end);

      setCount(currentCount);

      if (currentFrame >= totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, []);
  const plantImages = [
  
plant1, 
 plant2,
 plant3,
 plant4,
 plant5,
 
];  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % plantImages.length);
    }, 3000); // ⏱️ Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

   // Animation Variants
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
     <>
      {/* ---------- ABOUT US SECTION ---------- */}
    <section
      id="about"
      className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left Section */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6"
      >
        <p className="text-green-600 font-semibold flex items-center gap-2">
          <span className="text-xl">🌿</span> About Us
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          We Work Together for Bettering{" "}
          <span className="text-green-600">Tomorrow</span>
        </h2>

        <p className="text-gray-600 text-justify leading-relaxed">
          Welcome to <strong>MyLandscaping Solutions Private Limited (Landscape)</strong>,
          your trusted destination for premium landscape design, garden architecture,
          and professional landscaping services in Bangalore and Hyderabad.
          Whether you’re revamping a backyard, designing a terrace garden,
          or planning an entire outdoor environment for your home or business,
          our team of expert architects and designers is here to bring your
          vision to life.
        </p>

        <p className="text-gray-600 text-justify leading-relaxed">
          We specialize in delivering high-quality, end-to-end landscaping
          solutions tailored to Urban Homes, Apartments, Commercial Spaces,
          Farm Houses, Educational Institutions, Resorts, Sports IT Parks and Villas.
        </p>

        {/* Service Cards */}
        <div className="space-y-4 mt-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md"
          >
            <FaLeaf className="text-green-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Landscape Installation
              </h3>
              <p className="text-gray-600 text-sm">
                We specialize in transforming open spaces into curated landscapes—
                thoughtfully installed, beautifully balanced, and built to endure.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md"
          >
            <FaTools className="text-green-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Landscape Maintenance
              </h3>
              <p className="text-gray-600 text-sm">
                We nurture your landscape with the same care it was created with—
                ensuring beauty that endures season after season.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all"
        >
          Contact Us Today →
        </motion.a>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-10 ml-9 md:mt-0  flex justify-center relative"
      >
        {/* Circular Image */}
        <div className="relative w-80 ml-19 h-80 md:w-[550px] md:h-[455px] rounded-full overflow-hidden shadow-xl">
          <img
           src={yearofexp}
            alt="Landscape Worker"
            className="object-cover w-full h-full"
          />
          </div>
          {/* Experience Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
             className="relative -left-29 bg-green-700 text-white w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center rounded-full shadow-lg border-4 border-white text-center"
          >
        <span className="text-[10px] md:text-[11px] leading-tight uppercase font-medium">
      Years of
    </span>
 <span className="text-xl md:text-2xl font-extrabold leading-none">
        {count}
      </span>
    <span className="text-[10px] md:text-[11px] leading-tight">
      Experience
    </span>
          </motion.div>
       
      </motion.div>
    </section>
 {/* ---------- OUR WORK SECTION ---------- */}
 
  {/* Background Image with Opacity */}
 {/*<section className="relative py-20 px-6 md:px-20 text-center overflow-x-hidden">
 
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 -z-10"
    style={{ backgroundImage: "url('/src/assets/grassland.jpg')" }}
  ></div>   */  }
    
  <section className="relative bg-green-50 py-20 px-6 md:px-20 text-center overflow-hidden">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-green-600 font-semibold flex items-center justify-center gap-2"
      >
        🌱 Our Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mt-2 mb-10"
      >
        The Best Service We Offer for{" "}
        <span className="text-green-600">Your Garden</span>
      </motion.h2>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center">
        {/* Left Column */}
        <div className="space-y-6 md:mr-12">
          {[
            {
              number: "01",
              title: "Commercial Planting",
              desc: "Professional planting solutions that bring vibrant greenery to commercial environments—designed to impress and endure.",
            },
            {
              number: "02",
              title: "Planting and Landscape",
              desc: "Curated plantings and tailored landscaping that reflect elegance, enhance space, and thrive through the seasons.",
            },
            {
              number: "03",
              title: "Tree Maintenance",
              desc: "Nurturing the roots of your landscape with skillful care preserving beauty and promoting healthy growth.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.number}
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <ServiceCard {...card} />
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative my-10 md:my-0 flex items-center justify-center">
          <motion.img
            src={tubeplant}
            alt="Tube Plant"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-56 md:w-72 drop-shadow-lg z-10"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6 md:ml-12">
          {[
            {
              number: "04",
              title: "Lawn & Garden Maintenance",
              desc: "Maintaining lush, healthy lawns and vibrant gardens with precision care that ensures beauty throughout the seasons.",
            },
            {
              number: "05",
              title: "Hardscaping & Lighting",
              desc: "Expertly crafted hardscaping paired with lighting designs that define your outdoor space.",
            },
            {
              number: "06",
              title: "Irrigation and Watering",
              desc: "Tailored irrigation systems optimizing water usage while protecting natural resources.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.number}
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <ServiceCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
   {/* ---------- WHY CHOOSE US SECTION ---------- */}
<section className="relative bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">

 

  {/* Left Image */}
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, type: "spring" }}
    className="md:w-1/2 flex justify-center mb-10 md:mb-0"
  >
    <motion.img
      src={lawnboy} // 🔄 replace with your landscaper image
      alt="Landscaping Expert"
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="w-80 md:w-[400px] drop-shadow-xl rounded-2xl"
    />
  </motion.div>

  {/* Right Content */}
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, type: "spring" }}
    className="md:w-1/2 text-left space-y-6"
  >
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-green-600 font-semibold flex items-center gap-2"
    >
      🌿 Why Choose Us
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug"
    >
      Experience the Art of{" "}
      <span className="text-green-600">Landscaping Services</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-gray-600 leading-relaxed"
    >
      We combine innovative design, sustainable practices, and a dedication to excellence,
      ensuring your landscape thrives with timeless beauty and functionality.
    </motion.p>

    {/* Features */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.3, delayChildren: 0.8 },
        },
      }}
      className="space-y-6 mt-8"
    >
      {/* Card 1 */}
      <motion.div
        whileHover={{ scale: 1.03, x: 5 }}
        className="flex items-start gap-4 bg-green-50 p-4 rounded-xl shadow-sm hover:shadow-md"
      >
        <motion.div
          initial={{ rotate: -15 }}
          whileInView={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
        >
          <FaLeaf className="text-green-600 text-xl" />
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Expert Team Members
          </h3>
          <p className="text-gray-600 text-sm">
            Our team is committed to delivering exceptional quality and customer satisfaction,
            using only the best materials and techniques to ensure your outdoor spaces flourish.
          </p>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ scale: 1.03, x: 5 }}
        className="flex items-start gap-4 bg-green-50 p-4 rounded-xl shadow-sm hover:shadow-md"
      >
        <motion.div
          initial={{ rotate: 15 }}
          whileInView={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
        >
          <FaTools className="text-green-600 text-xl" />
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Quality Gardening Services
          </h3>
          <p className="text-gray-600 text-sm">
            With years of expertise and a passion for creating beautiful outdoor spaces,
            we provide unparalleled craftsmanship and attention to detail in every project we undertake.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
</section>
{/* ---------- GARDENING FLOW CHART SECTION ---------- */}
<section className="relative bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">

  {/* Left Content */}
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, type: "spring" }}
    className="md:w-1/2 space-y-6 relative"
  >
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-green-600 font-semibold"
    >
      🌿 Welcome to Our Garden
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug"
    >
      We don't Settle for the{" "}
      <span className="text-green-600">Boring Landscape</span>
    </motion.h2>

    {/* Flow Chart */}
    <div className="relative mt-10 space-y-12">
      {/* Connector Line */}
      <div className="absolute left-6 top-6 h-[calc(100%-24px)] w-px border-l-2 border-dotted border-green-500 z-0"></div>

      {/* Step 1 */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative z-10 bg-white p-6 pl-16 rounded-xl shadow-md border border-gray-100"
      >
        <div className="absolute left-0 top-6 w-12 h-12 bg-green-600 text-white font-bold rounded-full flex items-center justify-center shadow-md text-lg">
          01.
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Plant Selection</h3>
        <p className="text-gray-600 text-sm">
          Our knowledgeable team carefully chooses plants that complement your space,
          focusing on variety, texture, and long-term viability.
        </p>
      </motion.div>

      {/* Step 2 */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative z-10 bg-white p-6 pl-16 rounded-xl shadow-md border border-gray-100"
      >
        <div className="absolute left-0 top-6 w-12 h-12 bg-green-600 text-white font-bold rounded-full flex items-center justify-center shadow-md text-lg">
          02.
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Soil Preparation</h3>
        <p className="text-gray-600 text-sm">
          We ensure your soil is perfectly balanced and enriched, creating the ideal
          environment for plants to thrive and flourish.
        </p>
      </motion.div>

      {/* Step 3 */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative z-10 bg-white p-6 pl-16 rounded-xl shadow-md border border-gray-100"
      >
        <div className="absolute left-0 top-6 w-12 h-12 bg-green-600 text-white font-bold rounded-full flex items-center justify-center shadow-md text-lg">
          03.
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Patience and Observation</h3>
        <p className="text-gray-600 text-sm">
          Patience is key to achieving a truly flourishing landscape—we take the time to
          understand your space, ensuring careful, well-deliberate care for long-term success.
        </p>
      </motion.div>
    </div>
  </motion.div>

  {/* Right Image */}
  <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="md:w-1/2 flex justify-center mt-10 md:mt-0 overflow-hidden"
    >
      <div className="relative w-72 md:w-[350px] h-[600px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={plantImages[currentIndex]}
            src={plantImages[currentIndex]}
            alt="Decorative Plant"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full object-cover drop-shadow-xl rounded-2xl"
          />
        </AnimatePresence>
      </div>
    </motion.div>
</section>





    </>
  );
}
