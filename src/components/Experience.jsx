import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

// --- Data (previously in ../utils/data) ---
const experience = [
  {
    id: 1,
    role: "AI Engineer",
    company: "Elimai.ai",
    duration: "June 2025 – Present",
    location: "Remote",
    description: "Developing and deploying production-grade LLM workflows, agentic AI systems, and full-stack document automation platforms.",
    technologies: ["Python", "AWS", "Azure AI", "LangChain", "React", "Docker", "PostgreSQL"],
    achievements: [
      "Evaluated and integrated over 10 LLMs (LLaMA, GPT, DeepSeek), achieving a 25% reduction in inference time.",
      "Designed and deployed agentic AI workflows and RAG pipelines, increasing query accuracy by 30%.",
      "Built LLM inference services on Azure AI Foundry and AWS Bedrock with pgvector for low-latency retrieval.",
      "Delivered a full-stack document automation platform using React, Node.js, and PostgreSQL on AWS.",
    ],
  },
  {
    id: 2,
    role: "Developer",
    company: "Team Rudra",
    duration: "Jan 2024 – Sep 2024",
    location: "SRMIST, Chennai",
    description: "Led development for rover navigation and control systems, competing at an international level.",
    technologies: ["C++", "OpenCV", "PID Control", "Gazebo", "3D Mapping"],
    achievements: [
        "Enhanced rover navigation precision by 15% with a C++ ARUCO-based localization system.",
        "Earned 3rd place at the International Rover Challenge 2024 for high-accuracy navigation systems.",
        "Improved trajectory control with PID tuning and 3D mapping, reducing path deviation.",
    ],
  },
];

// --- Custom Hook (previously in ../hooks/useInView) ---
const useInView = (options) => {
  const ref = useRef(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenInView) {
        setHasBeenInView(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, hasBeenInView]);

  return { ref, hasBeenInView };
};

// --- Animations (previously in ../utils/animations) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


// --- ExperienceCard Component (previously ./ExperienceCard) ---
const ExperienceCard = ({ job, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={staggerItem}
      className={`group relative flex items-start ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col mb-12 ${index > 0 ? 'md:-mt-48' : ''}`}
      style={{ pointerEvents: 'none' }}
    >
      {/* Horizontal connector line */}
      <div
        className="hidden md:block absolute h-0.5 bg-slate-700"
        style={{
          top: '4.75rem',
          width: 'calc(50% - 3.75rem)',
          ...(isEven 
            ? { right: 'calc(50% + 0.75rem)' } // Corrected: For even cards (left), line goes from right to center
            : { left: 'calc(50% + 0.75rem)' }  // Corrected: For odd cards (right), line goes from left to center
          )
        }}
      />
      
      {/* Timeline dot */}
      <div
        className="absolute top-16 z-10 hidden md:block"
        style={{ left: '50%', transform: 'translateX(-50%)', pointerEvents: 'auto' }}
      >
        <motion.div 
          whileHover={{ scale: 1.2 }}
          className="w-6 h-6 bg-primary-500 rounded-full border-4 border-slate-900 relative"
        >
          <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75" />
        </motion.div>
      </div>

      {/* Content card */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`} style={{ pointerEvents: 'auto' }}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 overflow-hidden shadow-xl"
        >
          <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{job.role}</h3>
                <h4 className="text-xl text-primary-400 font-semibold">{job.company}</h4>
              </div>
              <div className="ml-4 p-3 bg-primary-500/10 rounded-lg">
                <Briefcase className="text-primary-400" size={24} />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center"><Calendar size={16} className="mr-2" />{job.duration}</div>
              <div className="flex items-center"><MapPin size={16} className="mr-2" />{job.location}</div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-300 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/30">
                  {tech}
                </span>
              ))}
            </div>
            <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium">
              {isExpanded ? <><ChevronUp size={20} className="mr-1" />Show Less</> : <><ChevronDown size={20} className="mr-1" />Show Achievements</>}
            </button>
            <AnimatePresence>
              {isExpanded && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <ul className="mt-4 space-y-3 border-t border-slate-700 pt-4">
                    {job.achievements.map((achievement, idx) => (
                      <motion.li key={idx} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }} className="flex items-start text-gray-300">
                        <span className="text-primary-400 mr-3 mt-1">▹</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <div className="hidden md:block w-5/12" style={{ pointerEvents: 'none' }} />
    </motion.div>
  );
};


// --- Main Experience Component ---
const Experience = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasBeenInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional journey, building impactful solutions and contributing to innovative teams.
          </p>
        </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={hasBeenInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-0.5 bg-slate-700" style={{ transform: 'translateX(-50%)' }} />
          {experience.map((job, index) => (
            <ExperienceCard key={job.id} job={job} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;