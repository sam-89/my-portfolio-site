
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Laptop, Settings } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI/ML Libraries",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "pandas", "NumPy", "OpenCV"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Frontend",
      icon: Laptop,
      skills: ["React", "Next.js", "Redux"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Django", "Node.js", "RESTful APIs"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Azure Architecture", "Azure AI/ML", "Docker", "Git", "Linux"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI/ML Specialties",
      icon: Settings,
      skills: ["Deep Learning", "Computer Vision", "Time Series", "EDA", "AutoML"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
