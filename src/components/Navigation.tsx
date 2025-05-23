
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Award, FileText, Mail } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionId = section.getAttribute('id') || '';
        const sectionHeight = section.clientHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-blue-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            SP
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ 
                  scale: 1.05,
                  x: 5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-blue-400 bg-blue-500/10 font-medium' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <item.icon size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-medium tracking-wide">{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 bg-slate-800/95 dark:bg-slate-900/95 backdrop-blur-md rounded-lg p-4"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center space-x-3 w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-blue-400 bg-blue-500/10 font-medium' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/30'
                }`}
              >
                <item.icon size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-medium tracking-wide">{item.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
