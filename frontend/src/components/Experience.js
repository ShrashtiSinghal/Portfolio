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
      title: "Head of AI | AI Engineering Manager",
      subtitle: "Chief Data Scientist",
      company: "Culinda Inc.",
      location: "India",
      period: "May 2021 - Present",
      current: true,
      type: "Full-time",
      highlights: [
        "Own end-to-end technical architecture and solution integrity across delivery, guiding cross-functional AI, ML, data-science and full-stack teams",
        "Architected and shipped 10+ production agentic AI systems across ITSM, CLM, HRMS, asset management, cybersecurity GRC, SOAR and threat intelligence",
        "Client: Velozent Technologies - VeloDesk, VeloContract, VeloInventory and VeloHr on one shared agentic backbone; 94% ticket routing accuracy, 70% contract review reduction",
        "DarkEye - converged security intelligence platform (TIP + VRM + ASM + SOAR + GRC); 89% MTTD reduction across 15+ hospital security teams",
        "Client: Primera Medical Technologies - ThreatPrism, a Virtual CISO and function-calling threat intelligence hub in daily use by a 12-member CTI team",
        "MLOps/LLMOps at scale - GPU training pipelines, Delta Lake feature stores and Databricks/Airflow orchestration for fine-tuning, evaluation and retraining",
        "Secured $235K+ in strategic AI partnerships across Anthropic, Microsoft, OpenAI and Google Cloud",
        "Aligned delivery to NIST AI RMF and the EU AI Act; present AI strategy and roadmap to C-suite and board-level stakeholders"
      ],
      technologies: ["LangGraph", "CrewAI", "OpenAI Agents SDK", "GPT-4o", "Claude", "Databricks", "MLflow", "FastAPI"]
    },
    {
      title: "Co-Founder | CEO-Partnership Ventures",
      company: "DermaAI \u00b7 Recroid \u00b7 MagixDB",
      subtitle: "Built alongside active employment at Culinda Inc.",
      location: "India",
      period: "2021 - 2024",
      type: "Entrepreneurship",
      highlights: [
        "DermaAI - computer vision diagnostic platform for skin disease detection, from data collection through commercialisation",
        "Recroid - LLM fine-tuned automated recruitment engine; 100% agreement with the human shortlisting panel on a held-out candidate set",
        "MagixDB - NLP-powered universal database query engine spanning 25+ database types",
        "Formal CEO-partnership ventures with full timeline transparency and no conflict with primary responsibilities"
      ],
      technologies: ["Computer Vision", "Fine-tuned LLMs", "Q-LoRA", "Databricks", "NLP", "Medical Imaging"]
    },
    {
      title: "AI Advisor",
      company: "ChestIA.com | Yale University",
      location: "USA",
      period: "2022",
      type: "Advisory",
      highlights: [
        "Built ChestIA.com with Yale - computer vision models for chest disease detection from X-ray imaging",
        "Led hospital onboarding and clinical beta validation",
        "Enhanced model accuracy through advanced image augmentation techniques",
        "Collaborated with medical professionals on clinical validation"
      ],
      technologies: ["Medical Imaging", "Computer Vision", "Deep Learning", "Clinical AI"]
    },
    {
      title: "Founder",
      company: "NeedyData",
      location: "India / USA",
      period: "Mid-2019 - 2021",
      type: "Entrepreneurship",
      highlights: [
        "Founded during final UIUC semester; no-code ML-powered data cleaning SaaS",
        "Self-funded and operated full-time post-graduation",
        "Acquired by a Canadian firm in 2021"
      ],
      technologies: ["ML Pipelines", "No-code SaaS", "Data Quality", "Python"]
    },
    {
      title: "Masters Capstone - Data Science",
      company: "Delta Airlines (via UIUC)",
      location: "USA",
      period: "2019",
      type: "Capstone",
      highlights: [
        "On-site capstone delivered directly to Delta operations teams",
        "Predictive scheduling models to reduce cascading flight delays",
        "Worked with large-scale time-series data and optimisation algorithms"
      ],
      technologies: ["Predictive Modeling", "Time Series", "Optimization", "Big Data"]
    },
    {
      title: "Senior Machine Learning Engineer | ML Engineer",
      company: "Intel Deutschland / LnT Technology Services",
      location: "Germany",
      period: "2012 - 2018",
      type: "Full-time",
      highlights: [
        "Telecom log classification at 97% accuracy, saving 3,200 person-hours per month",
        "Large-scale distributed ML pipelines for industrial and telco datasets",
        "Designed scalable database schemas for log processing",
        "Led data ingestion and wrangling initiatives"
      ],
      technologies: ["Machine Learning", "Distributed Systems", "Classification", "Data Engineering"]
    }
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-background relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(23, 195, 178, 0.1) 0%, transparent 50%),
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
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
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
              className={`relative mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-6 top-8 w-4 h-4 bg-background border-4 border-teal-600 rounded-full shadow-lg z-10"></div>

              <div className="md:ml-20">
                {/* Glass Morphism Experience Card */}
                <div className="glass-card bg-gradient-to-br from-card/60 to-background/60 backdrop-blur-xl border border-border hover:border-border/80 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 isometric-card ar-hover group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-black text-foreground">{exp.title}</h3>
                        {exp.current && (
                          <Badge className="neo-brutal-btn-small bg-teal-500 text-black text-xs font-bold">
                            CURRENT
                          </Badge>
                        )}
                      </div>
                      {exp.subtitle && (
                        <p className="text-orange-400 font-bold mb-1">{exp.subtitle}</p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4 text-teal-400" />
                          <span className="font-medium text-muted-foreground">{exp.company}</span>
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
                    <Badge className="neo-brutal-btn-small bg-muted/80 text-muted-foreground border border-border mt-2 lg:mt-0 text-xs">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-foreground mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-orange-400" />
                      KEY ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-muted-foreground text-sm flex items-start">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-black text-foreground mb-3">TECHNOLOGIES & TOOLS</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIndex) => (
                        <Badge
                          key={tIndex}
                          className="neo-brutal-btn-small bg-muted/80 hover:bg-orange-500/20 text-muted-foreground hover:text-orange-400 text-xs py-1 px-3 border border-border hover:border-orange-500/30 transition-all duration-200"
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