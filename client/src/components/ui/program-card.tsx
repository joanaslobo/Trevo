import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface ProgramCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  colorClass: string;
  borderColorClass: string;
  linkText: string;
  linkHref: string;
  delay?: number;
}

const ProgramCard = ({
  icon,
  title,
  description,
  features,
  colorClass,
  borderColorClass,
  linkText,
  linkHref,
  delay = 0
}: ProgramCardProps) => {
  return (
    <motion.div 
      className="bg-white shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      style={{ borderRadius: "1rem" }}
    >
      <div className={`${borderColorClass} h-2`}></div>
      <div className="p-6">
        <div className={`text-4xl ${colorClass} mb-4`}>
          <i className={`fas ${icon}`}></i>
        </div>
        <h3 className={`font-serif text-2xl font-semibold ${colorClass} mb-3`}>
          {title}
        </h3>
        <p className="text-[#333333] mb-4">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <i className="fas fa-check text-[#c66b3e] mr-2"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={linkHref} className={`inline-block ${colorClass} hover:opacity-80 font-medium transition duration-300`}>
          {linkText} <i className="fas fa-arrow-right ml-1"></i>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
