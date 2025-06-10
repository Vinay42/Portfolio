
import React, { useState } from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'AI Dev Assistant - Intelligent Coding Companion',
      description: 'A modern, AI-powered development platform that provides intelligent coding assistance, code analysis, and the latest tech articles.',
      image: '/lovable-uploads/project1.png',
      tags: ['React.js', 'TypeScript', 'TailwindCSS'],
      category: 'Web Scraping',
      github: 'https://github.com/Vinay42/AI-Dev-Assistant',
      demo: 'https://ai-dev-assistant-wine.vercel.app/'
    },
    {
      id: 2,
      title: 'PostHive - Social Media Platform',
      description: 'PostHive is a social media platform for sharing and discovering image-based content, designed with a focus on user experience, performance, security, and easy content management.',
      image: '/lovable-uploads/project2.png',
      tags: ['React.js', 'TailwindCSS','Node Js', 'MongoDB', 'JWT'],
      category: 'Web Scraping',
      github: 'https://github.com/Vinay42/PostHive',
      demo: 'https://post-hive-lu8b.vercel.app/'
    },
    {
      id: 3,
      title: 'TechGadget - Modern E-Commerce Frontend',
      description: 'TechGadget is a modern e-commerce platform for tech, offering smooth shopping, secure checkout, and personalized user features, along with business tools and tech updates.',image: '/lovable-uploads/project3.png',
      tags: ['React.js', 'TailwindCSS', 'Framer Motion '],
      category: 'Web Scraping',
      github: 'https://github.com/Vinay42/TechGadget',
      demo: 'https://tech-gadget-kohl.vercel.app/'
    }
  ];

  const categories = ['All', 'Web Scraping', 'Full Stack', 'Mobile App'];


  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
        <p className="text-portfolio-text-muted mb-12 max-w-2xl">
          Here are some of the projects I've worked on, showcasing my work across
          various technologies and problem domains.
        </p>

        {/* Filter Tabs */}
        {/* <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-portfolio-accent text-portfolio-dark'
                  : 'bg-portfolio-gray text-portfolio-text hover:bg-portfolio-gray-light'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card group cursor-pointer overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-portfolio-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                      className="p-3 bg-portfolio-accent rounded-full text-portfolio-dark hover:scale-110 transition-transform duration-200"
                    >
                      <Github size={20} />
                    </a>
                    <a  
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.demo}
                      className="p-3 bg-white rounded-full text-portfolio-dark hover:scale-110 transition-transform duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-portfolio-accent transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-portfolio-text-muted mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-portfolio-gray-light text-portfolio-accent text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {/* <div className="text-center">
            <button className="portfolio-button-outline">
              Show More Projects ↗
            </button>
          </div> */}
      </div>
    </section>
  );
};

export default Projects;
