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
      title: "AGENTIC AI ARCHITECT",
      description: "10+ production agentic AI systems shipped across ITSM, CLM, HRMS, asset management and security intelligence",
      color: "from-orange-500 to-orange-400",
      neon: ""
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "DELIVERY LEADERSHIP",
      description: "Guiding cross-functional AI, ML, data-science and full-stack teams on modular, secure and reusable implementation",
      color: "from-teal-500 to-teal-400",
      neon: ""
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "STRATEGIC PARTNERSHIPS",
      description: "$235K+ secured across Anthropic, Microsoft, OpenAI and Google Cloud, expanding AI capability and client credibility",
      color: "from-orange-500 to-orange-400",
      neon: ""
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "AI GOVERNANCE",
      description: "Observability, safety and evaluation across the AI lifecycle, aligned to NIST AI RMF and the EU AI Act",
      color: "from-teal-500 to-teal-400",
      neon: ""
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
      className="py-24 bg-background relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(23, 195, 178, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--card)) 50%, hsl(var(--background)) 100%)
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
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Passionate about aligning <span className="text-orange-400 font-bold">next-gen AI architectures</span> with
            <span className="text-teal-400 font-bold"> real-world business impact</span>
          </p>
        </div>

        {/* Glass Morphism Professional Story */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card bg-gradient-to-br from-card/10 to-card/5 backdrop-blur-2xl border border-border rounded-3xl p-8 sm:p-12 shadow-brutal isometric-card ar-hover">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                I'm an <span className="font-black text-orange-400">AI/ML Architect</span> with 12+ years in AI/ML, anchoring the
                end-to-end technical architecture, build and deployment of enterprise GenAI and agentic AI systems — from solution
                blueprint through production-grade delivery. At <span className="font-black text-teal-400">Culinda Inc.</span> I lead
                AI as Head of AI and AI Engineering Manager, owning solution integrity across delivery in regulated environments
                including <span className="font-bold text-orange-400">HIPAA</span>,
                <span className="font-bold text-orange-400"> ISO 27001</span> and GDPR.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                I've shipped <span className="font-black text-orange-400">10+ production agentic AI systems</span> across regulated
                enterprise domains — ITSM, contract lifecycle management, asset management, HRMS and converged security intelligence —
                with deep work in multi-agent orchestration (<span className="font-bold text-teal-400">LangGraph, CrewAI, AutoGen</span>),
                LLM fine-tuning, and MLOps/LLMOps on Databricks, GCP Vertex AI and Azure.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I embed observability, safety and compliance across the AI lifecycle, aligning to
                <span className="font-bold text-teal-400"> NIST AI RMF</span> and the
                <span className="font-bold text-teal-400"> EU AI Act</span>, and present AI strategy to C-suite and board stakeholders.
                Along the way I've secured <span className="font-black text-orange-400">$235K+</span> in strategic AI partnerships and
                founded <span className="font-bold text-orange-400">NeedyData</span> (acquired 2021),
                <span className="font-bold text-teal-400"> DermaAI</span>,
                <span className="font-bold text-teal-400"> Recroid</span> and
                <span className="font-bold text-teal-400"> MagixDB</span>.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Isometric Key Highlights */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-foreground mb-4">KEY STRENGTHS</h3>
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
                <div className="glass-card bg-gradient-to-br from-card/60 to-background/60 backdrop-blur-xl border-2 border-border hover:border-border/80 rounded-2xl p-6 shadow-brutal hover:shadow-brutal-hover transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 isometric-card ar-hover group">

                  {/* 3D Icon Container */}
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 bg-gradient-to-br ${highlight.color} rounded-2xl shadow-lg transform rotate-3 group-hover:-rotate-3 transition-transform duration-300 isometric-social-btn`}>
                      <div className="text-black">
                        {highlight.icon}
                      </div>
                    </div>
                  </div>

                  <h4 className={`font-black text-foreground mb-4 text-center tracking-wide ${highlight.neon}`}>
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
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
              <div className="glass-card bg-gradient-to-br from-card/5 to-card/2 backdrop-blur-2xl border border-border hover:border-border/80 rounded-3xl p-8 shadow-brutal hover:shadow-brutal-hover transition-all duration-500 hover:-translate-y-1 isometric-card ar-hover">

                {/* Neo-Brutalism Header */}
                <div className="flex items-center mb-8">
                  <div className={`p-3 bg-gradient-to-br ${section.color} rounded-xl mr-4 transform rotate-2 group-hover:-rotate-2 transition-transform duration-300`}>
                    <div className="text-black">
                      {section.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground tracking-wide">{section.type}</h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${section.color} rounded-full mt-2`}></div>
                  </div>
                </div>

                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="relative border-l-2 border-border hover:border-border/80 pl-6 transition-colors duration-300">
                      <div className={`absolute -left-2 top-2 w-4 h-4 bg-gradient-to-br ${section.color} rounded-full animate-pulse-slow`}></div>
                      <div>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <h4 className="font-bold text-foreground mb-2 hover:text-orange-400 transition-all duration-200 group-hover:neon-glow-orange cursor-pointer">
                              {item.title} 🔗
                            </h4>
                          </a>
                        ) : (
                          <h4 className="font-bold text-foreground mb-2 hover:neon-glow-teal transition-all duration-200">
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
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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