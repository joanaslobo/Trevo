import { motion } from 'framer-motion';
import ProgramCard from '@/components/ui/program-card';
import WaveDivider from '@/components/ui/wave-divider';
import { programsData } from '@/lib/constants';
import { useLanguage } from '@/lib/language-context'

const Programs = () => {
  const { t } = useLanguage();
  
  return (
    <section id="programs" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#e6f5ec] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a7a3d]">
            {t("programs.title")}
          </h2>
          <div className="w-20 h-1 bg-[#c66b3e] mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-[#333333]">
            {t("programs.subtitle")}
          </p>
        </motion.div> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              features={program.features}
              colorClass={program.colorClass}
              borderColorClass={program.borderColorClass}
              linkText={program.linkText}
              linkHref={program.linkHref}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
