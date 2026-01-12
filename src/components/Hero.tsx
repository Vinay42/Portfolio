
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding" ref={heroRef}>
      {/* Container with same max-width and padding as header for perfect alignment */}
      <div className="max-w-7xl mx-auto w-full px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Aligned with header logo */}
          <div className="max-w-4xl">
            {/* Ready to Innovate Badge */}
            <div className="inline-flex items-center bg-portfolio-gray border border-portfolio-gray-light rounded-full px-3 md:px-4 py-2 mb-4 md:mb-6 animate-on-scroll">
              <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-3 animate-pulse"></div>
              <span className="text-xs md:text-sm text-portfolio-text">Ready to Innovate</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 animate-on-scroll leading-tight">
              Full Stack<br />
              <span className="text-portfolio-accent">Developer</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-portfolio-text-muted mb-4 md:mb-6 max-w-2xl leading-relaxed animate-on-scroll">
              Hi, I’m Vinay Thakor, a passionate Full Stack Developer focused on building rich, scalable, and responsive web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 animate-on-scroll">
              <button
                onClick={() => {
                  const projectSection = document.getElementById("projects");
                  if (projectSection) {
                    projectSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="portfolio-button inline-flex items-center justify-center group text-sm md:text-base">
                Projects
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              <button className="portfolio-button-outline inline-flex items-center justify-center group text-sm md:text-base">
                <a
                  href="mailto:your-email@example.com"
                  className=" inline-flex items-center justify-center group text-sm md:text-base"
                >
                Contact
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </a>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 animate-on-scroll">
              <a href="https://github.com/Vinay42" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-200 hover:scale-110">
                <Github size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.linkedin.com/in/vinay-thakor-05a2952a5/" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-200 hover:scale-110">
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.instagram.com/_vinaythakor/" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-200 hover:scale-110">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Web Development Vector */}
          <div className="hidden lg:flex justify-center items-center animate-on-scroll">
            <div className="relative">
              <img
                src="/uploads/hero3.png"
                alt="Hero Png"
                className="w-100 h-100 mr-3 transition-transform duration-300 hover:scale-110"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
