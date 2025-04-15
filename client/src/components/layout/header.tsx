import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import CloverIcon from '@/components/ui/clover-icon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const headerClasses = `fixed w-full ${isScrolled ? 'bg-cream bg-opacity-95 shadow-md' : 'bg-transparent'} transition-all duration-300 z-50`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2">
              <CloverIcon />
              <div>
                <h1 className="font-serif font-bold text-2xl text-[#1a7a3d]">Trevo</h1>
                <p className="font-handwritten text-[#c66b3e] -mt-1">COOLlectivo</p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavLink href="/" label="Home" currentPath={location} onClick={closeMenu} />
            <NavLink href="/about" label="About" currentPath={location} onClick={closeMenu} />
            <NavLink href="/programs" label="Programs" currentPath={location} onClick={closeMenu} />
            <NavLink href="/fees" label="Fees & Schedule" currentPath={location} onClick={closeMenu} />
            <NavLink href="/contact" label="Contact" currentPath={location} onClick={closeMenu} />
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <a className="bg-[#1a7a3d] hover:bg-[#156e35] text-white px-5 py-2 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Join Us
              </a>
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
            className="fixed top-0 right-0 h-full w-3/4 bg-cream shadow-lg z-50 p-6 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-xl font-bold text-[#1a7a3d]">Menu</h2>
              <button className="text-[#333333] focus:outline-none" onClick={closeMenu}>
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <NavLink href="/" label="Home" currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/about" label="About" currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/programs" label="Programs" currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/fees" label="Fees & Schedule" currentPath={location} onClick={closeMenu} mobile />
              <NavLink href="/contact" label="Contact" currentPath={location} onClick={closeMenu} mobile />
              <Link href="/contact">
                <a 
                  className="bg-[#1a7a3d] hover:bg-[#156e35] text-white px-5 py-3 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg text-center mt-4"
                  onClick={closeMenu}
                >
                  Join Us
                </a>
              </Link>
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

const NavLink = ({ href, label, currentPath, onClick, mobile = false }: NavLinkProps) => {
  const isActive = currentPath === href;
  
  return (
    <Link href={href}>
      <a 
        className={`nav-link font-medium hover:text-[#1a7a3d] transition duration-300 ${
          isActive ? 'text-[#1a7a3d]' : 'text-[#333333]'
        } ${mobile ? 'py-2 border-b border-gray-200' : ''}`}
        onClick={onClick}
      >
        {label}
      </a>
    </Link>
  );
};

export default Header;
