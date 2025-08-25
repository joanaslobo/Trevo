import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({ 
  words, 
  interval = 3000,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Safety check: ensure words array exists and has content
  if (!words || !Array.isArray(words) || words.length === 0) {
    return <span className={className}>Loading...</span>;
  }

  useEffect(() => {
    // Only rotate the text if not being hovered
    if (isHovering) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval, isHovering]);

  // On hover, pause the rotation
  const handleMouseEnter = () => setIsHovering(true);

  // When hover ends, resume rotation
  const handleMouseLeave = () => setIsHovering(false);

  // Manually cycle to next word when clicked
  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <span 
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ 
            y: 20, 
            opacity: 0, 
            rotateX: -90,
          }}
          animate={{ 
            y: 0, 
            opacity: 1, 
            rotateX: 0,
          }}
          exit={{ 
            y: -20, 
            opacity: 0, 
            rotateX: 90,
            transition: { duration: 0.3 }
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut" 
          }}
          className="inline-block"
        >
          {words[currentIndex] || ''}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;