import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { fadeInUp } from '../utils/animations';
import { 
  SiPython, SiJavascript, SiCplusplus, SiPostgresql, SiReact, 
  SiNodedotjs, SiFastapi, SiAmazon, SiDocker, 
  SiTerraform, SiGit, SiTensorflow, SiPytorch, SiOpencv,
  SiLangchain, SiMysql, SiNginx, SiGithubactions, SiHtml5,
  SiC, SiExpress
} from 'react-icons/si';
import { FaRobot, FaBrain, FaCode, FaDatabase, FaSearch, FaCloud, FaProjectDiagram, FaCogs, FaTools } from 'react-icons/fa';

const iconMap = {
  // Languages
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'Node.js': SiNodedotjs,
  'React': SiReact,
  'Express': SiExpress,
  'SQL': FaDatabase,
  'C++': SiCplusplus,
  'Java': FaCode,
  'C': SiC,
  'HTML': SiHtml5,
  
  // Cloud & Infrastructure
  'AWS (EC2, S3, RDS, Bedrock, App Runner, Amplify)': SiAmazon,
  'Azure AI Foundry': FaCloud,
  'Docker': SiDocker,
  'Terraform': SiTerraform,
  
  // AI/ML
  'TensorFlow': SiTensorflow,
  'PyTorch': SiPytorch,
  'LangChain': SiLangchain,
  'RAG': FaSearch,
  'CNNs': FaBrain,
  'MLOps': FaCogs,
  'Sentence Transformers': FaBrain,
  'PID Control': FaProjectDiagram,
  
  // GenAI & LLMs
  'OpenAI GPT': FaRobot,
  'LLaMA': FaRobot,
  'DeepSeek': FaRobot,
  'Mistral': FaRobot,
  'Prompt Engineering': FaCode,
  'Agentic AI': FaRobot,
  'Chatbots': FaRobot,
  
  // Databases
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'pgvector': FaDatabase,
  'FAISS': FaSearch,
  'Pinecone': FaSearch,
  
  // Tools & Utilities
  'Git': SiGit,
  'GitHub Actions': SiGithubactions,
  'AWS CLI': SiAmazon,
  'OpenCV': SiOpencv,
  'PyQt': FaCode,
  'REST APIs': FaCode,
  'Gazebo Simulation': FaProjectDiagram,
  'OCR Pipelines': FaCode,
  'Data Analytics Tools': FaProjectDiagram,
  'Nginx': SiNginx,
  'PM2': FaTools,
  'FastAPI': SiFastapi,
  '3D Mapping': FaProjectDiagram,
  
  // Methodologies
  'Agile': FaProjectDiagram,
  'DevOps': FaCogs
};

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "React" },
      { name: "Express" },
      { name: "SQL" },
      { name: "C++" },
      { name: "Java" },
      { name: "C" },
      { name: "HTML" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS (EC2, S3, RDS, Bedrock, App Runner, Amplify)" },
      { name: "Azure AI Foundry" },
      { name: "Docker" },
      { name: "Terraform" }
    ]
  },
  {
    category: "AI/ML",
    items: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "LangChain" },
      { name: "RAG" },
      { name: "CNNs" },
      { name: "MLOps" },
      { name: "Sentence Transformers" },
      { name: "PID Control" }
    ]
  },
  {
    category: "GenAI & LLMs",
    items: [
      { name: "OpenAI GPT" },
      { name: "LLaMA" },
      { name: "DeepSeek" },
      { name: "Mistral" },
      { name: "Prompt Engineering" },
      { name: "Agentic AI" },
      { name: "Chatbots" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "pgvector" },
      { name: "FAISS" },
      { name: "Pinecone" }
    ]
  },
  {
    category: "Tools & Utilities",
    items: [
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "AWS CLI" },
      { name: "OpenCV" },
      { name: "PyQt" },
      { name: "REST APIs" },
      { name: "Gazebo Simulation" },
      { name: "OCR Pipelines" },
      { name: "Data Analytics Tools" },
      { name: "Nginx" },
      { name: "PM2" },
      { name: "FastAPI" },
      { name: "3D Mapping" }
    ]
  },
  {
    category: "Methodologies",
    items: [
      { name: "Agile" },
      { name: "DevOps" }
    ]
  }
];

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
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, idx) => (
              <motion.div 
                key={category.category} 
                className="space-y-4 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-primary-400 pb-2 border-b border-slate-700 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((skill) => {
                    const Icon = iconMap[skill.name] || FaCode;
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group min-h-[100px]"
                      >
                        <Icon className="text-3xl mb-2 text-primary-400 group-hover:text-primary-300 transition-colors" />
                        <span className="text-gray-300 text-xs text-center leading-tight">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
