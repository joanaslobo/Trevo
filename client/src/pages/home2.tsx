
import { motion } from "framer-motion";
import { Link } from "wouter";
import WaveDivider from "@/components/ui/wave-divider";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/lib/language-context";
import { fadeIn, wiggleAnimation } from "@/lib/animations";
import { useTheme } from "@/lib/theme-context";
import { useThemeColors } from "@/lib/theme-colors";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Home2 = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0 });
  const { t } = useLanguage();
  const { isRockMode } = useTheme();
  const colors = useThemeColors();

  const studioImages = [
    {
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=600&fit=crop",
      alt: "Music studio with guitars"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop",
      alt: "Recording studio"
    },
    {
      src: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1200&h=600&fit=crop",
      alt: "Piano studio"
    },
    {
      src: "https://images.unsplash.com/photo-1520637836862-4d197d17c75a?w=1200&h=600&fit=crop",
      alt: "Drum studio"
    },
    {
      src: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=1200&h=600&fit=crop",
      alt: "Group lesson studio"
    }
  ];

  const cards = [
    {
      icon: "fas fa-guitar",
      titleKey: "about.card.instrument",
      descKey: "about.card.instrument.desc",
      iconColor: colors.primary,
      textColor: colors.secondary,
    },
    {
      icon: "fas fa-people-arrows",
      titleKey: "about.card.sharing",
      descKey: "about.card.sharing.desc",
      iconColor: colors.primary,
      textColor: colors.secondary,
    },
    {
      icon: "fas fa-handshake",
      titleKey: "about.card.collective",
      descKey: "about.card.collective.desc",
      iconColor: colors.primary,
      textColor: colors.secondary,
    },
    {
      icon: "fas fa-brain",
      titleKey: "about.card.creativity",
      descKey: "about.card.creativity.desc",
      iconColor: colors.primary,
      textColor: colors.secondary,
    },
    {
      icon: "fas fa-heart",
      titleKey: "about.card.passion",
      descKey: "about.card.passion.desc",
      iconColor: colors.primary,
      textColor: colors.primaryBtnHover,
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full"
        >
        
          <CarouselContent className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[60vh] xl:h-[60vh]">
            {studioImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left Side Content */}
          <motion.div
            variants={fadeIn(0)}
            initial="hidden"
            animate={inView ? "visible" : "visible"}
            ref={ref}
            className="relative z-10"
          >
            
            
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative text-white drop-shadow-lg"
            >
              {" "}
              {t("home.title")}
            </h1>
            <p
              className="mt-6 text-lg md:text-xl font-medium text-white drop-shadow-md"
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
                className="px-6 py-3 rounded-full font-medium transition duration-300 border-2 bg-white bg-opacity-10 backdrop-blur-sm"
                style={{
                  borderColor: "white",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = colors.exploreBtnBorder;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.color = "white";
                }}
              >
                {t("home.cta.explore")}
              </Link>
            </div>
          </motion.div>

          {/* Right Side Visual - Simplified for overlay */}
          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative flex justify-center items-center"
          >
            <div className="scale-[4] opacity-99">
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
                  className="absolute w-[20px] h-[20px] rounded-full top-0 left-[12.5px] bg-green-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute w-[20px] h-[20px] rounded-full top-[12.5px] left-0 bg-green-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                />
                <motion.div
                  className="absolute w-[20px] h-[20px] rounded-full top-[12.5px] right-0 bg-green-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                />
                <motion.div
                  className="absolute w-[20px] h-[20px] rounded-full bottom-0 left-[12.5px] bg-green-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                />
                <div
                  className="absolute w-[4px] h-[15px] bottom-[-10px] left-[50%] transform translate-x-[-50%] rotate-[10deg] bg-green-800"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fillColor={isRockMode ? "#121212" : "#FFFFFF"} />
      </div>

      {/* About Section */}

      <div className="py-16" style={{ backgroundColor: isRockMode ? "#121212" : "#FFFFFF" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: colors.secondary }}>
                {t("about.fusion.title")}
              </h3>
              <p className="mb-6" style={{ color: colors.text }}>
                {t("about.fusion.p1")}
              </p>
              <p style={{ color: colors.text }}>
                {t("about.fusion.p2")}
              </p>

              <div className="mt-12">
                <p className="mb-6" style={{ color: colors.text }}>
                  {t("about.collective.p1")}
                </p>
                <p style={{ color: colors.text }}>
                  {t("about.collective.p2")}
                </p>
              </div>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 pb-24 [grid-auto-flow:row_dense]">
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
                  <h4 className="text-xl font-medium mb-2" style={{ color: card.textColor }}>
                    {t(card.titleKey)}
                  </h4>
                  <p className="text-m" style={{ color: colors.text }}>
                    {t(card.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
        </div>
      </section>

      
  );
};

export default Home2;
