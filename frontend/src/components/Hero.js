import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowDown, LinkedinIcon, Github, BookOpen, Cpu, Shield, Zap } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(roleInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingElements = [
    { icon: <Cpu className="w-6 h-6" />, color: "text-orange-400", position: { top: "20%", left: "10%" } },
    { icon: <Shield className="w-5 h-5" />, color: "text-teal-400", position: { top: "60%", right: "15%" } },
    { icon: <Zap className="w-4 h-4" />, color: "text-orange-300", position: { top: "30%", right: "20%" } },
    { icon: <Cpu className="w-5 h-5" />, color: "text-teal-300", position: { top: "70%", left: "20%" } },
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen relative bg-black overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(23, 195, 178, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)
        `
      }}
    >
      {/* Floating 3D Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.color} opacity-20 animate-float`}
          style={{ 
            ...element.position,
            animationDelay: `${index * 0.5}s`,
            transform: `perspective(1000px) rotateX(${Math.sin(Date.now() * 0.001 + index) * 20}deg) rotateY(${Math.cos(Date.now() * 0.001 + index) * 20}deg)`
          }}
        >
          {element.icon}
        </div>
      ))}

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-800"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                {/* Neo-Brutalism Badge - Updated Text */}
                <div className="inline-flex items-center">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-black font-black px-6 py-3 transform -rotate-2 neo-brutal-btn-small animate-pulse-glow">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-black rounded-full animate-ping"></span>
                      AVAILABLE FOR CONSULTANCY
                    </span>
                  </div>
                </div>
                
                <div>
                  {/* Glass Morphism Name Container - Fixed Spacing */}
                  <div className="glass-card p-6 sm:p-8 border border-white/20 backdrop-blur-xl bg-white/5 rounded-2xl mb-8 shadow-lg">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Shrashti
                      </span>
                      <br />
                      {/* Reduced Neon Glow with proper spacing */}
                      <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-teal-400 bg-clip-text text-transparent animate-gradient-x neon-glow-subtle">
                        Singhal
                      </span>
                    </h1>
                    
                    {/* Role display inside the card to prevent overlap */}
                    <div className="h-8 overflow-hidden">
                      <p className="text-lg sm:text-xl text-teal-400 font-light animate-fade-in-up">
                        {roles[currentRole]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3D Isometric Description Box - Reduced Shadow */}
                <div className="isometric-card bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md border border-teal-500/30 p-6 rounded-xl shadow-md">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Accomplished AI Leader with <span className="font-black text-orange-400">12+ years</span> of experience 
                    architecting production-grade AI solutions across <span className="font-bold text-teal-400">cybersecurity</span>, 
                    <span className="font-bold text-teal-400"> healthcare</span>, and 
                    <span className="font-bold text-orange-400"> cloud-native ecosystems</span>.
                  </p>
                </div>
              </div>

              {/* Neo-Brutalism Buttons - Reduced Shadows */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="neo-brutal-btn bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-black font-black px-8 py-4 text-lg transform hover:scale-105 hover:-rotate-1 transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={() => scrollToSection("projects")}
                >
                  VIEW MY WORK
                  <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
                </Button>
                <Button
                  className="neo-brutal-btn-outline border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black font-black px-8 py-4 text-lg transform hover:scale-105 hover:rotate-1 transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={() => window.open("https://linkedin.com/in/shrashtisinghal", "_blank")}
                >
                  <LinkedinIcon className="w-5 h-5 mr-2" />
                  CONNECT NOW
                </Button>
              </div>

              {/* Social Links with 3D Effect - Reduced Shadows */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, url: "https://github.com/shrashtisinghal", color: "hover:text-orange-400" },
                    { icon: <BookOpen className="w-5 h-5" />, url: "https://medium.com/@shrashtisinghal", color: "hover:text-teal-400" },
                  ].map((social, index) => (
                    <button 
                      key={index}
                      className={`isometric-social-btn glass-card p-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl ${social.color} text-gray-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg`}
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
                <div className="text-sm text-gray-400 font-mono">
                  <span className="font-bold text-teal-400">LOCATION:</span> Delhi, India
                </div>
              </div>
            </div>

            {/* Right Content - Profile Picture with 3D Effects - Reduced Shadows */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative flex justify-center">
                {/* 3D Isometric Background */}
                <div className="absolute -inset-8">
                  <div className="isometric-bg w-full h-full bg-gradient-to-br from-orange-500/20 via-transparent to-teal-500/20 rounded-3xl blur-xl animate-pulse-slow"></div>
                </div>

                {/* Glass Morphism Container - Reduced Shadow */}
                <div className="glass-card relative z-10 p-4 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-lg">
                  {/* Passport Size Professional Image */}
                  <div className="relative w-48 h-60 sm:w-56 sm:h-70 overflow-hidden rounded-2xl">
                    <img
                      src="https://customer-assets.emergentagent.com/job_187402a5-927c-41c5-9be1-d079b56e1d1d/artifacts/hau4yul2_MyPIc.jpg"
                      alt="Shrashti Singhal - AI Engineer and Data Scientist"
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                    />
                    {/* Neo-Brutalism Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Floating 3D Stats - Reduced Shadows */}
                  <div className="absolute -left-6 top-8 glass-card bg-gradient-to-r from-orange-500/90 to-orange-400/90 backdrop-blur-md text-black px-4 py-3 rounded-xl shadow-md transform -rotate-3 animate-float">
                    <div className="text-xl font-black">12+</div>
                    <div className="text-xs font-bold">YEARS</div>
                  </div>
                  
                  <div className="absolute -right-6 bottom-8 glass-card bg-gradient-to-r from-teal-500/90 to-teal-400/90 backdrop-blur-md text-black px-4 py-3 rounded-xl shadow-md transform rotate-2 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="text-xl font-black">15</div>
                    <div className="text-xs font-bold">PROJECTS</div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="relative w-full h-full">
                    {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                      <div
                        key={index}
                        className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${degree}deg) translateX(140px) rotate(-${degree}deg)`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;