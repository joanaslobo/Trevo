import { motion } from 'framer-motion';
import PricingCard from '@/components/ui/pricing-card';
import { pricingPlans } from '@/lib/constants';

const Fees = () => {
  const colors = useThemeColors();
  return (
    <section id="fees" className="py-16 md:py-24" style={{ backgroundColor: colors.cardBg }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a7a3d]">
            Pricing
          </h2>
          <div className="w-20 h-1 bg-[#c66b3e] mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-[#333333]">
            Transparent pricing and flexible scheduling to fit your lifestyle and musical journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              unit={plan.unit}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonHref={plan.buttonHref}
              colorClass={plan.colorClass}
              bgColorClass={plan.bgColorClass}
              iconColorClass={plan.iconColorClass}
              delay={index * 0.1}
            />
          ))}
        </div>
        
 
      </div>
    </section>
  );
};

export default Fees;
