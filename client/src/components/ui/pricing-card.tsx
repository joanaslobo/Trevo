import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface PricingCardProps {
  title: string;
  price: string;
  unit: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  colorClass: string;
  bgColorClass: string;
  iconColorClass: string;
  delay?: number;
}

const PricingCard = ({
  title,
  price,
  unit,
  features,
  buttonText,
  buttonHref,
  colorClass,
  bgColorClass,
  iconColorClass,
  delay = 0
}: PricingCardProps) => {
  return (
    <motion.div 
      className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className={`${bgColorClass} py-3 text-center`}>
        <h3 className="font-serif text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <div className="text-center mb-6">
          <span className={`text-3xl font-bold ${colorClass}`}>{price}</span>
          <span className="text-[#333333]">{unit}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <i className={`fas fa-check-circle ${iconColorClass} mt-1 mr-2`}></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Link href={buttonHref} className={`inline-block ${bgColorClass} hover:brightness-110 text-white px-6 py-2 rounded-full font-medium transition duration-300`}>
            {buttonText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
