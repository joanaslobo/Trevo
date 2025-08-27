import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { fadeIn } from "@/lib/animations";
import { useThemeColors } from "@/lib/theme-colors";
// Import teacher images
import franciscoImg from '@/assets/images/teachers/francisco.jpeg';
import lukeImg from '@/assets/images/teachers/luke.jpeg';
import jorgeImg from '@/assets/images/teachers/loura.jpeg';
import euricoImg from '@/assets/images/teachers/eurico.jpg';
import ruiImg from '@/assets/images/teachers/rui.jpg';
import gabrielImg from '@/assets/images/teachers/gabriel.jpg';
import joanaImg from '@/assets/images/teachers/joana2.jpg';



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
      key: 'joana',
      image: joanaImg
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
    <div className="container mx-auto px-4 py-12">
      <div className="h-24"></div>
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold" style={{ color: colors.primary }}>
          {t("teachers.title")}
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 mb-6" style={{ backgroundColor: colors.secondary }}></div>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text }}>
          {t("teachers.subtitle")}
        </p>
      </motion.div>
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
            {/* Mobile Layout - Always description first, then photo */}
            <div className="md:hidden">
              <div className="p-6">
                <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: colors.primary }}>
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
              <div className="w-full h-[300px] overflow-hidden flex justify-center items-center px-6 pb-6">
                <img
                  src={teacher.image}
                  alt={t(`teachers.${teacher.key}.name`)}
                  className="object-cover object-top h-full w-full max-w-[250px] rounded-lg"
                />
              </div>
            </div>

            {/* Desktop Layout - Alternating layout preserved */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
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
  );
};

export default TeachersPage;