import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { fadeIn } from "@/lib/animations";
import { useThemeColors } from "@/lib/theme-colors";

const TeachersPage = () => {
  const { t } = useLanguage();
  const colors = useThemeColors();

  const teachers = [
    'luke',
    'joao',
    'francisco',
    'jorge'
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
            key={teacher}
            variants={fadeIn((index + 1) * 0.1)}
            initial="hidden"
            animate="visible"
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {index % 2 === 0 ? (
                <>
                  <div className="p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-semibold mb-4" style={{ color: colors.primary }}>
                      {t(`teachers.${teacher}.name`)}
                    </h2>
                    <p className="mb-3" style={{ color: colors.secondary }}>
                      <strong>{t("teachers.instruments")}:</strong> {t(`teachers.${teacher}.instruments`)}
                    </p>
                    <p className="mb-4" style={{ color: colors.text }}>
                      {t(`teachers.${teacher}.bio`)}
                    </p>
                    <p style={{ color: colors.text }}>
                      <strong>{t("teachers.location")}:</strong> {t(`teachers.${teacher}.location`)}
                    </p>
                  </div>
                  <div className="w-full h-[400px] flex items-center justify-center bg-gray-100">
                    <i className="fas fa-user-music text-9xl opacity-50" style={{ color: colors.primary }}></i>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full h-[400px] flex items-center justify-center bg-gray-100">
                    <i className="fas fa-user-music text-9xl opacity-50" style={{ color: colors.primary }}></i>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-semibold mb-4" style={{ color: colors.primary }}>
                      {t(`teachers.${teacher}.name`)}
                    </h2>
                    <p className="mb-3" style={{ color: colors.secondary }}>
                      <strong>{t("teachers.instruments")}:</strong> {t(`teachers.${teacher}.instruments`)}
                    </p>
                    <p className="mb-4" style={{ color: colors.text }}>
                      {t(`teachers.${teacher}.bio`)}
                    </p>
                    <p style={{ color: colors.text }}>
                      <strong>{t("teachers.location")}:</strong> {t(`teachers.${teacher}.location`)}
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