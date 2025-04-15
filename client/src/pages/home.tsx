import { motion } from 'framer-motion';
import { Link } from 'wouter';
import WaveDivider from '@/components/ui/wave-divider';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Home = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-40 bg-gradient-to-b from-[#F7F3E3] to-[#e6f5ec] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a7a3d] leading-tight">
              Trevo <span className="text-[#c66b3e]">&ndash;</span> Where Music Grows
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#333333] font-medium">
              A music school & collective in the heart of Porto, bringing together Irish and Portuguese musical traditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[#c66b3e] hover:bg-[#b35c35] text-white px-8 py-3 rounded-full font-bold transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center">
                Join the COOLlectivo
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link href="/programs" className="border-2 border-[#1a7a3d] text-[#1a7a3d] hover:bg-[#1a7a3d] hover:text-white px-6 py-3 rounded-full font-medium transition duration-300">
                Explore Programs
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Musical notes and clover animation */}
            <div className="relative h-80 md:h-96">
              <motion.div 
                className="absolute top-1/4 left-1/4 text-5xl text-[#1a7a3d]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                ♪
              </motion.div>
              <motion.div 
                className="absolute top-1/3 right-1/3 text-7xl text-[#c66b3e]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                ♫
              </motion.div>
              <motion.div 
                className="absolute bottom-1/4 right-1/4 text-6xl text-[#f4b942]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                ♩
              </motion.div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="scale-[4]">
                  <motion.div
                    className="relative inline-block w-[45px] h-[45px]"
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
            </div>
          </motion.div>
        </div>
      </div>
      
      <WaveDivider fillColor="#FFFFFF" />
    </section>
  );
};

export default Home;
