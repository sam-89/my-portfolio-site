
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Scalable AI Platform",
      description: "End-to-end machine learning platform with automated model deployment and monitoring",
      tech: ["Python", "TensorFlow", "Docker", "Azure", "React"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      details: "A comprehensive AI platform that enables data scientists to build, train, and deploy machine learning models at scale. Features include automated hyperparameter tuning, model versioning, and real-time monitoring dashboards.",
      github: "#",
      demo: "#"
    },
    {
      title: "Deep Learning Model Deployment",
      description: "Containerized deep learning models with REST API interfaces for production use",
      tech: ["PyTorch", "FastAPI", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      details: "Production-ready deployment system for deep learning models with automatic scaling, load balancing, and performance monitoring. Supports both batch and real-time inference.",
      github: "#",
      demo: "#"
    },
    {
      title: "EDA Automation Suite",
      description: "Automated exploratory data analysis tool with interactive visualizations",
      tech: ["Python", "Pandas", "Plotly", "Streamlit"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      details: "Intelligent EDA tool that automatically generates comprehensive data analysis reports including statistical summaries, correlation matrices, and interactive visualizations.",
      github: "#",
      demo: "#"
    },
    {
      title: "Stock Market Intraday AI Agent",
      description: "AI-powered trading agent for intraday stock market analysis and prediction",
      tech: ["Python", "LSTM", "Technical Analysis", "Real-time APIs"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      details: "Advanced AI agent that analyzes market patterns, sentiment data, and technical indicators to provide real-time trading insights and automated decision-making capabilities.",
      github: "#",
      demo: "#"
    },
    {
      title: "Automated Voting System",
      description: "Secure blockchain-based voting system with biometric authentication",
      tech: ["Blockchain", "Biometrics", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      details: "Tamper-proof voting system leveraging blockchain technology and biometric verification to ensure secure, transparent, and verifiable elections.",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions showcasing expertise in AI/ML and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedProject(index)}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-sm rounded-md">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    {projects[selectedProject].details}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={projects[selectedProject].github}
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={projects[selectedProject].demo}
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
