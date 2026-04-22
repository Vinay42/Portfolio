
import React, { useEffect, useRef } from 'react';
import { Code, Smartphone, Server, Database, Wrench, Layers, BookOpen,Brain,Cloud } from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);

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

    const elements = skillsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['C++', 'C', 'JavaScript', 'Java', 'Python']
  },
  {
    title: 'Frontend Development',
    icon: Smartphone,
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      'Node.js',
      'Express.js',
      'Spring Boot',
      'REST APIs',
      'WebSockets (Socket.IO)'
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Pinecone']
  },
  
  {
    title: 'Cloud',
    icon: Cloud,
    skills: [
      'Microsoft Azure',
    ]
  },
   {
    title: 'AI & GenAI',
    icon: Cloud,
    skills: [
      'OpenAI API',
      'Google Gemini',
      'LLM Integration',
      'Prompt Engineering',
      'Context Management'
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'Swagger/OpenAPI',
      'VS Code',
      'Figma'
    ]
  },
  {
    title: 'Core Subjects',
    icon: Layers,
    skills: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'DBMS',
      'OOP',
      'System Design'
    ]
  }
];

  return (
    <section id="skills" className="section-padding bg-portfolio-dark" ref={skillsRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center animate-on-scroll">Skills</h2>
        <p className="text-portfolio-text-muted mb-12 md:mb-16 max-w-3xl mx-auto text-center text-base md:text-lg animate-on-scroll">
          I've worked with a range of technologies in the web development world, from 
          <span className="text-portfolio-accent"> front-end to back-end and everything in between.</span>
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="portfolio-card skill-card animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-accent/20 rounded-lg mb-2 md:mb-0 md:mr-4 flex items-center justify-center group-hover:bg-portfolio-accent/30 transition-all duration-300">
                    <IconComponent className="text-portfolio-accent icon-hover" size={20} />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-white group-hover:text-portfolio-accent transition-colors duration-200 text-center md:text-left">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="bg-portfolio-gray-light border border-portfolio-gray-light text-portfolio-text px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm hover:border-portfolio-accent/50 hover:text-portfolio-accent hover:scale-105 transition-all duration-200 cursor-default"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
