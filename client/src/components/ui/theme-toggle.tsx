import { useTheme } from '@/lib/theme-context';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { themeMode, toggleTheme, isRockMode } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
        isRockMode 
          ? 'bg-[#333] border border-[#666]' 
          : 'bg-[#F7F3E3] border border-[#ddd]'
      }`}
      aria-label={isRockMode ? 'Switch to light mode' : 'Switch to rock mode'}
    >
      <motion.div
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
          isRockMode ? 'bg-[#ff5722]' : 'bg-[#ffd54f]'
        }`}
        animate={{
          x: isRockMode ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 20
        }}
      >
        {isRockMode ? (
          <span className="text-xs scale-90">🤘</span>
        ) : (
          <span className="text-xs">☀️</span>
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;