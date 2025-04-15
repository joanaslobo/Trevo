import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const About = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a7a3d]">
            About Trevo
          </h2>
          <div className="w-20 h-1 bg-[#c66b3e] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#c66b3e] mb-6">
              A fusion of Irish & Portuguese musical passion
            </h3>
            <p className="text-[#333333] mb-6">
              Trevo (Portuguese for shamrock) was born from the unique collaboration between an Irish musician and four Portuguese talents. Our name symbolizes the cultural bridge we've built between these two rich musical traditions.
            </p>
            <p className="text-[#333333]">
              Located in the vibrant city of Porto, we provide a space where traditional techniques meet contemporary expression, creating a distinctive sound that honors our diverse heritage.
            </p>
            
            <div className="mt-12">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#f4b942] mb-6">
                COOLlectivo – More than a school
              </h3>
              <p className="text-[#333333] mb-6">
                COOLlectivo is our creative community - a playful fusion of "cool," "lectivo" (academic), and "colectivo" (collective). We're not just teaching music; we're building a family of creators who inspire and support each other.
              </p>
              <p className="text-[#333333]">
                Through performances, workshops, and collaborative projects, we foster an environment where passion and expertise flow freely between teachers, students, and the wider Porto community.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              className="bg-[#e6f5ec] rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-[#1a7a3d] text-3xl mb-4">
                <i className="fas fa-guitar"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#156e35] mb-2">Irish Roots</h4>
              <p className="text-sm">Traditional Celtic music meeting contemporary Portuguese styles</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#f2dcd3] rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-[#c66b3e] text-3xl mb-4">
                <i className="fas fa-drum"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#b35c35] mb-2">Portuguese Flair</h4>
              <p className="text-sm">Bringing the soul of fado and Portuguese rhythms to our teaching</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#fcf4d3] rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-[#f4b942] text-3xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#e79c0d] mb-2">Our Team</h4>
              <p className="text-sm">5 passionate musicians with international performance experience</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#1a7a3d] text-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-white text-3xl mb-4">
                <i className="fas fa-music"></i>
              </div>
              <h4 className="font-serif text-xl font-medium mb-2">Community</h4>
              <p className="text-sm">Join our ever-growing family of musicians in Porto</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
