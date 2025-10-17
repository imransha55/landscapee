import { motion } from "framer-motion";
import { useMemo } from "react";
import leafImg from "../assets/leaf.jpg"; // ✅ adjust path if needed

export default function FallingLeaves() {
  // useMemo ensures new random pattern on every reload (not every re-render)
  const leaves = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,         // random horizontal position
      top: Math.random() * -20,          // start randomly above screen
      size: 20 + Math.random() * 30,     // varied leaf size
      duration: 8 + Math.random() * 6,   // varied fall speed
      delay: Math.random() * 4,          // staggered start
      sway: Math.random() * 80 - 40,     // sideways drift
      rotateStart: Math.random() * 360,  // random initial rotation
      rotateEnd: 360 + Math.random() * 360, // random end rotation
    }));
  }, []); // ✅ re-runs only on full reload

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {leaves.map((leaf) => (
        <motion.img
          key={leaf.id}
          src={leafImg}
          alt="Falling Leaf"
          className="absolute opacity-80"
          style={{
            left: `${leaf.left}%`,
            top: `${leaf.top}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
          initial={{
            y: -100,
            rotate: leaf.rotateStart,
            opacity: 0.8,
          }}
          animate={{
            y: ["0vh", "110vh"],             // fall full viewport height
            rotate: [leaf.rotateStart, leaf.rotateEnd],
            opacity: [1, 0.8, 1],
            x: [0, leaf.sway],               // sway sideways
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
