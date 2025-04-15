import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import CloverIcon from '@/components/ui/clover-icon';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { useLanguage } from '@/lib/language-context';
import RotatingText from '@/components/ui/rotating-text';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const headerClasses = `fixed w-full ${isScrolled ? 'bg-[#F7F3E3] bg-opacity-95 shadow-md' : 'bg-transparent'} transition-all duration-300 z-50`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <CloverIcon />
            <div>
              <h1 className="font-serif font-bold text-2xl text-[#1a7a3d]">Trevo</h1>
              <p className="text-[#c66b3e] -mt-1 italic">
                <span className="inline-block">COOL</span>
                <RotatingText 
                  words={["lectivo", "luke", "louro", "ecoes", "journey", "laborate"]} 
                  interval={2500}
                  className="inline-block"
                />
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavLink href="/" label={t('nav.home')} currentPath={location} onClick={closeMenu} />
            <NavLink href="/about" label={t('nav.about')} currentPath={location} onClick={closeMenu} />
            <NavLink href="/programs" label={t('nav.programs')} currentPath={location} onClick={closeMenu} />
            <NavLink href="/fees" label={t('nav.fees')} currentPath={location} onClick={closeMenu} />
            <NavLink href="/contact" label={t('nav.contact')} currentPath={location} onClick={closeMenu} />
          </nav>

          {/* Language Switcher and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact" className="bg-[#1a7a3d] hover:bg-[#156e35] text-white px-5 py-2 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              {t('nav.joinUs')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#333333] focus:outline-none" 
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
            className="fixed top-0 right-0 h-full w-3/4 bg-gradient-to-b from-[#F7F3E3] to-[#e6f5ec] shadow-lg z-50 p-6 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="font-serif text-xl font-bold text-[#1a7a3d]">Trevo</h2>
                <p className="text-[#c66b3e] -mt-1 text-sm italic">
                  <span className="inline-block">COOL</span>
                  <RotatingText 
                    words={["lectivo", "luke", "louro", "ecoes", "journey", "laborate"]} 
                    interval={2500}
                    className="inline-block"
                  />
                </p>
              </div>
              <button className="text-[#333333] focus:outline-none" onClick={closeMenu}>
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <NavLink href="/" label={t('nav.home')} currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/about" label={t('nav.about')} currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/programs" label={t('nav.programs')} currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/fees" label={t('nav.fees')} currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/contact" label={t('nav.contact')} currentPath={location} onClick={closeMenu} mobile />
              
              <div className="mt-4 mb-4">
                <LanguageSwitcher />
              </div>
              
              <Link 
                href="/contact" 
                className="bg-[#1a7a3d] hover:bg-[#156e35] text-white px-5 py-3 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg text-center mt-2"
                onClick={closeMenu}
              >
                {t('nav.joinUs')}
              </Link>
            </nav>
            
            {/* Decorative elements */}
            <div className="absolute bottom-8 left-6">
              <motion.div 
                className="text-5xl text-[#c66b3e] opacity-30"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                ♫
              </motion.div>
            </div>
            <div className="absolute top-12 right-8">
              <motion.div 
                className="text-4xl text-[#f4b942] opacity-30"
                animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                ♪
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
  
  return (
    <Link 
      href={href}
      className={`nav-link font-medium hover:text-[#1a7a3d] transition duration-300 ${
        isActive ? 'text-[#1a7a3d]' : 'text-[#333333]'
      } ${mobile ? 'py-2 border-b border-gray-200' : ''}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;
