import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center space-x-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-lg font-medium text-sm transition-all duration-300 ${
          language === 'en'
            ? 'bg-[#1a7a3d] text-white font-bold'
            : 'text-[#333333] hover:text-[#1a7a3d]'
        }`}
        aria-label="Switch to English"
      >
        EN
        {language === 'en' && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f4b942]"
            layoutId="underline"
          />
        )}
      </button>
      <span className="text-gray-400">/</span>
      <button
        onClick={() => setLanguage('pt')}
        className={`px-2 py-1 rounded-lg font-medium text-sm transition-all duration-300 ${
          language === 'pt'
            ? 'bg-[#c66b3e] text-white font-bold'
            : 'text-[#333333] hover:text-[#c66b3e]'
        }`}
        aria-label="Switch to Portuguese"
      >
        PT
        {language === 'pt' && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f4b942]"
            layoutId="underline"
          />
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;