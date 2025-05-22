
import { motion } from 'framer-motion';
import { Download, FileText, FileCheck } from 'lucide-react';

export const Resume = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download my resume for a comprehensive overview of my skills and experience
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 max-w-3xl w-full"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-500/20 p-4 rounded-lg">
                  <FileText className="text-indigo-400" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Sumanta Kumar Patel - Resume</h3>
                  <p className="text-gray-400">PDF - 2.4 MB - Last Updated: May 2023</p>
                </div>
              </div>
              
              <motion.a
                href="#"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-lg text-white shadow-lg shadow-indigo-500/25 transition-colors"
              >
                <Download size={20} />
                <span>Download</span>
              </motion.a>
            </div>
            
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-medium text-white">Resume Highlights:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Professional Experience", 
                  "Education Background",
                  "Technical Skills", 
                  "Certifications",
                  "Project Highlights", 
                  "Publications & Research"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <FileCheck className="text-green-400" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
