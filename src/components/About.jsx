import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { personalInfo } from '../utils/data';
import { useInView } from '../hooks/useInView';
import { fadeInUp } from '../utils/animations';

const About = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl" />
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
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={hasBeenInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary-500 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-accent-500 rounded-2xl" />
              
              {/* Profile Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={hasBeenInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              I'm a {personalInfo.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="mr-3 text-primary-400" size={20} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="mr-3 text-primary-400" size={20} />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-300 shadow-lg text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Work Together
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Akash_Chintaluri_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800 border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 text-center"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

