import { motion } from 'framer-motion';
import PricingCard from '@/components/ui/pricing-card';
import { pricingPlans, scheduleData } from '@/lib/constants';

const Fees = () => {
  return (
    <section id="fees" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a7a3d]">
            Fees & Schedule
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
        
        <motion.div 
          className="bg-[#e6f5ec] rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-serif text-2xl font-semibold text-[#1a7a3d] mb-6">
            Class Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-[#c3e6d3] font-semibold text-[#333333] rounded-tl-lg">Day</th>
                  <th className="py-4 px-6 bg-[#c3e6d3] font-semibold text-[#333333]">Morning<br /><span className="text-xs font-normal">(9:00 - 12:00)</span></th>
                  <th className="py-4 px-6 bg-[#c3e6d3] font-semibold text-[#333333]">Afternoon<br /><span className="text-xs font-normal">(13:00 - 17:00)</span></th>
                  <th className="py-4 px-6 bg-[#c3e6d3] font-semibold text-[#333333] rounded-tr-lg">Evening<br /><span className="text-xs font-normal">(18:00 - 21:00)</span></th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((day, index) => (
                  <tr key={index} className={`border-b border-[#c3e6d3] ${index === scheduleData.length - 1 ? '' : ''}`}>
                    <td className={`py-4 px-6 font-medium ${index === scheduleData.length - 1 ? 'rounded-bl-lg' : ''}`}>{day.day}</td>
                    <td className="py-4 px-6">{day.morning}</td>
                    <td className="py-4 px-6">{day.afternoon}</td>
                    <td className={`py-4 px-6 ${index === scheduleData.length - 1 ? 'rounded-br-lg' : ''}`}>
                      {day.evening}
                      {day.note && (
                        <>
                          <br />
                          <span className="text-xs">{day.note}</span>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-[#333333]">
            <i className="fas fa-info-circle text-[#1a7a3d] mr-1"></i>
            Schedule subject to seasonal changes. Please check with our reception for the most up-to-date information.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Fees;
