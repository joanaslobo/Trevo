import { motion } from 'framer-motion';
import { Link } from 'wouter';
import WaveDivider from '@/components/ui/wave-divider';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLanguage } from '@/lib/language-context';
import { fadeIn, slideFromLeft, wiggleAnimation } from '@/lib/animations';

const Home = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-40 bg-gradient-to-b from-[#F7F3E3] to-[#e6f5ec] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-full -top-20 left-0 transform -rotate-6">
          <div className="h-40 w-full flex">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-full w-48 flex-shrink-0"
                style={{
                  backgroundColor: i % 3 === 0 ? '#1a7a3d' : i % 3 === 1 ? '#c66b3e' : '#f4b942'
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute w-full bottom-20 left-0 transform rotate-6">
          <div className="h-40 w-full flex">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-full w-48 flex-shrink-0"
                style={{
                  backgroundColor: i % 3 === 0 ? '#f4b942' : i % 3 === 1 ? '#1a7a3d' : '#c66b3e'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
            className="relative z-10"
          >
            <motion.div 
              className="absolute -top-12 -left-8 text-8xl text-[#f4b942] opacity-20 rotate-12 font-handwritten"
              animate={{ rotate: [12, 15, 12], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              Peace
            </motion.div>
            <motion.div 
              className="absolute top-20 -right-10 text-7xl text-[#c66b3e] opacity-20 -rotate-6 font-handwritten"
              animate={{ rotate: [-6, -8, -6], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              Groove
            </motion.div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a7a3d] leading-tight relative">
              Trevo <span className="text-[#c66b3e]">&ndash;</span> {t('home.title')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#333333] font-medium">
              {t('home.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[#c66b3e] hover:bg-[#b35c35] text-white px-8 py-3 rounded-full font-bold transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center group">
                {t('home.cta.join')}
                <motion.i 
                  className="fas fa-arrow-right ml-2"
                  variants={wiggleAnimation}
                  initial="stop"
                  whileHover="wiggle"
                ></motion.i>
              </Link>
              <Link href="/programs" className="border-2 border-[#1a7a3d] text-[#1a7a3d] hover:bg-[#1a7a3d] hover:text-white px-6 py-3 rounded-full font-medium transition duration-300">
                {t('home.cta.explore')}
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Retro 70s psychedelic pattern and musical elements */}
            <div className="relative h-80 md:h-96 bg-[#F7F3E3] rounded-full overflow-hidden border-4 border-[#1a7a3d] shadow-xl">
              {/* Background color swirls */}
              <motion.div 
                className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-[#f4b94233]"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0],
                  y: [0, 10, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-[#c66b3e22]"
                animate={{ 
                  scale: [1, 1.1, 1],
                  x: [0, -10, 0],
                  y: [0, 15, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              
              {/* Floating musical symbols */}
              <motion.div 
                className="absolute top-10 left-12 text-6xl text-[#1a7a3d]"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                ♪
              </motion.div>
              <motion.div 
                className="absolute top-1/3 right-10 text-7xl text-[#c66b3e]"
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                ♫
              </motion.div>
              <motion.div 
                className="absolute bottom-10 right-16 text-6xl text-[#f4b942]"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                ♩
              </motion.div>
              
              {/* Shamrock/Clover in the center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="scale-[3]">
                  <motion.div
                    className="relative inline-block w-[45px] h-[45px]"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div 
                      className="absolute w-[20px] h-[20px] bg-[#1a7a3d] rounded-full top-0 left-[12.5px]"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute w-[20px] h-[20px] bg-[#1a7a3d] rounded-full top-[12.5px] left-0"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    />
                    <motion.div 
                      className="absolute w-[20px] h-[20px] bg-[#1a7a3d] rounded-full top-[12.5px] right-0"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    />
                    <motion.div 
                      className="absolute w-[20px] h-[20px] bg-[#1a7a3d] rounded-full bottom-0 left-[12.5px]"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    />
                    <div className="absolute w-[4px] h-[15px] bg-[#1a7a3d] bottom-[-10px] left-[50%] transform translate-x-[-50%] rotate-[10deg]" />
                  </motion.div>
                </div>
              </div>
              
              {/* Instruments silhouettes */}
              <motion.div
                className="absolute left-4 bottom-6 w-16 h-28 opacity-20"
                animate={{ y: [0, -4, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3L5 21M5 3L19 21" stroke="#1a7a3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="9" stroke="#1a7a3d" strokeWidth="2"/>
                </svg>
              </motion.div>
            </div>
            
            {/* Peace symbol at bottom */}
            <motion.div
              className="absolute -bottom-4 right-4 w-16 h-16 text-[#c66b3e] opacity-60"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2V22M12 12L4 6M12 12L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fillColor="#FFFFFF" />
      </div>
    </section>
  );
};

export default Home;
