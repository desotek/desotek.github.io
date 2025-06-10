
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const openSchedulingLink = () => {
    window.open('https://tidycal.com/desotek/30-minute-discovery-meeting', '_blank');
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-brand-purple">
              Desotek Advisory
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('framework')}
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              Framework
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block" onClick={openSchedulingLink}>
            <Button className="btn-orange">
              📞 Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-purple"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-purple"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('framework')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-purple"
              >
                Framework
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-purple"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-purple"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-purple"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button className="btn-orange w-full">
                  📞 Book a Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
