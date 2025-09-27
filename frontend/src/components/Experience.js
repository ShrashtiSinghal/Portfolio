import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("experience");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
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
    <section id="experience" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Professional <span className="text-teal-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            A journey of innovation, leadership, and transformative AI solutions across diverse industries
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-600 via-rose-400 to-teal-600"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-6 top-8 w-4 h-4 bg-white border-4 border-teal-600 rounded-full shadow-lg"></div>
              
              <div className="md:ml-20">
                <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 group">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-black">{exp.title}</h3>
                          {exp.current && (
                            <Badge className="bg-teal-100 text-teal-700 text-xs">Current</Badge>
                          )}
                        </div>
                        {exp.subtitle && (
                          <p className="text-rose-600 font-medium mb-1">{exp.subtitle}</p>
                        )}
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-2 lg:mt-0 text-xs">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-teal-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-gray-700 text-sm flex items-start">
                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <Badge 
                            key={tIndex}
                            variant="secondary"
                            className="text-xs py-1 px-3 bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700 transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;