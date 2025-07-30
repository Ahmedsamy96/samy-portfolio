import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Mail, Phone, Github, Linkedin, Award, BookOpen, Briefcase, User, Code, Star, Calendar, MapPin, ExternalLink, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [skillFilter, setSkillFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Senior Data Scientist & AI Engineer";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Senior Data Scientist",
      company: "CODE81 | Ghobash Group",
      period: "June 2024 - Present",
      type: "Full-time | Remote",
      location: "United Arab Emirates",
      description: "Translate business visions into data-driven products by leading the design, development, and deployment of AI solutions. Collaborate with sales teams to deliver impactful, scalable solutions through machine learning and analytics platforms.",
      skills: ["AI Solutions", "Machine Learning", "Analytics", "Business Strategy"]
    },
    {
      id: 2,
      title: "Senior Data Scientist",
      company: "Etisalat e& (UAE)",
      period: "Jan 2024 - June 2024",
      type: "Full-time | Remote",
      location: "UAE",
      description: "Utilizes advanced data science methodologies to spearhead innovative initiatives focused on optimizing B2C operations within the organization like Customer Segmentation, Offer Specification, Credit Facility Modeling, and Fraud Detection.",
      skills: ["Customer Segmentation", "Fraud Detection", "Credit Modeling", "B2C Analytics"]
    },
    {
      id: 3,
      title: "Data Science Instructor",
      company: "National Tele Institute",
      period: "DEC 2022 - Present",
      type: "Part-time",
      location: "New Admin Capital, Egypt",
      description: "Teaching postgraduate students data flow in machine learning and data science projects, covering all stages and implementation of different projects with a variety of use cases. (Finished 3 Rounds)",
      skills: ["Teaching", "Machine Learning", "Data Science", "Project Management"]
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Austin Artificial Intelligence, Inc.",
      period: "May 2023 - Jan 2024",
      type: "Full-Time | Remote",
      location: "Lakeway, TX, USA",
      description: "Specialized in DS and NLP tasks, contributing to the productization of data sourced for major clients across the US, specializing in fields like real estate, stock market, and KPIs analytics.",
      skills: ["NLP", "Real Estate Analytics", "Stock Market Analysis", "KPIs"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Visual Pollution Detection (Visual Distortions)",
      location: "Saudi Arabia",
      tools: ["Yolov8", "SQL Server DB", "Streamlit", "Flask", "LabelImg", "NVIDIA GPUs"],
      description: "Developed a comprehensive CV model to detect visual pollution objects in urban environments, integrated with real-time database storage and accessible through web and mobile applications.",
      category: "Computer Vision",
      github: "https://github.com/Ahmedsamy96",
      features: ["Real-time object detection", "Database integration", "Multi-platform accessibility", "GPU optimization"]
    },
    {
      id: 2,
      title: "Arabic Dialect Recognition System",
      tools: ["NLP", "LSTM", "Naïve Bayes", "Flask", "NLTK", "Python", "Deep Learning"],
      description: "Advanced NLP system that predicts Arabic dialects from text input across 18 different dialect classes. Implemented both traditional ML (Naïve Bayes) and deep learning (LSTM) approaches with web deployment.",
      category: "NLP",
      github: "https://github.com/Ahmedsamy96/Arabic-Dialects-Detector",
      features: ["Multi-dialect classification", "Traditional ML & DL models", "Web service deployment", "Large-scale data processing"]
    },
    {
      id: 3,
      title: "Customized AI Chatbot (Digital Egypt - EEHC)",
      tools: ["LLM Fine Tuning", "Facebook's FastText Embedding", "Flask", "Ngrok", "Streamlit", "Llama2", "Langchain", "VectorDB", "RAG"],
      description: "State-of-the-art conversational AI system utilizing advanced prompt engineering and RAG architecture. Fine-tuned Large Language Models with custom embeddings for domain-specific responses.",
      category: "NLP",
      features: ["LLM fine-tuning", "RAG implementation", "Custom embeddings", "Production deployment"]
    },
    {
      id: 4,
      title: "Cairo Demographic Center (CDC)",
      tools: ["ETL", "Apache Spark", "Python", "Apache Airflow", "Tableau", "Time-series Analysis", "Clustering Models", "Anomaly Detection"],
      description: "Large-scale demographic analysis platform processing governmental data sources to provide statistical insights and predictive analytics for policy decision-making.",
      category: "Analytics",
      features: ["Big data processing", "Government data integration", "Predictive modeling", "Interactive dashboards"]
    },
    {
      id: 5,
      title: "Real-Time Handwriting Using Fingertip Recognition",
      tools: ["Computer Vision", "Roboflow", "Yolo v5", "OpenCV", "Python"],
      description: "Innovative CV solution enabling contactless writing and drawing through hand gesture recognition, designed for online education and remote instruction scenarios.",
      category: "Computer Vision",
      features: ["Gesture recognition", "Real-time processing", "Educational applications", "Contactless interaction"]
    },
    {
      id: 6,
      title: "Federal Tax Authority AI Transformation",
      tools: ["Low-code/No-code", "Apache Spark", "Dataiku", "OCR", "Machine Learning", "Data Visualization"],
      description: "Confidential enterprise-level project developing interactive dashboards and ML models for fraud detection in corporate tax systems with end-to-end secure data management.",
      category: "Analytics",
      features: ["Fraud detection", "OCR integration", "Interactive dashboards", "Enterprise security"]
    },
    {
      id: 7,
      title: "Data Streaming Pipeline: MongoDB to Kafka",
      tools: ["Python", "MongoDB", "Apache Kafka", "Data Streaming", "Microservices"],
      description: "Scalable data streaming architecture connecting MongoDB databases to Kafka message queues for real-time data processing and analytics in distributed systems.",
      category: "Data Engineering",
      features: ["Real-time streaming", "Scalable architecture", "Database integration", "Event-driven processing"]
    },
    {
      id: 8,
      title: "GAIA - AI Tourism Assistant (LabLab Hackathon Winner)",
      location: "Saudi Arabia",
      tools: ["NLP", "Computer Vision", "AI Integration", "Tourism APIs", "Machine Learning"],
      description: "Award-winning AI-powered tourism platform that secured first place in LabLab Hackathon. Integrates NLP and image recognition to assist tourists with personalized travel planning and recommendations.",
      category: "AI Integration",
      features: ["Multi-modal AI", "Tourism recommendation", "Image recognition", "Natural language processing"],
      award: "🏆 First Place Winner"
    }
  ];

  const skills = {
    programming: ["Python", "Java", "SQL", "JavaScript"],
    ml: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "MLOps"],
    tools: ["Apache Spark", "Kafka", "Docker", "Tableau", "Streamlit", "Flask"],
    cloud: ["AWS", "Azure", "MongoDB", "PostgreSQL"]
  };

  const achievements = [
    "Secured first place in the LabLab Hackathon by implementing GAIA for an AI-powered tourism website in Saudi Arabia",
    "Dataiku Master Certified - Certified in all tracks of Dataiku platform",
    "Machine Learning Engineering for Production (MLOPS) - Coursera",
    "Deep Learning Specialization - Coursera (Andrew Ng)",
    "Presenting online introductory lectures on AI & Data Science to universities"
  ];

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const NavButton = ({ section, icon: Icon, label }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
        activeSection === section 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
          : 'text-gray-400 hover:text-white hover:bg-gray-800'
      }`}
    >
      <Icon size={20} />
      <span className="hidden md:block">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">AS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Ahmed Samy</h1>
                <p className="text-sm text-gray-400">{typedText}<span className="animate-pulse">|</span></p>
              </div>
            </div>
            <nav className="flex space-x-2">
              <NavButton section="profile" icon={User} label="Profile" />
              <NavButton section="experience" icon={Briefcase} label="Experience" />
              <NavButton section="projects" icon={Code} label="Projects" />
              <NavButton section="skills" icon={Star} label="Skills" />
              <NavButton section="education" icon={BookOpen} label="Education" />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          
          {/* Profile Section */}
          {activeSection === 'profile' && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Data Science Expert
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Experienced Data Scientist with 5+ years of diverse industry experience and 6 years in the general Tech Market. 
                    Skilled in creating data-intensive applications, overcoming scalability challenges, and implementing predictive modeling techniques.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-400">5+</h3>
                      <p className="text-gray-400">Years Experience</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h3 className="text-2xl font-bold text-purple-400">20+</h3>
                      <p className="text-gray-400">Projects Completed</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="mailto:ahmed.samy18296@gmail.com" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                      <Mail size={20} />
                      <span>Contact Me</span>
                    </a>
                    <a href="https://github.com/Ahmedsamy96" className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors">
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full mx-auto relative overflow-hidden">
                    <div className="absolute inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <User size={120} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-green-500 text-black px-4 py-2 rounded-lg font-semibold">
                    Available for hire
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
                    <div 
                      className="flex justify-between items-start cursor-pointer"
                      onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
                    >
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                        <p className="text-lg text-gray-300">{exp.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                          <span className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>
                      {expandedExperience === exp.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                    </div>
                    
                    {expandedExperience === exp.id && (
                      <div className="mt-4 animate-slide-down">
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, index) => (
                            <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
                      <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                        {project.category}
                      </span>
                    </div>
                    {project.location && (
                      <p className="text-gray-400 text-sm mb-2">📍 {project.location}</p>
                    )}
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.slice(0, 3).map((tool, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <button 
                          onClick={() => openModal({title: project.title, tools: project.tools})}
                          className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs hover:bg-blue-600/30"
                        >
                          +{project.tools.length - 3} more
                        </button>
                      )}
                    </div>
                    <button 
                      onClick={() => openModal({title: project.title, description: project.description, tools: project.tools, category: project.category})}
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1"
                    >
                      <span>View Details</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <div className="mb-8 flex justify-center">
                <div className="flex space-x-2 bg-gray-800/50 p-2 rounded-lg">
                  {['all', 'programming', 'ml', 'tools', 'cloud'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSkillFilter(filter)}
                      className={`px-4 py-2 rounded-lg capitalize transition-all ${
                        skillFilter === filter 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-700'
                      }`}
                    >
                      {filter === 'ml' ? 'Machine Learning' : filter}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div 
                    key={category}
                    className={`bg-gray-800/50 rounded-lg p-6 transition-all duration-300 ${
                      skillFilter === 'all' || skillFilter === category 
                        ? 'opacity-100 transform scale-100' 
                        : 'opacity-50 transform scale-95'
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-4 text-blue-400 capitalize">
                      {category === 'ml' ? 'Machine Learning' : category}
                    </h3>
                    <div className="space-y-2">
                      {skillList.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-300">{skill}</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-blue-400' : 'bg-gray-600'}`} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Education & Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">Education</h3>
                  <div className="space-y-6">
                    <div className="bg-gray-800/50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white">MSc in Artificial Intelligence</h4>
                      <p className="text-gray-300">FCI, Zagazig University</p>
                      <p className="text-gray-400 text-sm">2022 - Present</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white">AI/ML PRO Scholarship</h4>
                      <p className="text-gray-300">Information Technology Institute (ITI) & EPITA</p>
                      <p className="text-gray-400 text-sm">Apr 2021 - Dec 2021</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white">BSc in Computer Science & IT</h4>
                      <p className="text-gray-300">FCI, Zagazig University</p>
                      <p className="text-gray-400 text-sm">2014 - 2018 (Grade: Good)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-purple-400">Achievements</h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="bg-gray-800/50 rounded-lg p-4 flex items-start space-x-3">
                        <Award className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                        <p className="text-gray-300 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-blue-400">{modalContent.title}</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            {modalContent.description && (
              <p className="text-gray-300 mb-4">{modalContent.description}</p>
            )}
            {modalContent.tools && (
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {modalContent.tools.map((tool, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contact Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
              <p className="text-gray-400">Ready to work on your next project</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:ahmed.samy18296@gmail.com" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/Ahmedsamy96" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/ahmed-samy-datascientist" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 200px; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;