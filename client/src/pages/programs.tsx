
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { useThemeColors } from '@/lib/theme-colors';

const Programs = () => {
  const { t } = useLanguage();
  const colors = useThemeColors();
  
  const methodologyPillars = [
    { key: 'customPlan', icon: 'fa-clipboard-list' },
    { key: 'exploration', icon: 'fa-music' },
    { key: 'collaborative', icon: 'fa-users' },
    { key: 'discovery', icon: 'fa-book-open' },
    { key: 'production', icon: 'fa-sliders' },
    { key: 'monitoring', icon: 'fa-chart-line' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#e6f5ec]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a7a3d] mb-4">
            {t("programs.title")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#333333]">
            {t("programs.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {methodologyPillars.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              className="bg-white rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-[#1a7a3d] text-3xl mb-4">
                <i className={`fas ${pillar.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a7a3d]">
                {t(`programs.methodology.${pillar.key}`)}
              </h3>
              <p className="text-[#666666]">
                {t(`programs.methodology.${pillar.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-lg p-8 shadow-lg mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#1a7a3d]">
            {t("programs.locations.title")}
          </h3>
          <p className="mb-6 text-[#666666]">{t("programs.locations.desc")}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {['porto', 'ilhavo', 'ovar'].map((location) => (
              <div key={location} className="p-4 bg-[#f8f9fa] rounded-lg">
                <p className="font-medium">{t(`programs.locations.${location}`)}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg p-8 shadow-lg mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#1a7a3d]">
            {t("programs.benefits.title")}
          </h3>
          <ul className="space-y-4">
            {['individual', 'materials', 'club'].map((benefit) => (
              <li key={benefit} className="flex items-start">
                <i className="fas fa-check-circle text-[#1a7a3d] mt-1 mr-3"></i>
                <p className="text-[#666666]">{t(`programs.benefits.${benefit}`)}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#1a7a3d]">
            {t("programs.vision.title")}
          </h3>
          <p className="text-[#666666] max-w-2xl mx-auto">
            {t("programs.vision.desc")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
