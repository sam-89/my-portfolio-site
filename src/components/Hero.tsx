import { motion } from 'framer-motion';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ResumeDownloadModal } from './ResumeDownloadModal';
import { sendDownloaderInfo } from '../lib/emailService';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = async (data: any) => {
    // Send email notification
    await sendDownloaderInfo(data);
    
    // Download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sumanta_Kumar_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 } 
              }}
            >
              AI Engineer by Mind
            </motion.span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 } 
              }}
            >
              Technologist by Passion
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Full-Stack AI/ML Engineer crafting intelligent systems that learn, adapt, and solve meaningful problems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/25 flex items-center space-x-2"
            >
              <span>View Projects</span>
              <ExternalLink size={20} />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                borderColor: "rgb(168, 85, 247)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 border-2 border-purple-500 hover:bg-purple-500/10 rounded-lg font-semibold text-white flex items-center space-x-2"
            >
              <span>Download Resume</span>
              <Download size={20} />
            </motion.button>
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center space-y-2"
              onClick={scrollToAbout}
            >
              <span className="text-sm text-gray-400 font-light">Scroll Down</span>
              <ChevronDown size={24} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ResumeDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownload={handleDownload}
      />
    </section>
  );
};
