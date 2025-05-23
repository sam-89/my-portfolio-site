import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Senior AI/ML Engineer",
      company: "Tech Innovation Corp",
      period: "2022 - Present",
      location: "Remote",
      description: "Leading AI/ML initiatives, developing scalable machine learning pipelines, and mentoring junior engineers in deep learning technologies.",
      technologies: ["Python", "TensorFlow", "Azure ML", "Docker", "Kubernetes"],
      achievements: [
        "Improved model accuracy by 35% through advanced feature engineering",
        "Reduced inference time by 60% with optimized deployment strategies",
        "Led a team of 5 engineers in delivering enterprise AI solutions"
      ]
    },
    {
      title: "Full Stack Developer & Data Scientist",
      company: "Optum (UnitedHealth Group)",
      period: "2018 - 2022",
      location: "Gurgaon, India",
      description: "Developed end-to-end healthcare analytics solutions, built predictive models for patient outcomes, and created interactive dashboards.",
      technologies: ["Python", "React", "Django", "PostgreSQL", "AWS"],
      achievements: [
        "Built predictive models improving patient care efficiency by 25%",
        "Developed real-time analytics dashboard used by 500+ healthcare professionals",
        "Received Transformation Champion award for innovative solutions"
      ]
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Ltd",
      period: "2015 - 2018",
      location: "Bangalore, India",
      description: "Developed web applications, implemented data processing pipelines, and contributed to machine learning research projects.",
      technologies: ["Java", "JavaScript", "Python", "MySQL", "Hadoop"],
      achievements: [
        "Optimized data processing pipelines reducing execution time by 40%",
        "Contributed to 3 published research papers in ML conferences",
        "Mentored 10+ junior developers in best coding practices"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2014 - 2015",
      location: "Delhi, India",
      description: "Started career developing web applications and learning machine learning fundamentals in a fast-paced startup environment.",
      technologies: ["PHP", "JavaScript", "MySQL", "Python"],
      achievements: [
        "Developed MVP for 2 successful product launches",
        "Reduced application load time by 50% through optimization",
        "Quickly adapted to new technologies and frameworks"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            scale: {
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent"
          >
            Professional Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.4,
              duration: 0.6,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Over a decade of experience in AI/ML and full-stack development
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col lg:flex-row items-start lg:items-center"
              >
                {/* Timeline dot and connector */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: index * 0.2 + 0.3,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="absolute left-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 hidden lg:block"
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ 
                    delay: index * 0.2 + 0.4,
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  viewport={{ once: true }}
                  className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"
                />

                {/* Date badge */}
                <div className="lg:w-1/4 mb-4 lg:mb-0 lg:pr-8">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20"
                  >
                    <p className="text-blue-400 font-medium text-center">{exp.period}</p>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="lg:w-3/4">
                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="bg-blue-500/20 p-2 rounded-lg"
                      >
                        <Briefcase className="text-blue-400" size={20} />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 text-gray-400 text-sm mb-4"
                    >
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.7 }}
                      viewport={{ once: true }}
                      className="text-gray-300 mb-4"
                    >
                      {exp.description}
                    </motion.p>

                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: index * 0.2 + 0.8 + achIndex * 0.1,
                              duration: 0.5
                            }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-sm flex items-start space-x-2"
                          >
                            <motion.div
                              whileHover={{ scale: 1.5 }}
                              className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                            />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(139, 92, 246, 0.3)"
                          }}
                          transition={{ 
                            delay: index * 0.2 + 1 + techIndex * 0.1,
                            duration: 0.3
                          }}
                          viewport={{ once: true }}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
