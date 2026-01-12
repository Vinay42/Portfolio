
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-darker border-t border-portfolio-gray-light py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold text-portfolio-accent mb-2">VINAY THAKOR</div>
            <p className="text-portfolio-text-muted text-sm">
              © 2026 Vinay Thakor. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#home" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">
              About
            </a>
            <a href="#projects" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">
              Projects
            </a>
            <a href="#skills" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">
              Skills
            </a>
            <a href="#contact" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
