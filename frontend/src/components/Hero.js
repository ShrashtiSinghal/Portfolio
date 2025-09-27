import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowDown, LinkedinIcon, Github, BookOpen } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "AI Engineer",
    "Chief Data Scientist", 
    "Product Manager",
    "LLM & RAG Expert",
    "Cybersecurity Innovator"
  ];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-rose-50/30 to-teal-50/40 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100/80 text-teal-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
              
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black tracking-tight leading-tight">
                  Shrashti
                  <br />
                  <span className="text-teal-600">Singhal</span>
                </h1>
                <div className="mt-4 h-8 overflow-hidden">
                  <p className="text-xl sm:text-2xl text-gray-600 font-light animate-fade-in-up">
                    {roles[currentRole]}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 font-light leading-relaxed max-w-xl">
                Accomplished AI Leader with <span className="font-medium text-rose-600">12+ years</span> of experience 
                architecting production-grade AI solutions across cybersecurity, healthcare, and cloud-native ecosystems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
                onClick={() => window.open("https://linkedin.com/in/shrashtisinghal", "_blank")}
              >
                <LinkedinIcon className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-4">
                <button 
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 hover:bg-teal-50"
                  onClick={() => window.open("https://github.com/shrashtisinghal", "_blank")}
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </button>
                <button 
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 hover:bg-rose-50"
                  onClick={() => window.open("https://medium.com/@shrashtisinghal", "_blank")}
                >
                  <BookOpen className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-rose-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              
              {/* Professional Image */}
              <div className="relative z-10 bg-white rounded-2xl p-2 shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_187402a5-927c-41c5-9be1-d079b56e1d1d/artifacts/hau4yul2_MyPIc.jpg"
                  alt="Shrashti Singhal - AI Engineer and Data Scientist"
                  className="w-full h-auto rounded-xl object-cover"
                  style={{ aspectRatio: "4/5" }}
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -left-8 top-1/3 bg-white rounded-xl p-4 shadow-lg animate-float">
                <div className="text-2xl font-bold text-teal-600">12+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="absolute -right-8 bottom-1/3 bg-white rounded-xl p-4 shadow-lg animate-float delay-500">
                <div className="text-2xl font-bold text-rose-600">15+</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;