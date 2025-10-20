import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ChevronRight } from 'lucide-react';
import { education } from '../utils/data';

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto" />
        </motion.div>

        {/* Horizontal Stepper Timeline */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {education.map((edu, index) => (
            // Use React.Fragment to group card and arrow without adding a DOM element
            <React.Fragment key={edu.id}>
              {/* Education Card */}
              <div className={`relative w-full md:max-w-sm ${edu.id === 3 ? 'p-1 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                  className={`w-full bg-slate-800/50 backdrop-blur-sm rounded-xl border-2 transition-all p-6 shadow-lg relative ${
                    edu.id === 3 
                      ? 'border-primary-400 shadow-primary-500/30' 
                      : 'border-slate-700 hover:border-primary-500 hover:shadow-primary-500/20'
                  }`}
                >
                  {/* Current Badge */}
                  {edu.id === 3 && (
                    <div className="absolute -top-3 right-4 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full shadow-lg z-10">
                      Current
                    </div>
                  )}
                
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg">
                    <GraduationCap className="text-primary-400" size={32} />
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                  <h4 className="text-primary-400 font-semibold text-sm">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm">{edu.duration}</p>
                  {edu.gpa && (
                    <p className="text-gray-300 text-sm font-medium">GPA: {edu.gpa}</p>
                  )}
                </div>
              </motion.div>
              </div>

              {/* Arrow connector, hidden on mobile and after the last card */}
              {index < education.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="hidden md:block text-primary-500"
                >
                  <ChevronRight size={40} strokeWidth={3} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;