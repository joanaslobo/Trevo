import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/lib/language-context";
import { useThemeColors } from "@/lib/theme-colors";

const About = () => {
  const { t } = useLanguage();
  const colors = useThemeColors();
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 md:py-24" style={{ backgroundColor: colors.cardBg }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a7a3d]">
            About Trevo
          </h2>
          <div className="w-20 h-1 bg-[#c66b3e] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#c66b3e] mb-6">
              {t("about.fusion.title")}

            </h3>
            <p className="text-[#333333] mb-6">
              {t("about.fusion.p1")}
            </p>
            <p className="text-[#333333]">
              {t("about.fusion.p2")}

            </p>

            <div className="mt-12">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#f4b942] mb-6">
                {t("about.collective.title")}

              </h3>
              <p className="text-[#333333] mb-6">
                {t("about.collective.p1")}

              </p>
              <p className="text-[#333333]">
                {t("about.collective.p2")}          
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-[#e6f5ec] rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-[#1a7a3d] text-3xl mb-4">
                <i className="fas fa-guitar"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#156e35] mb-2">
                {t("about.card.instrument")}
              </h4>
              <p className="text-sm">{t("about.card.instrument.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-[#f2dcd3] rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-[#c66b3e] text-3xl mb-4">
                <i className="fas fa-people-arrows"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#b35c35] mb-2">
                {t("about.card.sharing")}
              </h4>
              <p className="text-sm">{t("about.card.sharing.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-[#fcf4d3] rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-[#f4b942] text-3xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#e79c0d] mb-2">
                {t("about.card.collective")}
              </h4>
              <p className="text-sm">{t("about.card.collective.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-[#d8eafd] rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-[#4a90e2] text-3xl mb-4">
                <i className="fas fa-brain"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#357ab8] mb-2">
                {t("about.card.creativity")}
              </h4>
              <p className="text-sm">{t("about.card.creativity.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-[#fbe3e8] rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-[#e03e6f] text-3xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#c92f5d] mb-2">
                {t("about.card.passion")}
              </h4>
              <p className="text-sm">{t("about.card.passion.desc")}</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
