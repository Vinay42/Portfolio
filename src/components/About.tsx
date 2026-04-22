
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, FileText  } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-portfolio-darker" ref={aboutRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16 text-center animate-on-scroll">About Me</h2>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Profile Section - Mobile */}
          <div className="flex justify-center mb-8 animate-on-scroll">
            <div className="w-40 h-40 bg-portfolio-accent/20 rounded-full flex items-center justify-center border-2 border-portfolio-accent hover:scale-110 transition-transform duration-300">
              {/* <span className="text-2xl font-bold text-portfolio-accent">VT</span> */}

              <img
                    src="/uploads/photo.jpeg"
                    alt="Hero"
                    className="h-full w-full object-cover rounded-full"
                  />
            </div>

          </div>

          {/* Bio Section - Mobile */}
          <div className="mb-8">
            <div className="flex items-center mb-4 animate-on-scroll">
              <div className="w-6 h-6 bg-portfolio-accent/20 rounded mr-4 flex items-center justify-center">
                {/* <span className="text-portfolio-dark text-sm font-bold">📄</span> */}
                <FileText className="text-portfolio-accent" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Bio</h3>
            </div>

            <p className="text-portfolio-text leading-relaxed text-base animate-on-scroll">
              Full-stack developer with a passion for crafting innovative and efficient web solutions. 
              Specializing in building responsive, user-focused applications by combining strong problem-solving skills with modern design and development practices.
            </p>
          </div>

          {/* Experience Cards - Mobile (Side by Side) */}
          <div className="grid grid-cols-2 gap-3">
            <div className="portfolio-card animate-on-scroll skill-card">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-portfolio-accent/20 rounded-lg mb-3 flex items-center justify-center">
                  <GraduationCap className="text-portfolio-accent" size={20} />
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm">Education</h4>
                <p className="text-portfolio-accent text-xs font-medium mb-1">B.Tech in ECE</p>
                <p className="text-portfolio-text-muted text-xs">Mnit Jaipur</p>
                <p className="text-portfolio-text-muted text-xs">2022 - Present</p>
              </div>
            </div>

            <div className="portfolio-card animate-on-scroll skill-card">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-portfolio-accent/20 rounded-lg mb-3 flex items-center justify-center">
                  <Briefcase className="text-portfolio-accent" size={20} />
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm">Experience</h4>
                <p className="text-portfolio-accent text-xs font-medium mb-1">Full Stack Developer Intern</p>
                <p className="text-portfolio-text-muted text-xs">Lalita Automation Private Limited</p>
                <p className="text-portfolio-text-muted text-xs">Feb 2026 - Mar 2026</p>
              </div>
            </div> 
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12 items-start">
          {/* Bio Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center mb-6 animate-on-scroll">
              <div className="w-8 h-8 bg-portfolio-accent/20 rounded-sm mr-4 flex items-center justify-center">
                <FileText className="text-portfolio-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white">Bio</h3>
            </div>

            <p className="text-portfolio-text leading-relaxed text-lg animate-on-scroll">
              Full-stack developer with a passion for crafting innovative and efficient web solutions. 
              Specializing in building responsive, user-focused applications by combining strong problem-solving skills with modern design and development practices.
            </p>

            {/* Experience Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="portfolio-card animate-on-scroll skill-card">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-portfolio-accent/20 rounded-lg mr-4 flex items-center justify-center">
                    <GraduationCap className="text-portfolio-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">Education</h4>
                    <p className="text-portfolio-accent text-sm font-medium">B.Tech in ECE</p>
                    <p className="text-portfolio-text-muted text-sm mt-2">
                      Mnit Jaipur (Malaviya National Institute of Technology)
                    </p>
                    <p className="text-portfolio-text-muted text-sm">2022 - Present</p>
                  </div>
                </div>
              </div>

              <div className="portfolio-card animate-on-scroll skill-card">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-portfolio-accent/20 rounded-lg mr-4 flex items-center justify-center">
                    <Briefcase className="text-portfolio-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">Experience</h4>
                    <p className="text-portfolio-accent text-sm font-medium">Full Stack Developer Intern</p>
                    <p className="text-portfolio-text-muted text-sm mt-2">
                       Lalita Automation Private Limited 
                    </p>
                    <p className="text-portfolio-text-muted text-sm">Feb 2026 - Mar 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex justify-center lg:justify-end animate-on-scroll">
            <div className="relative">
              <div className="text-center">
                <div style={{ height: '17rem', width: '17rem' }} className=" bg-portfolio-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-portfolio-accent hover:scale-110 transition-transform duration-300">
                  {/* <span className="text-4xl font-bold text-portfolio-accent">VT</span> */}
                  <img
                    src="/uploads/photo.jpeg"
                    alt="Hero"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Vinay Thakor</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-portfolio-accent/20 border border-portfolio-accent/30 text-portfolio-accent text-xs px-3 py-1 rounded-full hover:scale-105 transition-transform duration-200">React</span>
                  <span className="bg-portfolio-accent/20 border border-portfolio-accent/30 text-portfolio-accent text-xs px-3 py-1 rounded-full hover:scale-105 transition-transform duration-200">Node</span>
                  <span className="bg-portfolio-accent/20 border border-portfolio-accent/30 text-portfolio-accent text-xs px-3 py-1 rounded-full hover:scale-105 transition-transform duration-200">Spring Boot</span>
                  <span className="bg-portfolio-accent/20 border border-portfolio-accent/30 text-portfolio-accent text-xs px-3 py-1 rounded-full hover:scale-105 transition-transform duration-200">Full Stack</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
