import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import CloverIcon from "@/components/ui/clover-icon";
import LanguageSwitcher from "@/components/ui/language-switcher";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import RotatingText from "@/components/ui/rotating-text";
import { useThemeColors } from "@/lib/theme-colors";

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

  const navigationItems = [
    { href: "/", label: t("nav.home") },
    { href: "/teachers", label: t("nav.teachers") },
    { href: "/programs", label: t("nav.methodology") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 theme-header border-b"
      style={{
        backgroundColor: `${colors.bgGradientFrom}${isScrolled ? "CC" : ""}`,
        borderColor: isScrolled ? colors.primary : "transparent",
      }}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <CloverIcon className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
            <div className="hidden xs:block">
              <div
                className="text-lg sm:text-xl font-bold"
                style={{ color: colors.primary }}
              >
                <RotatingText words={["Trevo", "Coolectivo"]} interval={3000} />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                currentPath={location}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>

          {/* Right Side - Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-1.5 sm:p-2 rounded-md transition-colors"
              style={{ color: colors.primary }}
              aria-label="Toggle menu"
            >
              <i
                className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-lg sm:text-xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 shadow-lg"
            style={{ backgroundColor: colors.bgGradientFrom }}
          >
            <nav className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  currentPath={location}
                  onClick={() => setIsOpen(false)}
                  mobile={true}
                />
              ))}
              <div className="flex items-center justify-center space-x-4 sm:space-x-6 pt-3 sm:pt-4 border-t">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </nav>
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