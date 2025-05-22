
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: "Transformation Champion",
      organization: "Optum",
      period: "Q3 2019",
      description: "Recognized for innovative AI solutions that transformed healthcare analytics workflows",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Amethyst Award - Best Idea",
      organization: "Optum",
      period: "2019",
      description: "Awarded for proposing and implementing breakthrough machine learning algorithms",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Sapphire Award - Team Collaboration",
      organization: "Optum",
      period: "2020",
      description: "Recognized for exceptional leadership in cross-functional AI/ML projects",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Aquamarine Award - Best Performance",
      organization: "Optum",
      period: "2020",
      description: "Outstanding performance in delivering high-impact machine learning solutions",
      icon: Award,
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Ruby Award - Tech Expertise",
      organization: "Optum",
      period: "2020",
      description: "Excellence in technical innovation and deep learning implementation",
      icon: Trophy,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for excellence in AI/ML innovation and technical leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                  <achievement.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                
                <div className="text-sm text-gray-400 mb-3">
                  <span className="text-yellow-400">{achievement.organization}</span> • {achievement.period}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-50" />
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-30" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
              <div className="text-gray-300">Major Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-300">Models Deployed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
