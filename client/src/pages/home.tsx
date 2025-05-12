import { motion } from "framer-motion";
import { Link } from "wouter";
import WaveDivider from "@/components/ui/wave-divider";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/lib/language-context";
import { fadeIn, slideFromLeft, wiggleAnimation } from "@/lib/animations";
import { useTheme } from "@/lib/theme-context";
import { useThemeColors } from "@/lib/theme-colors";
const Home = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();
  const { isRockMode } = useTheme();

  // Use the centralized theme colors
  const colors = useThemeColors();

  const cards = [
    {
      icon: "fas fa-guitar",
      titleKey: "about.card.instrument",
      descKey: "about.card.instrument.desc",
      iconColor: colors.primary,
      textColor: colors.primaryBtnHover,
    },
    {
      icon: "fas fa-people-arrows",
      titleKey: "about.card.sharing",
      descKey: "about.card.sharing.desc",
      iconColor: colors.secondary,
      textColor: colors.secondaryBtnHover,
    },
    {
      icon: "fas fa-handshake",
      titleKey: "about.card.collective",
      descKey: "about.card.collective.desc",
      iconColor: colors.accent,
      textColor: colors.accentBtnHover,
    },
    {
      icon: "fas fa-brain",
      titleKey: "about.card.creativity",
      descKey: "about.card.creativity.desc",
      iconColor: colors.accent,
      textColor: colors.accentBtnHover,
    },
    {
      icon: "fas fa-heart",
      titleKey: "about.card.passion",
      descKey: "about.card.passion.desc",
      iconColor: colors.secondary,
      textColor: colors.secondaryBtnHover,
    },

  ];
  return (
    <section
      id="home"
      className="relative pt-24 pb-20 md:pt-32 md:pb-40 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${colors.bgGradientFrom}, ${colors.bgGradientTo})`,
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {["-top-5 -rotate-6", "bottom-20 rotate-6"].map((position, index) => (
          <div
            key={index}
            className={`absolute w-full ${position} left-0 transform`}
          >
            <div className="h-40 w-full flex">
              {[...Array(20)].map((_, i) => {
                const mod = i % 3;
                const backgroundColor =
                  mod === 0
                    ? colors.primary
                    : mod === 1
                      ? colors.secondary
                      : colors.accent;
                return (
                  <div
                    key={i}
                    className="h-full w-48 flex-shrink-0"
                    style={{ backgroundColor }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <motion.div
            variants={fadeIn(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
            className="relative z-10"
          >
            <motion.div
              className="absolute -top-12 -left-8 text-8xl opacity-20 rotate-12 font-handwritten"
              style={{ color: colors.accent }}
              animate={{ rotate: [12, 15, 12], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              Peace
            </motion.div>
            <motion.div
              className="absolute top-20 -right-10 text-7xl opacity-20 -rotate-6 font-handwritten"
              style={{ color: colors.secondary }}
              animate={{ rotate: [-6, -8, -6], scale: [1, 1.05, 1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              Groove
            </motion.div>

            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative`}
              style={{ color: colors.primary }}
            >
              <span style={{ color: colors.secondary }}>&ndash;</span>{" "}
              {t("home.title")}
            </h1>
            <p
              className="mt-6 text-lg md:text-xl font-medium"
              style={{ color: colors.text }}
            >
              {t("home.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="text-white px-8 py-3 rounded-full font-bold transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center group"
                style={{
                  backgroundColor: colors.contactBtnBg,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    colors.contactBtnHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.contactBtnBg)
                }
              >
                {t("home.cta.join")}
                <motion.i
                  className="fas fa-arrow-right ml-2"
                  variants={wiggleAnimation}
                  initial="stop"
                  whileHover="wiggle"
                ></motion.i>
              </Link>

              <Link
                href="/programs"
                className="px-6 py-3 rounded-full font-medium transition duration-300 border-2"
                style={{
                  borderColor: colors.exploreBtnBorder,
                  color: colors.exploreBtnBorder,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    colors.exploreBtnBorder;
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = colors.exploreBtnBorder;
                }}
              >
                {t("home.cta.explore")}
              </Link>
            </div>
          </motion.div>

          {/* Right Side Visual */}
          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div
              className="relative h-80 md:h-96 rounded-full overflow-hidden border-4 shadow-xl"
              style={{
                backgroundColor: colors.bgGradientFrom,
                borderColor: colors.primary,
              }}
            >
              {/* Background color swirls */}
              <motion.div
                className="absolute -top-10 -left-10 w-60 h-60 rounded-full"
                style={{ backgroundColor: colors.swirlBg1 }}
                animate={{ scale: [1, 1.2, 1], x: [0, 10, 0], y: [0, 10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-40 -right-20 w-80 h-80 rounded-full"
                style={{ backgroundColor: colors.swirlBg2 }}
                animate={{ scale: [1, 1.1, 1], x: [0, -10, 0], y: [0, 15, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Floating musical symbols */}
              <motion.div
                className="absolute top-10 left-12 text-6xl "
                style={{ color: colors.musicNote1 }}
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                🤟
              </motion.div>
              <motion.div
                className="absolute top-1/3 right-10 text-7xl "
                style={{ color: colors.musicNote2 }}
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                ♫
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-16 text-6xl"
                style={{ color: colors.musicNote3 }}
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              >
                ♩
              </motion.div>

              {/* Shamrock in the center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="scale-[3]">
                  <motion.div
                    className="relative inline-block w-[45px] h-[45px]"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className="absolute w-[20px] h-[20px] rounded-full top-0 left-[12.5px]"
                      style={{ backgroundColor: colors.shamrock }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute w-[20px] h-[20px] rounded-full top-[12.5px] left-0"
                      style={{ backgroundColor: colors.shamrock }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                    />
                    <motion.div
                      className="absolute w-[20px] h-[20px]  rounded-full top-[12.5px] right-0"
                      style={{ backgroundColor: colors.shamrock }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4,
                      }}
                    />
                    <motion.div
                      className="absolute w-[20px] h-[20px] rounded-full bottom-0 left-[12.5px]"
                      style={{ backgroundColor: colors.shamrock }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6,
                      }}
                    />
                    <div
                      className="absolute w-[4px] h-[15px]  bottom-[-10px] left-[50%] transform translate-x-[-50%] rotate-[10deg]"
                      style={{ backgroundColor: colors.shamrock }}
                    />
                  </motion.div>
                </div>
              </div>
              {/* Peace symbol */}
              <motion.div
                className="absolute -bottom-4 right-4 w-16 h-16 opacity-60"
                style={{ color: colors.peaceSymbol }}
                animate={{ rotate: [0, 10, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 2V22M12 12L4 6M12 12L20 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fillColor={isRockMode ? "#121212" : "#FFFFFF"} />
      </div>

      <div className="h-32"></div>
      {/* About Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >

          <div
            className="w-20 h-1 mx-auto mt-4"
            style={{ backgroundColor: colors.secondary }}
          ></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="font-serif text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: colors.secondary }}
            >
              {t("about.fusion.title")}
            </h3>
            <p className="mb-6" style={{ color: colors.text }}>
              {t("about.fusion.p1")}
            </p>
            <p style={{ color: colors.text }}>{t("about.fusion.p2")}</p>

            <div className="mt-12">
              <h3
                className="font-serif text-2xl md:text-3xl font-semibold mb-6"
                style={{ color: colors.accent }}
              >
                {t("about.collective.title")}
              </h3>
              <p className="mb-6" style={{ color: colors.text }}>
                {t("about.collective.p1")}
              </p>
              <p style={{ color: colors.text }}>{t("about.collective.p2")}</p>
            </div>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
              {cards.map((card, index) => (
                <motion.div
                  key={card.titleKey}
                  className="rounded-xl p-6 shadow-md"
                  style={{ backgroundColor: colors.bgGradientFrom }}
                  initial={{ opacity: 0, rotate: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ rotate: 2 }}
                >
                  <div className="text-3xl mb-4" style={{ color: card.iconColor }}>
                    <i className={card.icon}></i>
                  </div>
                  <h4 className="font-serif text-xl font-medium mb-2" style={{ color: card.textColor }}>
                    {t(card.titleKey)}
                  </h4>
                  <p className="text-sm" style={{ color: colors.textLight }}>
                    {t(card.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>

        </div>
      </div>
    </section>
  );
};
export default Home;
