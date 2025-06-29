import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="apple-container">
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-semibold text-white">
                AVishqaar
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering businesses with cutting-edge AI, Machine Learning, and Analytics solutions to drive innovation and growth.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
                <Link to="/#solutions" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Solutions
                </Link>
                <Link to="/#about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
                <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
                <Link to="/careers" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <div className="space-y-2">
                <Link to="/#solutions" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  AI Solutions
                </Link>
                <Link to="/#solutions" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Machine Learning
                </Link>
                <Link to="/#solutions" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Analytics
                </Link>
                <Link to="/#solutions" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Software Development
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-400">contact@avishqaar.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-gray-400">+91 8219973883</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-gray-400">Noida, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AVishqaar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
