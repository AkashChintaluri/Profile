import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { fadeInUp } from '../utils/animations';
import { skills } from '../utils/data';
import { 
  SiPython, SiJavascript, SiCplusplus, SiPostgresql, SiReact, 
  SiNodedotjs, SiFastapi, SiAmazon, SiDocker, 
  SiTerraform, SiGit, SiTensorflow, SiPytorch, SiOpencv,
  SiLangchain, SiMysql, SiNginx, SiGithubactions, SiHtml5,
  SiC, SiExpress
} from 'react-icons/si';
import { FaRobot, FaBrain, FaCode, FaDatabase, FaSearch, FaCloud, FaProjectDiagram, FaCogs, FaTools } from 'react-icons/fa';

const categoryIcons = {
  "AI & Machine Learning": FaBrain,
  "Backend & Cloud Infrastructure": FaCloud,
  "Frontend & Development Tools": FaCode
};

const Skills = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl" />
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
            Technical <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {skills.map((category, idx) => {
              const CategoryIcon = categoryIcons[category.category] || FaCode;
              return (
                <motion.div 
                  key={category.category} 
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <CategoryIcon className="text-3xl text-primary-400 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {category.category}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIdx) => (
                      <div
                        key={techIdx}
                        className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 group-hover:bg-primary-300 transition-colors" />
                        <span className="text-gray-300 text-sm font-medium">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
