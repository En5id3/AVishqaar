import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 apple-nav">
      <div className="apple-container">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold text-gray-900">
            AVishqaar
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <Link 
              to="/blog" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            <Link 
              to="/careers" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Careers
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="apple-button" onClick={scrollToContact}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('solutions');
                  setIsMenuOpen(false);
                }}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium w-full text-left"
              >
                Solutions
              </button>
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsMenuOpen(false);
                }}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium w-full text-left"
              >
                About
              </button>
              <Link 
                to="/blog" 
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/careers" 
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium w-full text-left"
              >
                Contact
              </button>
              <div className="pt-4">
                <Button className="apple-button w-full" onClick={scrollToContact}>
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
