import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Cloud, Database, Shield, Code, BarChart, Cpu, Zap } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skillCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "MACHINE LEARNING & AI",
      color: "from-orange-500 to-orange-400",
      borderColor: "border-orange-500/30",
      skills: [
        "LLMs (GPT-4o, Falcon, LLAMA 2)",
        "RAG (LangChain, Haystack)",
        "Agentic Frameworks",
        "Embedding Models",
        "Fine-tuning",
        "Neural Networks",
        "Deep Learning",
        "Data Mining",
        "Computer Vision"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SECURITY & COMPLIANCE",
      color: "from-teal-500 to-teal-400",
      borderColor: "border-teal-500/30",
      skills: [
        "CVE Scanning",
        "IDS Rule Management",
        "RAG for ThreatOps",
        "EDR/TVM Integration",
        "SIEM Tools (Splunk, SentinelOne)",
        "Threat Intelligence",
        "CVSS",
        "ISO 27001",
        "HIPAA Compliance"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "CLOUD & DEVOPS",
      color: "from-orange-500 to-orange-400",
      borderColor: "border-orange-500/30",
      skills: [
        "Azure ML",
        "MLflow",
        "Docker",
        "GCP",
        "Azure",
        "AWS",
        "Hadoop",
        "Spark",
        "Databricks",
        "Kubernetes"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "PROGRAMMING & FRAMEWORKS",
      color: "from-teal-500 to-teal-400",
      borderColor: "border-teal-500/30",
      skills: [
        "Python",
        "PySpark",
        "Java",
        "FastAPI",
        "TensorFlow",
        "PyTorch",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "OpenCV"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "DATABASES & STORAGE",
      color: "from-orange-500 to-orange-400",
      borderColor: "border-orange-500/30",
      skills: [
        "MongoDB",
        "MySQL",
        "Cassandra",
        "Vector Databases",
        "FAISS",
        "Pinecone",
        "Weaviate",
        "NoSQL",
        "RDBMS"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "DATA VISUALIZATION",
      color: "from-teal-500 to-teal-400",
      borderColor: "border-teal-500/30",
      skills: [
        "Plotly",
        "D3.js",
        "Tableau",
        "PowerBI",
        "Langfuse",
        "HuggingFace",
        "LlamaIndex",
        "Data Modeling",
        "Statistical Analysis"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-24 bg-black relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(23, 195, 178, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)
        `
      }}
    >
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`absolute opacity-10 ${index % 2 === 0 ? 'text-orange-400' : 'text-teal-400'} animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {index % 3 === 0 ? <Brain className="w-8 h-8" /> : 
             index % 3 === 1 ? <Cpu className="w-6 h-6" /> : 
             <Zap className="w-7 h-7" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Neo-Brutalism Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-8">
            <div className="neo-brutal-btn bg-gradient-to-r from-teal-500 to-orange-500 text-black font-black px-8 py-4 transform -rotate-1 shadow-md">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                TECHNICAL SKILLS
              </h2>
            </div>
          </div>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across the <span className="text-orange-400 font-bold">AI/ML technology stack</span> with 
            deep specialization in <span className="text-teal-400 font-bold">cybersecurity applications</span>
          </p>
        </div>

        {/* Skills Grid with Dark Theme */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glass Morphism Card */}
              <div className={`glass-card bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border ${category.borderColor} hover:border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 isometric-card ar-hover group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* 3D Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl shadow-md transform rotate-3 group-hover:-rotate-3 transition-transform duration-300 isometric-social-btn`}>
                    <div className="text-black">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="font-black text-white mb-6 text-center tracking-wide text-lg">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className="neo-brutal-btn-small bg-gray-800/80 hover:bg-white/10 text-gray-300 hover:text-white text-xs py-2 px-3 border border-gray-700/50 hover:border-white/20 transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Floating Corner Element */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${category.color} rounded-full animate-pulse-glow`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary with Glass Morphism */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card bg-gradient-to-r from-orange-500/20 via-black/60 to-teal-500/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="isometric-card hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    12+
                  </div>
                  <div className="text-gray-300 font-bold tracking-wide">YEARS OF EXPERIENCE</div>
                </div>
              </div>
              <div className="group">
                <div className="isometric-card hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-gray-300 font-bold tracking-wide">TECHNOLOGIES MASTERED</div>
                </div>
              </div>
              <div className="group">
                <div className="isometric-card hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x mb-2">
                    15+
                  </div>
                  <div className="text-gray-300 font-bold tracking-wide">MAJOR PROJECTS DELIVERED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;