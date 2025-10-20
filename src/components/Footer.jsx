import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../utils/data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-slate-800 rounded-full text-primary-400 hover:bg-primary-500 hover:text-white transition-all shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>

          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="text-primary-400">{personalInfo.name.split(' ')[0]}</span> {personalInfo.name.split(' ')[1]}
            </h3>
            <p className="text-gray-400">{personalInfo.tagline}</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm border-t border-slate-800 pt-6 w-full">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>© {new Date().getFullYear()} {personalInfo.name}.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;

