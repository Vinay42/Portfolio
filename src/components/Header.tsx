
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close menu when clicking outside or on scroll
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const target = event.target as Element;
//       if (isMenuOpen && !target.closest('nav')) {
//         setIsMenuOpen(false);
//       }
//     };

//     const handleScroll = () => {
//       if (isMenuOpen) {
//         setIsMenuOpen(false);
//       }
//     };

//     if (isMenuOpen) {
//       document.addEventListener('click', handleClickOutside);
//       document.addEventListener('scroll', handleScroll);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//       document.removeEventListener('scroll', handleScroll);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   const navItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'About', href: '#about' },
//     { label: 'Projects', href: '#projects' },
//     { label: 'Skills', href: '#skills' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-portfolio-dark/90 backdrop-blur-md border-b border-portfolio-gray-light' : 'bg-transparent'
//       }`}>
//       <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo - Properly aligned with hero content */}
//           <div className="flex items-center">
//             {/* <img 
//               src="/lovable-uploads/logo.png" 
//               alt="VT Logo" 
//               className="w-8 h-8 mr-3 transition-transform duration-300 hover:scale-110"
//             /> */}
//             <a href="#"> <span className="text-xl font-bold text-portfolio-accent">VINAY THAKOR</span> </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 relative group"
//               >
//                 {item.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//             <a  href="/Resume_.pdf"
//                 download="Vinay_Thakor.pdf"  className="portfolio-button">
//               Resume
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-portfolio-text transition-transform duration-200 hover:scale-110 z-[60] relative"
//             onClick={(e) => {
//               e.stopPropagation();
//               setIsMenuOpen(!isMenuOpen);
//             }}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation - Fixed z-index and positioning */}
//         {isMenuOpen && (
//           <div className="md:hidden  inset-0 top-0 bg-portfolio-dark/98 backdrop-blur-md z-[55]">
//             <div className="flex flex-col items-center justify-center h-full space-y-8">
//               {navItems.map((item, index) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="text-2xl text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 animate-fade-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <a
//                 className="portfolio-button mt-4 animate-fade-in"
//                 href="/Resume_.pdf"
//                 download="Vinay_Resume.pdf"
//                 style={{ animationDelay: '0.5s' }}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Resume
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('scroll', handleScroll);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-portfolio-dark/90 backdrop-blur-md border-b border-portfolio-gray-light' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Properly aligned with hero content */}
            <div className="flex items-center">
              <a href="#" className="z-50 relative">
                <span className="text-xl font-bold text-portfolio-accent">VINAY THAKOR</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a  
               href="/lovable-uploads/Resume_tech.pdf"
                download="Vinay_Thakor.pdf"  
                className="portfolio-button"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-portfolio-text transition-transform duration-200 hover:scale-110 z-50 relative"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full Screen Black Overlay for Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 flex flex-col items-center justify-center">
          {/* Navigation Menu Items */}
          <div className="flex flex-col items-center z-50 justify-center space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl text-white hover:text-portfolio-accent transition-colors duration-200"
                style={{ 
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-200 text-lg mt-4"
              href="/lovable-uploads/Resume_tech.pdf"
              download="Vinay_Thakor.pdf"
              style={{ 
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out 0.5s forwards`
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;