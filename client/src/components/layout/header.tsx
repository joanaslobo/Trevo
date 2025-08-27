import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import CloverIcon from "@/components/ui/clover-icon";
import LanguageSwitcher from "@/components/ui/language-switcher";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import RotatingText from "@/components/ui/rotating-text";
import { useThemeColors } from "@/lib/theme-colors"
import trevo from '@/assets/images/teachers/trevo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();
  const { isRockMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const colors = useThemeColors();
  
  const headerClasses = `fixed w-full bg-opacity-95 shadow-md theme-header transition-all duration-300 z-50`;
  const headerStyle = {
    backgroundColor: colors.cardBg
  };

  return (
    <header className={headerClasses} style={headerStyle}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src={trevo} alt="Trevo Coolectivo Logo" className="w-16 h-16" />
            {/** <CloverIcon white={isRockMode} />*/}
            <div>
              <h1
                className={`font-serif font-bold text-2xl theme-text-primary`}
                style={{ color: colors.secondary }}
              >
                Trevo
              </h1>
              <p
                className={`-mt-1 theme-text-secondary`}
                style={{ color: colors.primary }}
              >
                <span className="inline-block font-handwritten">COOL</span>
                <RotatingText
                  words={[
                    "lectivo",
                      "laboração",
                      "eções",
                      "laborate",
                      "ections",
                  ]}
                  interval={2500}
                  className="inline-block font-handwritten"
                />
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavLink
              href="/"
              label={t("nav.home")}
              currentPath={location}
              onClick={closeMenu}
            />

            <NavLink
              href="/teachers"
              label={t("nav.teachers")}
              currentPath={location}
              onClick={closeMenu}
            />
            <NavLink
              href="/programs"
              label={t("nav.methodology")}
              currentPath={location}
              onClick={closeMenu}
            />

      
            <NavLink
              href="/contact"
              label={t("nav.contact")}
              currentPath={location}
              onClick={closeMenu}
            />
            {/*<NavLink
              href="/events"
              label={t("nav.events")}
              currentPath={location}
              onClick={closeMenu}
            />*/}
          </nav> 

          {/* Language Switcher, Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="/contact"
              className={`px-5 py-2 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
              style={{color: colors.primary, backgroundColor: colors.primaryBtnBg}}
            >
              {t("nav.joinUs")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none`}
            style={{ color: colors.primary }}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed top-0 right-0 h-full w-3/4 theme-bg-gradient shadow-lg z-50 p-6 md:hidden`}
            style={{color: colors.primary}}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2
                  className={`font-serif text-xl font-bold theme-text-primary`}
                  style={{ color: colors.secondary }}
                >
                  Trevo
                </h2>
                <p
                  className={` -mt-1 text-sm theme-text-secondary`}
                  style={{ color: colors.primary }}
                >
                  <span className="inline-block font-handwritten">COOL</span>
                  <RotatingText
                    words={[
                      "lectivo",
                      "laboração",
                      "eções",
                      "laborate",
                      "ections",
                    ]}
                    interval={2500}
                    className="inline-block font-handwritten"
                  />
                </p>
              </div>
              <button
                className={`focus:outline-none`}
                style={{ color: colors.primary }}
                onClick={closeMenu}
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <NavLink
                href="/"
                label={t("nav.home")}
                currentPath={location}
                onClick={closeMenu}
                mobile
              />

              <NavLink
                href="/teachers"
                label={t("nav.teachers")}
                currentPath={location}
                onClick={closeMenu}
                mobile
              />
              <NavLink
                href="/programs"
                label={t("nav.methodology")}
                currentPath={location}
                onClick={closeMenu}
                mobile
              />
              <NavLink
                href="/contact"
                label={t("nav.contact")}
                currentPath={location}
                onClick={closeMenu}
                mobile
              />
              {/*<NavLink
                href="/events"
                label={t("nav.contact")}
                currentPath={location}
                onClick={closeMenu}
                mobile
              />*/}
              <div className="mt-4 flex gap-3 items-center">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>

              <Link
                href="/contact"
                className={`theme-button-primary
                  text-white px-5 py-3 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg text-center mt-4`}
                style={{color: colors.text}}
                onClick={closeMenu}
              >
                {t("nav.joinUs")}
              </Link>
            </nav>

            {/* Decorative elements */}
            <div className="absolute bottom-8 left-6">
              <motion.div
                className={`text-5xl opacity-30 theme-text-secondary`}
                style={{ color: colors.primary }}
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {isRockMode ? "🤘" : "♫"}
              </motion.div>
            </div>
            <div className="absolute top-12 right-8">
              <motion.div
                className={`text-4xl opacity-30`}
                style={{ color: colors.secondary }}
                animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                {isRockMode ? "🔥" : "♪"}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  currentPath: string;
  onClick: () => void;
  mobile?: boolean;
}

const NavLink = ({
  href,
  label,
  currentPath,
  onClick,
  mobile = false,
}: NavLinkProps) => {
  const isActive = currentPath === href;
  const colors = useThemeColors();

  const activeColor = colors.accent;
  const inactiveColor = colors.text;
  const hoverColor = colors.secondary;
  const borderColor = colors.primary;

  // Track hover state
  const [isHovered, setIsHovered] = useState(false);

  const getLinkColor = () => {
    if (isHovered) return hoverColor;
    if (isActive) return activeColor;
    return inactiveColor;
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`nav-link font-medium transition duration-300 ${
        mobile ? "py-2 border-b" : ""
      }`}
      style={{
        color: getLinkColor(),
        borderColor: mobile ? borderColor : undefined,
        textDecoration: "none",
      }}
    >
      {label}
    </Link>
  );
};

export default Header;
