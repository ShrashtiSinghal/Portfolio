import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Target, BookOpen, Zap, Shield, Cpu, Database } from "lucide-react";

const About = () => {
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

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const highlights = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI INNOVATION LEADER",
      description: "Pioneering secure, scalable AI/ML systems with advanced LLM-based threat detection and RAG pipelines",
      color: "from-orange-500 to-orange-400",
      neon: ""
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "TEAM BUILDER",
      description: "Building and mentoring high-performing data science teams, driving innovation at scale",
      color: "from-teal-500 to-teal-400",
      neon: "neon-glow-teal"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "BUSINESS IMPACT",
      description: "Translating complex AI technologies into actionable insights for C-suite stakeholders",
      color: "from-orange-500 to-orange-400",
      neon: ""
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "THOUGHT LEADER",
      description: "Author and contributor to leading publications on AI, ML, and data science best practices",
      color: "from-teal-500 to-teal-400",
      neon: "neon-glow-teal"
    }
  ];

  const educationAndAchievements = [
    {
      type: "EDUCATION",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500 to-orange-400",
      items: [
        {
          title: "Master's in Computer Science - Data Science",
          institution: "University of Illinois at Urbana-Champaign, USA",
          year: "2018-2019",
          highlight: true
        },
        {
          title: "Bachelor of Technology - Computer Science",
          institution: "Amity School of Engineering and Technology, India",
          year: "2008-2012"
        }
      ]
    },
    {
      type: "PUBLICATIONS & RECOGNITION",
      icon: <Zap className="w-6 h-6" />,
      color: "from-teal-500 to-teal-400",
      items: [
        {
          title: "Journey to the Ultimate AI: Future of Humanity",
          institution: "Science Fiction Novel - Amazon",
          description: "Exploring philosophical implications of AI advancement",
          link: "https://www.amazon.in/-/hi/Shrashti-Singhal-ebook/dp/B0C5W4ZFHD"
        },
        {
          title: "Technical Articles on AI/ML",
          institution: "Towards Data Science & Towards AI (Medium)",
          description: "Contributing to leading data science publications",
          link: "https://medium.com/@shrashtisinghal"
        }
      ]
    }
  ];

  return (
    <section 
      id="about" 
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
            {index % 3 === 0 ? <Shield className="w-8 h-8" /> : 
             index % 3 === 1 ? <Cpu className="w-6 h-6" /> : 
             <Zap className="w-7 h-7" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Neo-Brutalism Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-8">
            <div className="neo-brutal-btn bg-gradient-to-r from-teal-500 to-orange-500 text-black font-black px-8 py-4 transform -rotate-1 shadow-brutal">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                ABOUT ME
              </h2>
            </div>
          </div>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Passionate about aligning <span className="text-orange-400 font-bold">next-gen AI architectures</span> with 
            <span className="text-teal-400 font-bold"> real-world business impact</span>
          </p>
        </div>

        {/* Glass Morphism Professional Story */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-brutal isometric-card ar-hover">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Currently leading AI initiatives at <span className="font-black text-teal-400">Culinda Inc.</span>, 
                where I spearhead the development of advanced ML solutions to proactively identify and mitigate vulnerabilities 
                in healthcare infrastructure. My expertise spans integrating AI with EDR, threat intelligence platforms, and 
                regulatory-compliant environments including <span className="font-bold text-orange-400">HIPAA</span> and 
                <span className="font-bold text-orange-400"> ISO 27001</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I serve as an <span className="font-black text-orange-400">academic advisor</span>, 
                collaborating with leading U.S. research institutions on AI-driven disease diagnostics using medical imaging. 
                This dual role allows me to bridge cutting-edge research with practical, production-ready solutions.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My journey in AI spans from founding multiple successful startups including 
                <span className="font-bold text-teal-400"> DermaAI</span>, 
                <span className="font-bold text-teal-400"> ChestAI</span>, and 
                <span className="font-bold text-orange-400"> NeedyData</span> (acquired by a Canadian firm) 
                to working with Fortune 500 companies like <span className="font-bold text-orange-400">Delta Airlines</span> and 
                <span className="font-bold text-orange-400"> Intel Deutschland</span>.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Isometric Key Highlights */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4">KEY STRENGTHS</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Neo-Brutalism Card */}
                <div className="glass-card bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 rounded-2xl p-6 shadow-brutal hover:shadow-brutal-hover transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 isometric-card ar-hover group">
                  
                  {/* 3D Icon Container */}
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 bg-gradient-to-br ${highlight.color} rounded-2xl shadow-lg transform rotate-3 group-hover:-rotate-3 transition-transform duration-300 isometric-social-btn`}>
                      <div className="text-black">
                        {highlight.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className={`font-black text-white mb-4 text-center tracking-wide ${highlight.neon}`}>
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed text-center">
                    {highlight.description}
                  </p>

                  {/* Floating Corner Element */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${highlight.color} rounded-full animate-pulse-glow`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Glass Morphism Education & Achievements */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {educationAndAchievements.map((section, sectionIndex) => (
            <div key={sectionIndex} className="group">
              <div className="glass-card bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-2xl border border-white/20 hover:border-white/40 rounded-3xl p-8 shadow-brutal hover:shadow-brutal-hover transition-all duration-500 hover:-translate-y-1 isometric-card ar-hover">
                
                {/* Neo-Brutalism Header */}
                <div className="flex items-center mb-8">
                  <div className={`p-3 bg-gradient-to-br ${section.color} rounded-xl mr-4 transform rotate-2 group-hover:-rotate-2 transition-transform duration-300`}>
                    <div className="text-black">
                      {section.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white tracking-wide">{section.type}</h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${section.color} rounded-full mt-2`}></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="relative border-l-2 border-gray-700 hover:border-white/40 pl-6 transition-colors duration-300">
                      <div className={`absolute -left-2 top-2 w-4 h-4 bg-gradient-to-br ${section.color} rounded-full animate-pulse-slow`}></div>
                      <div>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <h4 className="font-bold text-white mb-2 hover:text-orange-400 transition-all duration-200 group-hover:neon-glow-orange cursor-pointer">
                              {item.title} 🔗
                            </h4>
                          </a>
                        ) : (
                          <h4 className="font-bold text-white mb-2 hover:neon-glow-teal transition-all duration-200">
                            {item.title}
                          </h4>
                        )}
                        <p className="text-teal-400 text-sm font-medium mb-2">{item.institution}</p>
                        {item.year && (
                          <Badge className="neo-brutal-btn-small bg-gradient-to-r from-orange-500 to-orange-400 text-black text-xs mb-2 font-bold border-2 border-black">
                            {item.year}
                          </Badge>
                        )}
                        {item.description && (
                          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section removed - kept only in Hero component */}
      </div>
    </section>
  );
};

export default About;