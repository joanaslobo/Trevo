import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import CloverIcon from '@/components/ui/clover-icon';
import LanguageSwitcher from '@/components/ui/language-switcher';
import ThemeToggle from '@/components/ui/theme-toggle';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import RotatingText from '@/components/ui/rotating-text';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Theme-aware header background
  const headerBgColor = isRockMode 
    ? isScrolled ? 'bg-[#1a1a1a] bg-opacity-95 shadow-md' : 'bg-[#1a1a1a] bg-opacity-95 shadow-md' 
    : isScrolled ? 'bg-[#F7F3E3] bg-opacity-95 shadow-md' : 'bg-[#F7F3E3] bg-opacity-95 shadow-md';
  
  const headerClasses = `fixed w-full ${headerBgColor} theme-header transition-all duration-300 z-50`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <CloverIcon white={isRockMode} />
            <div>
              <h1 className={`font-serif font-bold text-2xl ${isRockMode ? 'text-white' : 'text-[#1a7a3d]'} theme-text-primary`}>Trevo</h1>
              <p className={`${isRockMode ? 'text-[#ff5722]' : 'text-[#c66b3e]'} -mt-1 theme-text-secondary`}>
                <span className="inline-block font-handwritten">COOL</span>
                <RotatingText 
                  words={["lectivo", "luke", "louro", "ecoes", "journey", "laborate"]} 
                  interval={2500}
                  className="inline-block font-handwritten"
                />
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavLink href="/" label={t('nav.home')} currentPath={location} onClick={closeMenu} />
            <NavLink href="/about" label={t('nav.about')} currentPath={location} onClick={closeMenu} />
            <NavLink href="/teachers" label={t('nav.teachers')} currentPath={location} onClick={closeMenu} />
            <NavLink href="/programs" label={t('nav.programs')} currentPath={location} onClick={closeMenu} />
            <NavLink href="/fees" label={t('nav.fees')} currentPath={location} onClick={closeMenu} />
            <NavLink href="/contact" label={t('nav.contact')} currentPath={location} onClick={closeMenu} />
          </nav>

          {/* Language Switcher, Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link 
              href="/contact" 
              className={`theme-button-primary ${isRockMode 
                ? 'bg-[#ff5722] hover:bg-[#ff4500]' 
                : 'bg-[#1a7a3d] hover:bg-[#156e35]'} 
                text-white px-5 py-2 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
            >
              {t('nav.joinUs')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isRockMode ? 'text-white' : 'text-[#333333]'} focus:outline-none`} 
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
            className={`fixed top-0 right-0 h-full w-3/4 theme-bg-gradient shadow-lg z-50 p-6 md:hidden ${
              isRockMode 
                ? 'bg-gradient-to-b from-[#1a1a1a] to-[#2d1a36]' 
                : 'bg-gradient-to-b from-[#F7F3E3] to-[#e6f5ec]'
            }`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className={`font-serif text-xl font-bold ${isRockMode ? 'text-white' : 'text-[#1a7a3d]'} theme-text-primary`}>Trevo</h2>
                <p className={`${isRockMode ? 'text-[#ff5722]' : 'text-[#c66b3e]'} -mt-1 text-sm theme-text-secondary`}>
                  <span className="inline-block font-handwritten">COOL</span>
                  <RotatingText 
                    words={["lectivo", "luke", "louro", "ecoes", "journey", "laborate"]} 
                    interval={2500}
                    className="inline-block font-handwritten"
                  />
                </p>
              </div>
              <button className={`${isRockMode ? 'text-white' : 'text-[#333333]'} focus:outline-none`} onClick={closeMenu}>
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <NavLink href="/" label={t('nav.home')} currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/about" label={t('nav.about')} currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/programs" label={t('nav.programs')} currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/fees" label={t('nav.fees')} currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/contact" label={t('nav.contact')} currentPath={location} onClick={closeMenu} mobile />
              
              <div className="mt-4 flex gap-3 items-center">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              
              <Link 
                href="/contact" 
                className={`theme-button-primary ${isRockMode 
                  ? 'bg-[#ff5722] hover:bg-[#ff4500]' 
                  : 'bg-[#1a7a3d] hover:bg-[#156e35]'} 
                  text-white px-5 py-3 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg text-center mt-4`}
                onClick={closeMenu}
              >
                {t('nav.joinUs')}
              </Link>
            </nav>
            
            {/* Decorative elements */}
            <div className="absolute bottom-8 left-6">
              <motion.div 
                className={`text-5xl ${isRockMode ? 'text-[#ff5722]' : 'text-[#c66b3e]'} opacity-30 theme-text-secondary`}
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {isRockMode ? '🤘' : '♫'}
              </motion.div>
            </div>
            <div className="absolute top-12 right-8">
              <motion.div 
                className={`text-4xl ${isRockMode ? 'text-[#9c27b0]' : 'text-[#f4b942]'} opacity-30`}
                animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                {isRockMode ? '🔥' : '♪'}
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

const NavLink = ({ href, label, currentPath, onClick, mobile = false }: NavLinkProps) => {
  const isActive = currentPath === href;
  const { isRockMode } = useTheme();
  
  // Theme-based active and inactive colors
  const activeColor = isRockMode ? 'text-[#ff5722]' : 'text-[#1a7a3d]';
  const inactiveColor = isRockMode ? 'text-white' : 'text-[#333333]';
  const hoverColor = isRockMode ? 'hover:text-[#ff5722]' : 'hover:text-[#1a7a3d]';
  const borderColor = isRockMode ? 'border-[#333]' : 'border-gray-200';
  
  return (
    <Link 
      href={href}
      className={`nav-link font-medium ${hoverColor} transition duration-300 ${
        isActive ? activeColor : inactiveColor
      } ${mobile ? `py-2 border-b ${borderColor}` : ''}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;
