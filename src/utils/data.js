// Portfolio content data

export const personalInfo = {
  name: "Akash Chintaluri",
  title: "AI Engineer",
  tagline: "Creating AI solutions for real-world problems",
  bio: "AI Engineer specializing in LLMs, RAG systems, and full-stack development. Currently working at Elimai.ai, building production-ready AI solutions with cutting-edge technologies. Passionate about deploying scalable ML systems and creating innovative applications that solve real-world problems.",
  email: "akashchintaluriofficial@gmail.com",
  location: "Chennai, India",
  phone: "+91 8830893248",
  github: "https://github.com/AkashChintaluri",
  linkedin: "https://www.linkedin.com/in/akashchintaluri/",
  twitter: ""
};

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Technologies", value: 30, suffix: "+" },
  { label: "Open Source", value: 100, suffix: "+" }
];

export const skills = [
  {
    category: "AI & Machine Learning",
    description: "Advanced expertise in modern AI technologies and ML frameworks",
    technologies: [
      "LangChain & RAG Systems", "GPT/LLMs (OpenAI, LLaMA, DeepSeek, Mistral)", 
      "TensorFlow & PyTorch", "OpenCV & Computer Vision", "MLOps & Model Deployment",
      "Prompt Engineering", "Agentic AI", "Sentence Transformers", "CNNs"
    ]
  },
  {
    category: "Backend & Cloud Infrastructure", 
    description: "Full-stack development with cloud-native architectures",
    technologies: [
      "Python & Node.js", "FastAPI & Express", "PostgreSQL & MySQL", 
      "AWS (EC2, S3, RDS, Bedrock, App Runner, Amplify)", "Azure AI Foundry",
      "Docker & Containerization", "Terraform & Infrastructure as Code", "REST APIs"
    ]
  },
  {
    category: "Frontend & Development Tools",
    description: "Modern web development and DevOps practices", 
    technologies: [
      "React & JavaScript", "HTML/CSS", "C++ & Java", "Git & GitHub Actions",
      "FAISS/Pinecone/pgvector", "Nginx & PM2", "CI/CD Pipelines", "Agile & DevOps"
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "Elimai.ai",
    role: "AI Engineer",
    duration: "June 2025 - Present",
    location: "Remote",
    description: "Building production-ready AI solutions with LLMs, RAG systems, and cloud infrastructure.",
    achievements: [
      "Evaluated and integrated 10+ LLMs (LLaMA, GPT, DeepSeek) for production workflows, achieving 25% reduction in inference time",
      "Applied advanced prompt engineering to design agentic AI workflows, RAG pipelines, and chatbot automation, increasing query accuracy by 30%",
      "Built LLM inference services on Azure AI Foundry and AWS Bedrock, integrated with pgvector for low-latency semantic retrieval",
      "Created FastAPI-based MLOps pipelines using Docker to automate deployment, versioning, and performance tracking",
      "Delivered document automation platform with React, Node.js, PostgreSQL (AWS RDS), and AWS S3 with OCR and structured field extraction",
      "Collaborated with 5-member team managing end-to-end product lifecycle under Agile practices"
    ],
    technologies: ["Python", "LangChain", "FastAPI", "AWS", "Azure", "React", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    company: "Team Rudra",
    role: "Developer",
    duration: "January 2024 - September 2024",
    location: "SRMIST, Chennai",
    description: "Developed autonomous navigation and control systems for competitive rover robotics.",
    achievements: [
      "Enhanced rover navigation precision by 15% through C++ ARUCO-based localization system built with OpenCV",
      "Earned 3rd place at International Rover Challenge 2024 for high-accuracy navigation and control systems",
      "Improved trajectory control with PID tuning and 3D mapping, reducing path deviation during field runs",
      "Refactored simulation interfaces using type-erasure classes to align Gazebo simulations with physical rover hardware"
    ],
    technologies: ["C++", "OpenCV", "ROS", "Gazebo", "PID Control", "Computer Vision"]
  }
];

export const projects = [
  {
    id: 1,
    title: "ArXiv Research Assistant",
    description: "Full-stack RAG system with semantic search across 497+ research papers using GPT-4 and hybrid retrieval.",
    longDescription: "Built a Retrieval-Augmented Generation (RAG) system supporting semantic search across 497+ research papers using React and FastAPI. Integrated GPT-4 and Sentence Transformers with hybrid retrieval using PostgreSQL and FAISS/Pinecone for precise context grounding.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["React", "FastAPI", "GPT-4", "PostgreSQL", "FAISS", "AWS"],
    featured: true,
    github: "https://github.com/AkashChintaluri",
    demo: "",
    highlights: [
      "Semantic search across 497+ research papers",
      "Hybrid retrieval with PostgreSQL + FAISS/Pinecone",
      "Sub-second search latency via AWS App Runner",
      "Deployed containerized microservices"
    ]
  },
  {
    id: 2,
    title: "Multi-Vector Retrieval System",
    description: "Industrial standards comparison tool using multi-vector retrieval and LLM-assisted document analysis.",
    longDescription: "Created a Python + PyQt tool for multi-vector retrieval to automate comparison of industrial standards, cutting research time by 40%. Applied LLM-assisted document comparison for compliance validation across large technical corpora. Presented at L&T Techgium 2025.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["Python", "PyQt", "LLMs", "RAG", "Document Analysis"],
    featured: true,
    github: "https://github.com/AkashChintaluri",
    demo: "",
    highlights: [
      "Reduced research time by 40%",
      "Multi-vector retrieval architecture",
      "LLM-assisted compliance validation",
      "National Finalist at Techgium 2025"
    ]
  },
  {
    id: 3,
    title: "QuizSpark",
    description: "Cloud-based quiz platform with automated CI/CD deployment on AWS infrastructure.",
    longDescription: "Developed a web-based quiz system deployed on AWS EC2 with Node.js backend. Implemented infrastructure as code using Terraform and set up automated CI/CD pipelines using GitHub Actions. Hardened deployment with AWS VPC and Nginx reverse proxy.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop",
    tags: ["Node.js", "AWS EC2", "Terraform", "GitHub Actions", "Nginx"],
    featured: false,
    github: "https://github.com/AkashChintaluri",
    demo: "",
    highlights: [
      "Infrastructure as Code with Terraform",
      "Automated CI/CD with GitHub Actions",
      "Secure deployment with AWS VPC",
      "Nginx reverse proxy configuration"
    ]
  },
  {
    id: 4,
    title: "AgroBot",
    description: "ML-IoT rover with CNN-based anomaly detection for precision agriculture applications.",
    longDescription: "Designed an ML-IoT rover with CNN-based anomaly detection achieving 90% accuracy for crop and soil assessment. Integrated autonomous navigation and mapping to streamline inspection tasks in precision agriculture. Secured 3rd place at SRM Project Expo 2024.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
    tags: ["Python", "TensorFlow", "IoT", "Computer Vision", "Robotics"],
    featured: false,
    github: "https://github.com/AkashChintaluri",
    demo: "",
    highlights: [
      "90% accuracy in crop anomaly detection",
      "CNN-based computer vision system",
      "Autonomous navigation and mapping",
      "3rd place at SRM Project Expo 2024"
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "Wisdom High International School",
    degree: "10th Grade",
    duration: "2019 - 2020",
    gpa: "92%",
    gradeType: "Percentage",
    description: "Nashik, Maharashtra"
  },
  {
    id: 2,
    institution: "Global Public School and Jr. College",
    degree: "12th Grade",
    duration: "2020 - 2022",
    gpa: "75%",
    gradeType: "Percentage",
    description: "Nashik, Maharashtra"
  },
  {
    id: 3,
    institution: "SRMIST",
    degree: "B.Tech - CSE",
    duration: "2022 - Present",
    gpa: "8.65/10",
    gradeType: "GPA",
    description: "Kattankulathur, Chennai"
  }
];

export const achievements = [
  {
    id: 1,
    title: "3rd Place - International Rover Challenge 2024",
    issuer: "IRC 2024",
    date: "2024",
    icon: "Trophy",
    description: "Recognized for high-accuracy navigation and control systems in competitive rover robotics"
  },
  {
    id: 2,
    title: "3rd Prize - SRM Project Expo 2024",
    issuer: "SRMIST",
    date: "March 2024",
    icon: "Award",
    description: "Awarded for AgroBot - ML-IoT rover with CNN-based anomaly detection for precision agriculture"
  },
  {
    id: 3,
    title: "National Finalist - Techgium 2025",
    issuer: "L&T",
    date: "2025",
    icon: "Trophy",
    description: "Recognized for Multi-Vector Retrieval system for industrial standards comparison using GenAI"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "Alex is an exceptional developer who consistently delivers high-quality work. Their technical expertise and problem-solving abilities have been invaluable to our team.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at StartupHub",
    content: "Working with Alex has been a pleasure. They have a rare combination of technical skill and understanding of user needs, which results in products that both work well and delight users.",
    avatar: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Senior Developer",
    content: "Alex is not only a talented developer but also an excellent mentor. They helped me level up my skills and always make time to help the team solve challenging problems.",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

