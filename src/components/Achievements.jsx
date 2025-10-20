import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { achievements } from '../utils/data';
import { useInView } from '../hooks/useInView';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const AchievementCard = ({ achievement, index }) => {
  const Icon = Icons[achievement.icon] || Icons.Award;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 overflow-hidden p-6"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full" />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
            <Icon className="text-primary-400" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
              {achievement.title}
            </h3>
            <p className="text-sm text-primary-400 font-medium">{achievement.issuer}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-3">{achievement.description}</p>

        <div className="flex items-center text-sm text-gray-400">
          <Icons.Calendar size={14} className="mr-2" />
          {achievement.date}
        </div>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
    </motion.div>
  );
};

const Achievements = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <section id="achievements" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasBeenInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & <span className="text-primary-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and certifications that validate my expertise
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={hasBeenInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

