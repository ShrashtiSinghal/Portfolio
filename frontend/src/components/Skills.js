import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Cloud, Database, Shield, Code, BarChart } from "lucide-react";

const Skills = () => {
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

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Brain className="w-8 h-8 text-teal-600" />,
      title: "Machine Learning & AI",
      color: "teal",
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
      icon: <Shield className="w-8 h-8 text-rose-600" />,
      title: "Security & Compliance",
      color: "rose",
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
      icon: <Cloud className="w-8 h-8 text-teal-600" />,
      title: "Cloud & DevOps",
      color: "teal",
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
      icon: <Code className="w-8 h-8 text-rose-600" />,
      title: "Programming & Frameworks",
      color: "rose",
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
      icon: <Database className="w-8 h-8 text-teal-600" />,
      title: "Databases & Storage",
      color: "teal",
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
      icon: <BarChart className="w-8 h-8 text-rose-600" />,
      title: "Data Visualization",
      color: "rose",
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
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Technical <span className="text-teal-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across the AI/ML technology stack with deep specialization in cybersecurity applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`p-4 rounded-xl bg-${category.color}-50 inline-flex group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mt-4 mb-4">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`text-xs py-1 px-3 bg-gray-100 text-gray-700 hover:bg-${category.color}-100 hover:text-${category.color}-700 transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-teal-50 to-rose-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">12+</div>
                  <div className="text-gray-700 font-medium">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">50+</div>
                  <div className="text-gray-700 font-medium">Technologies Mastered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
                  <div className="text-gray-700 font-medium">Major Projects Delivered</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;