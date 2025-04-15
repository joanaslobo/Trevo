import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center justify-center px-3 py-1 bg-[#1a7a3d]/10 text-[#1a7a3d] font-medium rounded-full text-sm transition-all duration-300 hover:bg-[#1a7a3d]/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
    >
      <span className={`mr-1 ${language === 'en' ? 'opacity-100 font-bold' : 'opacity-50'}`}>EN</span>
      <span className="mx-1 text-[#c66b3e]">|</span>
      <span className={`ml-1 ${language === 'pt' ? 'opacity-100 font-bold' : 'opacity-50'}`}>PT</span>
    </motion.button>
  );
};

export default LanguageSwitcher;