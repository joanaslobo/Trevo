import { motion } from 'framer-motion';

interface CloverIconProps {
  white?: boolean;
}

const CloverIcon = ({ white = false }: CloverIconProps) => {
  const leafColor = white ? 'bg-white' : 'bg-[#1a7a3d]';
  const stemColor = white ? 'bg-white' : 'bg-[#1a7a3d]';

  return (
    <div className="relative inline-block w-[45px] h-[45px]">
      <motion.div 
        className={`absolute w-[20px] h-[20px] ${leafColor} rounded-full top-0 left-[12.5px]`}
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className={`absolute w-[20px] h-[20px] ${leafColor} rounded-full top-[12.5px] left-0`}
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.15
        }}
      />
      <motion.div 
        className={`absolute w-[20px] h-[20px] ${leafColor} rounded-full top-[12.5px] right-0`}
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.3
        }}
      />
      <motion.div 
        className={`absolute w-[20px] h-[20px] ${leafColor} rounded-full bottom-0 left-[12.5px]`}
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.45
        }}
      />
      <div className={`absolute w-[4px] h-[15px] ${stemColor} bottom-[-10px] left-[50%] transform translate-x-[-50%] rotate-[10deg]`} />
    </div>
  );
};

export default CloverIcon;
