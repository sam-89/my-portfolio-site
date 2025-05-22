
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Over a decade of experience in AI/ML and full-stack development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 hidden lg:block" />

                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <Briefcase className="text-blue-400" size={20} />
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
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
