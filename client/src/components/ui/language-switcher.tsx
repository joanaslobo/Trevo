import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center space-x-1">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-2 py-1 rounded-lg font-medium text-sm transition-all duration-300 ${
          language === 'pt'
            ? 'bg-[#ff005c] text-white font-bold'
            : 'text-[#333333] hover:text-[#ff005c]'
        }`}
        aria-label="Switch to Portuguese"
      >
        PT
        {language === 'pt' && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00c3ff]"
            layoutId="underline"
          />
        )}
      </button>
      <span className="text-gray-400">/</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-lg font-medium text-sm transition-all duration-300 ${
          language === 'en'
            ? 'bg-[#ff005c] text-white font-bold'
            : 'text-[#333333] hover:text-[#ff005c]'
        }`}
        aria-label="Switch to English"
      >
        EN
        {language === 'en' && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff005c]"
            layoutId="underline"
          />
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;