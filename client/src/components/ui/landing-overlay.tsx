import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

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
        <img src="/logo.png" alt="Logo" className="w-32 h-32 mx-auto mb-4" />
        <h1 className="text-4xl font-serif font-extrabold text-white !text-white !font-extrabold mb-8">
          Trevo
        </h1>
        <div className="space-y-4">
          <p className="text-white font-bold !text-white !font-bold mb-6">
            Choose your language / Escolha seu idioma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('en')}
              className="bg-[#ff005c] hover:bg-[#e6004f] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 min-w-[150px]"
            >
              English
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('pt')}
              className="bg-[#00c3ff] hover:bg-[#00a8d6] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 min-w-[150px]"
            >
              Português
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
