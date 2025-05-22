
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-slate-900 border-t border-blue-500/20">
      <div className="container mx-auto px-6">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-600 transition-colors p-2 rounded-full shadow-lg"
        >
          <ArrowUp size={20} className="text-white" />
        </motion.button>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
            >
              Sumanta Kumar Patel
            </motion.div>
            <p className="text-gray-400 mt-2">AI Engineer & Full-Stack Developer</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-gray-400"
          >
            <p>&copy; {currentYear} All Rights Reserved</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
