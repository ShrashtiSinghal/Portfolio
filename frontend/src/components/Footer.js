import React from "react";
import { LinkedinIcon, Github, BookOpen, Mail, Heart, Cpu, Shield, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "https://linkedin.com/in/shrashtisinghal",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:neon-glow-teal"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/shrashtisinghal", 
      label: "GitHub",
      color: "hover:text-gray-300 hover:neon-glow-orange"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      href: "https://medium.com/@shrashtisinghal",
      label: "Medium",
      color: "hover:text-green-400 hover:neon-glow-teal"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:shrashtisinghal@gmail.com",
      label: "Email",
      color: "hover:text-orange-400 hover:neon-glow-orange"
    }
  ];

  const quickLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`absolute opacity-5 ${index % 2 === 0 ? 'text-orange-400' : 'text-teal-400'} animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {index % 3 === 0 ? <Cpu className="w-12 h-12" /> : 
             index % 3 === 1 ? <Shield className="w-10 h-10" /> : 
             <Zap className="w-8 h-8" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Brand Section with Glass Morphism */}
            <div className="md:col-span-2">
              <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 isometric-card">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-teal-500 rounded-lg transform rotate-12 animate-pulse-slow"></div>
                    <h3 className="text-2xl font-black">
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Shrashti</span>
                      <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent ml-2 neon-glow-orange">Singhal</span>
                    </h3>
                  </div>
                  <div className="neo-brutal-btn-small bg-gradient-to-r from-teal-500 to-orange-500 text-black font-black px-4 py-2 inline-block">
                    AI ENGINEER | DATA SCIENTIST | PRODUCT MANAGER
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                  Transforming complex <span className="text-orange-400 font-bold">AI technologies</span> into real-world solutions across 
                  <span className="text-teal-400 font-bold"> cybersecurity</span>, healthcare, and data intelligence. 
                  <span className="text-white font-bold"> Building the future, one algorithm at a time</span>.
                </p>
                
                {/* 3D Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`isometric-social-btn glass-card p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl ${link.color} text-gray-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group`}
                      aria-label={link.label}
                    >
                      <div className="transition-transform duration-200 group-hover:animate-pulse">
                        {link.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links with Neo-Brutalism */}
            <div>
              <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full">
                <h4 className="text-lg font-black mb-6 text-white neon-text-teal">QUICK LINKS</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-2 transform font-bold text-sm tracking-wide hover:neon-glow-orange"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info with 3D Effects */}
            <div>
              <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full isometric-card">
                <h4 className="text-lg font-black mb-6 text-white neon-text-orange">GET IN TOUCH</h4>
                <div className="space-y-4">
                  <div className="group">
                    <p className="text-gray-500 text-sm font-bold tracking-wide">EMAIL</p>
                    <a 
                      href="mailto:shrashtisinghal@gmail.com"
                      className="text-white hover:text-teal-400 transition-colors text-sm font-medium hover:neon-glow-teal"
                    >
                      shrashtisinghal@gmail.com
                    </a>
                  </div>
                  <div className="group">
                    <p className="text-gray-500 text-sm font-bold tracking-wide">LOCATION</p>
                    <p className="text-white text-sm font-medium">Delhi, India</p>
                  </div>
                  <div className="group">
                    <p className="text-gray-500 text-sm font-bold tracking-wide">PORTFOLIO</p>
                    <p className="text-orange-400 text-sm font-bold">Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer with Neo-Brutalism */}
        <div className="border-t border-white/10 py-6">
          <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0 font-medium">
                © {currentYear} <span className="text-white font-bold">Shrashti Singhal</span>. All rights reserved.
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <span className="mr-2">Built with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
                <span className="ml-2">and <span className="text-orange-400 font-bold">AI expertise</span></span>
                <div className="ml-3 flex items-center gap-1">
                  <Cpu className="w-4 h-4 text-teal-400 animate-pulse" />
                  <Shield className="w-4 h-4 text-orange-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;