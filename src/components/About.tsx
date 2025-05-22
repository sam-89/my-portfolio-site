
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const About = () => {
  const education = [
    {
      degree: "M.Tech in Data Science and Engineering",
      institution: "BITS Pilani",
      icon: GraduationCap,
    },
    {
      degree: "B.Tech",
      institution: "Delhi College of Engineering",
      icon: GraduationCap,
    },
    {
      degree: "Schooling",
      institution: "JNV Sambalpur (Full Residential)",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 text-gray-300">
              <Calendar size={20} />
              <span>Born: January 1, 1989</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin size={20} />
              <span>Based in India</span>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Full-Stack AI/ML Engineer with over 10 years of experience developing scalable, 
              intelligent systems. My expertise spans machine learning pipelines, full-stack web 
              architecture, and cloud-native solutions. I'm passionate about building systems that 
              learn, adapt, and solve meaningful problems.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Personal Details</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-blue-400">Name:</span> Sumanta Kumar Patel</p>
                <p><span className="text-blue-400">Email:</span> sumantakumar.patel@gmail.com</p>
                <p><span className="text-blue-400">Phone:</span> +91-8800122446</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <edu.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
