import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building, Calendar, MapPin, Award, Cpu, Shield, Zap } from "lucide-react";

const Experience = () => {
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

    const element = document.getElementById("experience");
    if (element) {
      observer.observe(element);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const experiences = [
    {
      title: "Chief Data Scientist - Product Manager",
      subtitle: "AI Engineering Manager",
      company: "Culinda Inc.",
      location: "India",
      period: "May 2021 - Present",
      current: true,
      type: "Full-time",
      highlights: [
        "Leading AI initiatives for healthcare infrastructure vulnerability detection",
        "Spearheaded development of Night Hawk - Agentic Data Intelligence Platform",
        "Built AI Security Copilot reducing MTTR by 40%",
        "Developed ThreatPrism.com - LLM/RAG-based Threat Intelligence Hub",
        "Achieved 92% threat detection precision, reducing false positives by 25%"
      ],
      technologies: ["GPT-4o", "LangChain", "FAISS", "PyTorch", "Splunk", "SentinelOne"]
    },
    {
      title: "Founder/Co-founder",
      company: "Multiple Startups",
      subtitle: "NeedyData, DermaAI, Recroid, MagixDB, ChestAI",
      location: "India",
      period: "2020 - 2024",
      type: "Entrepreneurship",
      highlights: [
        "Founded NeedyData - Democratizing data cleaning (Acquired by Canadian firm in 2021)",
        "Co-founded DermaAI - Skin disease detection platform surpassing dermatologist accuracy",
        "Built ChestAI - Computer vision for chest disease detection with Yale University",
        "Created Recroid.com - Automated recruitment with 100% shortlisting accuracy",
        "Developed MagixDB - Natural language database querying with 100% accuracy"
      ],
      technologies: ["Computer Vision", "LLMs", "Fine-tuning", "Medical Imaging", "NLP"]
    },
    {
      title: "AI Advisor",
      company: "ChestAI, Yale University",
      location: "USA",
      period: "2022",
      type: "Advisory",
      highlights: [
        "Partnered with Yale University for AI-driven chest disease detection",
        "Enhanced model accuracy through advanced image augmentation techniques",
        "Led hospital onboarding and beta validation processes",
        "Collaborated with medical professionals for clinical validation"
      ],
      technologies: ["Medical Imaging", "Computer Vision", "Deep Learning", "Clinical AI"]
    },
    {
      title: "Data Scientist",
      company: "Delta Airlines",
      location: "USA",
      period: "2019 - 2020",
      type: "Full-time",
      highlights: [
        "Optimized national flight schedules using predictive models",
        "Reduced cascading delays through data-driven planning",
        "Improved passenger experience and operational efficiency",
        "Worked with large-scale time-series data and optimization algorithms"
      ],
      technologies: ["Predictive Modeling", "Time Series", "Optimization", "Big Data"]
    },
    {
      title: "Senior Machine Learning Engineer",
      company: "Intel Deutschland/LnT Technology Services",
      location: "Germany",
      period: "2013 - 2017",
      type: "Full-time",
      highlights: [
        "Classified telecommunication logs with 97% accuracy",
        "Automated log analysis reducing manual work by 3,200 hours/month",
        "Designed scalable database schemas for log processing",
        "Led data ingestion and wrangling initiatives"
      ],
      technologies: ["Machine Learning", "Data Engineering", "Classification", "Database Design"]
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-24 bg-black relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(23, 195, 178, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)
        `
      }}
    >
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, index) => (
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
            {index % 3 === 0 ? <Building className="w-8 h-8" /> : 
             index % 3 === 1 ? <Cpu className="w-6 h-6" /> : 
             <Award className="w-7 h-7" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Neo-Brutalism Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-8">
            <div className="neo-brutal-btn bg-gradient-to-r from-orange-500 to-teal-500 text-black font-black px-8 py-4 transform rotate-1 shadow-md">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                PROFESSIONAL EXPERIENCE
              </h2>
            </div>
          </div>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            A journey of <span className="text-orange-400 font-bold">innovation</span>, 
            <span className="text-teal-400 font-bold"> leadership</span>, and 
            <span className="text-orange-400 font-bold"> transformative AI solutions</span> across diverse industries
          </p>
        </div>

        {/* Experience Timeline with Dark Theme */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-600 via-orange-400 to-teal-600"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-6 top-8 w-4 h-4 bg-black border-4 border-teal-600 rounded-full shadow-lg z-10"></div>
              
              <div className="md:ml-20">
                {/* Glass Morphism Experience Card */}
                <div className="glass-card bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 isometric-card ar-hover group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-black text-white">{exp.title}</h3>
                        {exp.current && (
                          <Badge className="neo-brutal-btn-small bg-teal-500 text-black text-xs font-bold">
                            CURRENT
                          </Badge>
                        )}
                      </div>
                      {exp.subtitle && (
                        <p className="text-orange-400 font-bold mb-1">{exp.subtitle}</p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4 text-teal-400" />
                          <span className="font-medium text-gray-300">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-orange-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-teal-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="neo-brutal-btn-small bg-gray-800/80 text-gray-300 border border-gray-700/50 mt-2 lg:mt-0 text-xs">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-white mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-orange-400" />
                      KEY ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-black text-white mb-3">TECHNOLOGIES & TOOLS</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIndex) => (
                        <Badge 
                          key={tIndex}
                          className="neo-brutal-btn-small bg-gray-800/80 hover:bg-orange-500/20 text-gray-300 hover:text-orange-400 text-xs py-1 px-3 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Floating Corner Element */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${index % 2 === 0 ? 'from-orange-500 to-orange-400' : 'from-teal-500 to-teal-400'} rounded-full animate-pulse-glow`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;