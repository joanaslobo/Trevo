import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import logo from "@/assets/images/teachers/logo.png";

interface Props {
  onComplete: () => void;
}

export const LandingOverlay = ({ onComplete }: Props) => {
  const [clicked, setClicked] = useState(false);
  const { setLanguage } = useLanguage();

  const handleLanguageSelect = (lang: 'en' | 'pt') => {
    setLanguage(lang);
    setClicked(true);
    setTimeout(onComplete, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={clicked ? { opacity: 0 } : {}}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        animate={clicked ? { scale: 0, rotate: 360 } : {}}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.img
          src={logo}
          alt="Trevo Coolectivo Logo"
          className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-2/4 max-w-xs md:max-w-md lg:max-w-lg mx-auto"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        
        <div className="space-y-4">
          <p></p>
          <p className="text-white font-bold !text-white !font-bold mb-6">
            Idioma / Language
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('pt')}
              className="bg-[#B80000] hover:bg-[#00a8d6] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 min-w-[150px]"
            >
              Português
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('en')}
              className="bg-[#008F00] hover:bg-[#e6004f] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 min-w-[150px]"
            >
              English 
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
