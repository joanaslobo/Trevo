
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
    <section className="py-16 md:py-24" style={{
      background: `linear-gradient(to bottom, ${colors.bgGradientFrom}, ${colors.bgGradientTo})`
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-24"></div>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            {t("programs.title")}
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 mb-6" style={{ backgroundColor: colors.secondary }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text }}>
            {t("programs.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {methodologyPillars.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              style={{ backgroundColor: colors.cardBg }}
              className="rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ color: colors.primary }} className="text-3xl mb-4">
                <i className={`fas ${pillar.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.primary }}>
                {t(`programs.methodology.${pillar.key}`)}
              </h3>
              <p style={{ color: colors.textLight }}>
                {t(`programs.methodology.${pillar.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ backgroundColor: colors.cardBg }}
          className="rounded-lg p-8 shadow-lg mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.primary }}>
            {t("programs.locations.title")}
          </h3>
          <p className="mb-6" style={{ color: colors.textLight }}>{t("programs.locations.desc")}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {['porto', 'ilhavo', 'ovar'].map((location) => (
              <div key={location} style={{ backgroundColor: colors.bgColor }} className="p-4 rounded-lg">
                <p className="font-medium" style={{ color: colors.text }}>
                  {t(`programs.locations.${location}`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ backgroundColor: colors.cardBg }}
          className="rounded-lg p-8 shadow-lg mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.primary }}>
            {t("programs.benefits.title")}
          </h3>
          <ul className="space-y-4">
            {['individual', 'materials', 'club'].map((benefit) => (
              <li key={benefit} className="flex items-start">
                <i className="fas fa-check-circle mt-1 mr-3" style={{ color: colors.primary }}></i>
                <p style={{ color: colors.textLight }}>{t(`programs.benefits.${benefit}`)}</p>
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
          <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.primary }}>
            {t("programs.vision.title")}
          </h3>
          <p style={{ color: colors.textLight }} className="max-w-2xl mx-auto">
            {t("programs.vision.desc")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
