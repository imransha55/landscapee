import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const images = [
  "https://assets.architecturaldigest.in/photos/68199f059c7f133c2e24a28a/16:9/w_1600%2Cc_limit/Untitled%2520design.jpg",
  "https://assets.architecturaldigest.in/photos/681997b4c8b56f61a970e092/master/w_1600,c_limit/1388156120",
  "https://assets.architecturaldigest.in/photos/681998a1014881acc79d5bf8/master/w_1600,c_limit/1497745702",
  "https://assets.architecturaldigest.in/photos/68e865c13798a33355b3a506/16:9/w_640,h_432,c_limit/cover%20image%20template%203.jpg",
  "https://assets.architecturaldigest.in/photos/67c593606c06c49ae0a5a69a/16:9/w_1600,c_limit/Untitled%20design%20-%202025-03-03T170230.179.png",
  "https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  "https://media.istockphoto.com/id/1150993051/photo/hands-holding-new-growth-plant.jpg?s=612x612&w=0&k=20&c=p4Odw_Yxck6dEplTa4NKlkvTwQSoaj5ZAm9INlHkuDc=",
  "https://media.istockphoto.com/id/1098229386/photo/in-the-garden-center-stock-image.jpg?s=612x612&w=0&k=20&c=gqzpcksHmGZPByz-1cS-qCnMdpyHARYs0Qm0pLwBAog=",
  "https://media.istockphoto.com/id/1314727519/photo/woman-weeding-in-the-garden.jpg?s=612x612&w=0&k=20&c=ltuME8SE8xmXjUSNKtJDqsylH81HOZOXSYkOEWwnMbs=",
  "https://media.istockphoto.com/id/154263341/photo/young-couple-in-tulip-garden.jpg?s=612x612&w=0&k=20&c=kydDkqJtA0OI1b6wSaEteYXFTgbuxK6r69YUBjINmDk=",
  
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setZoomed(false);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomed(false);
  };

  const toggleZoom = () => setZoomed((z) => !z);
 
  const closeModal = () => {
    setSelectedIndex(null);
    setZoomed(false);
    setFullscreen(false);
  };

  return (
    <section className="min-h-screen bg-white pt-28 pb-10 px-4 md:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10"
      >
        Our Landscaping <span className="text-black">Gallery</span>
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer group relative"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', stiffness: 80 },
              },
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 2,
              transition: { type: 'spring', stiffness: 200 },
            }}
          >
            <motion.img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="object-cover w-full h-48 md:h-56 lg:h-60 group-hover:brightness-90 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.span
                className="text-white text-sm md:text-base font-medium"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                View Photo
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center ${
              fullscreen ? "p-0" : "p-4"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Image Counter */}
            <motion.div
              className="absolute top-4 left-4 text-white text-sm md:text-base font-semibold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {selectedIndex + 1} / {images.length}
            </motion.div>

            {/* Controls */}
            <div className="absolute top-4 right-4 flex gap-4 text-white text-xl">
              <button className="cursor-pointer " onClick={toggleZoom} title="Zoom">
                🔍
              </button>
           
              <button  className="cursor-pointer"onClick={closeModal} title="Close">
                ❌
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 text-white text-3xl font-bold hover:scale-110 transition-transform"
              title="Previous"
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 text-white text-3xl font-bold hover:scale-110 transition-transform"
              title="Next"
            >
              &gt;
            </button>

            {/* Fullscreen Image */}
            <motion.img
              src={images[selectedIndex]}
              alt={`Gallery ${selectedIndex + 1}`}
              className={`object-contain rounded-lg shadow-lg ${
                zoomed ? "max-w-none w-full h-full" : "max-w-full max-h-[80vh]"
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
