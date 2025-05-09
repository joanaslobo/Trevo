
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onComplete: () => void;
}

export const LandingOverlay = ({ onComplete }: Props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(onComplete, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={clicked ? { opacity: 0 } : {}}
      onClick={handleClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white cursor-pointer"
    >
      <motion.div
        animate={clicked ? { scale: 0, rotate: 360 } : {}}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <img src="/logo.png" alt="Logo" className="w-32 h-32 mx-auto mb-4" />
        <h1 className="text-4xl font-serif">Trevo</h1>
        <p className="mt-4 text-gray-600">Click anywhere to enter</p>
      </motion.div>
    </motion.div>
  );
};
