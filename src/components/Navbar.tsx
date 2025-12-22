import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import aipuneLogo from '@/assets/AI_Pune.png';
import gdgLogo from '@/assets/GDG_Cloud_Pune.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    // { name: 'Tracks', href: '#tracks' },
    // { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b-2 border-gray-200'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logos */}
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={gdgLogo}
              alt="Google Developer Group Cloud Pune"
              className="h-8 sm:h-10 w-auto"
            />
            <div className="h-8 w-px bg-gray-300"></div>
            <img
              src={aipuneLogo}
              alt="AI Pune"
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const colors = ['text-blue-600', 'text-red-600', 'text-yellow-600', 'text-green-600'];
              const hoverColors = ['hover:bg-blue-50', 'hover:bg-red-50', 'hover:bg-yellow-50', 'hover:bg-green-50'];
              const colorIndex = index % 4;
              
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 rounded-lg transition-all ${colors[colorIndex]} ${hoverColors[colorIndex]}`}
                >
                  {link.name}
                </button>
              );
            })}
          </div> */}

          {/* Register Button (Desktop) */}
          {/* <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#registration')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg transition-all"
            >
              Register Now
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => {
              const colors = ['text-blue-600', 'text-red-600', 'text-yellow-600', 'text-green-600'];
              const bgColors = ['bg-blue-50', 'bg-red-50', 'bg-yellow-50', 'bg-green-50'];
              const colorIndex = index % 4;
              
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg ${colors[colorIndex]} ${bgColors[colorIndex]} hover:opacity-80 transition-all`}
                >
                  {link.name}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection('#registration')}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg transition-all"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
