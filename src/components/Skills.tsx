
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Laptop, Settings } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
          name: "HTML5/CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI/ML Libraries",
      icon: Brain,
      skills: [
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
        },
        {
          name: "PyTorch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
        },
        {
          name: "scikit-learn",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
        },
        {
          name: "pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        },
        {
          name: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
        },
        {
          name: "OpenCV",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
        }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Frontend",
      icon: Laptop,
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
          name: "RESTful APIs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "DevOps/Tools",
      icon: Cloud,
      skills: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        },
        {
          name: "CI/CD Pipelines",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
        }
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cloud Technologies",
      icon: Cloud,
      skills: [
        {
          name: "Azure Architecture",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          name: "Azure AI/ML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          name: "Cloud Deployment",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        },
        {
          name: "Serverless Functions",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          name: "Managed Services",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
        }
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "AI/ML Specialties",
      icon: Settings,
      skills: [
        {
          name: "Deep Learning",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
        },
        {
          name: "Computer Vision",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
        },
        {
          name: "Time Series",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "EDA",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
        },
        {
          name: "AutoML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        }
      ],
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
                    {typeof skill === 'string' ? (
                      <>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-gray-300">{skill}</span>
                      </>
                    ) : (
                      <>
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-gray-300">{skill.name}</span>
                      </>
                    )}
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
