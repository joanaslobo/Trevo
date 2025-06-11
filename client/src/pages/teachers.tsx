import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { fadeIn } from "@/lib/animations";
import { useThemeColors } from "@/lib/theme-colors";

const TeachersPage = () => {
  const { t } = useLanguage();
  const colors = useThemeColors();

  const teachers = [
    {
      key: 'francisco',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      key: 'luke',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      key: 'jorge',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
    },
    {
      key: 'eurico',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face'
    },
    {
      key: 'joao',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="h-24"></div>
      <motion.h1
        className="text-4xl md:text-5xl font-serif text-center mb-12"
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="visible"
      >
        {t("teachers.title")}
      </motion.h1>

      <div className="space-y-8">
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher.key}
            variants={fadeIn((index + 1) * 0.1)}
            initial="hidden"
            animate="visible"
            className="rounded-lg shadow-lg overflow-hidden"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {index % 2 === 0 ? (
                <>
                  <div className="p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-semibold mb-4" style={{ color: colors.primary }}>
                      {t(`teachers.${teacher.key}.name`)}
                    </h2>
                    <p className="mb-3" style={{ color: colors.secondary }}>
                      <strong>{t("teachers.instruments")}:</strong> {t(`teachers.${teacher.key}.instruments`)}
                    </p>
                    <p className="mb-4" style={{ color: colors.text }}>
                      {t(`teachers.${teacher.key}.bio`)}
                    </p>
                    <p className="mb-4" style={{ color: colors.text }}>
                      {t(`teachers.${teacher.key}.bio2`)}
                    </p>
                    <p className="mb-4" style={{ color: colors.text }}>
                      {t(`teachers.${teacher.key}.bio3`)}
                    </p>
                    <p style={{ color: colors.text }}>
                      <strong>{t("teachers.location")}:</strong> {t(`teachers.${teacher.key}.location`)}
                    </p>
                  </div>
                  <div className="w-full h-[400px] overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={t(`teachers.${teacher.key}.name`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full h-[400px] overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={t(`teachers.${teacher.key}.name`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-semibold mb-4" style={{ color: colors.primary }}>
                      {t(`teachers.${teacher.key}.name`)}
                    </h2>
                    <p className="mb-3" style={{ color: colors.secondary }}>
                      <strong>{t("teachers.instruments")}:</strong> {t(`teachers.${teacher.key}.instruments`)}
                    </p>
                    <p className="mb-4" style={{ color: colors.text }}>
                      {t(`teachers.${teacher.key}.bio`)}
                    </p>
                    <p className="mb-4" style={{ color: colors.text }}>
                      {t(`teachers.${teacher.key}.bio2`)}
                    </p>
                    <p className="mb-4" style={{ color: colors.text }}>
                      {t(`teachers.${teacher.key}.bio3`)}
                    </p>
                    <p style={{ color: colors.text }}>
                      <strong>{t("teachers.location")}:</strong> {t(`teachers.${teacher.key}.location`)}
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeachersPage;