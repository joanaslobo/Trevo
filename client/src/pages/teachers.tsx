import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { fadeIn } from "@/lib/animations";
import { useThemeColors } from "@/lib/theme-colors";
// Import teacher images
import franciscoImg from '@/assets/images/teachers/francisco.jpeg';
import lukeImg from '@/assets/images/teachers/luke.jpeg';
import jorgeImg from '@/assets/images/teachers/loura.jpeg';
import euricoImg from '@/assets/images/teachers/eurico.jpg';
import ruiImg from '@/assets/images/teachers/rui.jpg'
import gabrielImg from '@/assets/images/teachers/gabriel.jpg'


const TeachersPage = () => {
  const { t } = useLanguage();
  const colors = useThemeColors();

  const teachers = [
    {
      key: 'francisco',
      image: franciscoImg
    },
    {
      key: 'luke',
      image: lukeImg
    },
    {
      key: 'loura',
      image: jorgeImg
    },
    {
      key: 'eurico',
      image: euricoImg
    },
    {
      key: 'rui',
      image: ruiImg
    },
    {
      key: 'gabriel',
      image: gabrielImg
    },
  ];

  return (
    <div className="min-h-screen py-16 sm:py-20 lg:py-24" style={{ background: colors.bgGradientFrom }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold px-4" style={{ color: colors.primary }}>
            {t("teachers.title")}
          </h2>
          <div className="w-16 sm:w-20 h-1 mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6" style={{ backgroundColor: colors.secondary }}></div>
          <p className="text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ color: colors.text }}>
            {t("teachers.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

                    <div className="w-full h-[600px] overflow-hidden flex justify-center items-center">
                      <img
                        src={teacher.image}
                        alt={t(`teachers.${teacher.key}.name`)}
                        className="object-cover h-full"
                      />
                    </div>

                  </>
                ) : (
                  <>
                    <div className="w-full h-[600px] overflow-hidden center">
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
    </div>
  );
};

export default TeachersPage;