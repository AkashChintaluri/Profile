import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../utils/data';
import { useInView } from '../hooks/useInView';
import { fadeInUp } from '../utils/animations';

const ProjectModal = ({ project, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-8" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(1200px, 85vw)', height: 'min(700px, 80vh)' }}
        className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={24} className="text-white" />
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          {/* Left Side - Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.featured && (
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary-500 rounded-full flex items-center gap-1.5 text-sm font-semibold text-white">
                <Star size={14} fill="currentColor" />
                Featured
              </div>
            )}
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col overflow-y-auto">
            <div className="p-8 space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-400">{project.longDescription}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm rounded-full border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-primary-400 mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GitHub Button */}
              <div className="pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-primary-500 transition-all duration-300 cursor-pointer h-full"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white rounded-full flex items-center gap-1 text-sm font-semibold">
              <Star size={14} fill="currentColor" />
              Featured
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium text-gray-500">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get position relative to center
  const getPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(projects.length - 1)) return 'right';
    if (diff === -1 || diff === projects.length - 1) return 'left';
    return 'hidden';
  };

  const getCardStyle = (position) => {
    switch (position) {
      case 'center':
        return {
          scale: 1,
          x: '0%',
          opacity: 1,
          rotateY: 0,
          zIndex: 3,
        };
      case 'left':
        return {
          scale: 0.75,
          x: '-80%',
          opacity: 0.5,
          rotateY: 25,
          zIndex: 2,
        };
      case 'right':
        return {
          scale: 0.75,
          x: '80%',
          opacity: 0.5,
          rotateY: -25,
          zIndex: 2,
        };
      default:
        return {
          scale: 0.5,
          x: '0%',
          opacity: 0,
          rotateY: 0,
          zIndex: 1,
        };
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasBeenInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building modern web applications
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-slate-800/90 backdrop-blur rounded-full text-white hover:bg-primary-500 transition-all hover:scale-110 shadow-xl"
            aria-label="Previous project"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-slate-800/90 backdrop-blur rounded-full text-white hover:bg-primary-500 transition-all hover:scale-110 shadow-xl"
            aria-label="Next project"
          >
            <ChevronRight size={28} />
          </button>

          {/* Carousel container with 3D perspective */}
          <div className="relative h-[600px] md:h-[650px]" style={{ perspective: '2000px' }}>
            <div className="relative w-full h-full flex items-center justify-center">
              {projects.map((project, index) => {
                const position = getPosition(index);
                const style = getCardStyle(position);
                const isClickable = position !== 'center';

                return (
                  <motion.div
                    key={project.id}
                    animate={style}
                    transition={{
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="absolute w-full max-w-lg"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                    onClick={() => isClickable && goToSlide(index)}
                  >
                    <div 
                      className={`${isClickable ? 'cursor-pointer' : ''} ${position === 'center' ? 'pointer-events-auto' : 'pointer-events-none'}`}
                      style={{ pointerEvents: position === 'center' ? 'auto' : 'none' }}
                    >
                      <ProjectCard project={project} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 -mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-slate-700 hover:bg-slate-600 w-2'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

