import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, LinkedinIcon, Zap } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "HOME", id: "hero" },
    { label: "ABOUT", id: "about" },
    { label: "SKILLS", id: "skills" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "PROJECTS", id: "projects" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-brutal"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Neo-Brutalism Logo */}
          <div 
            className="font-black text-xl cursor-pointer transition-transform hover:scale-105 group"
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-teal-500 rounded transform rotate-45 group-hover:-rotate-45 transition-transform duration-300"></div>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Shrashti</span>
              <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">Singhal</span>
            </div>
          </div>

          {/* Desktop Navigation with Glass Morphism */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="glass-nav-item px-4 py-2 rounded-lg font-bold text-sm text-gray-300 hover:text-white transition-all duration-200 hover:bg-white/10 hover:backdrop-blur-md border border-transparent hover:border-white/20 hover:shadow-lg hover:-translate-y-0.5 hover:neon-glow-teal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Neo-Brutalism Connect Button */}
            <Button
              className="neo-brutal-btn-small bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-black font-black px-6 py-2 ml-4 transform hover:scale-105 hover:-rotate-1 transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={() => window.open("https://www.linkedin.com/in/shrashti-singhal-1869166b/", "_blank")}
            >
              <LinkedinIcon className="w-4 h-4 mr-2" />
              CONNECT
            </Button>
          </nav>

          {/* Mobile menu button with 3D effect */}
          <button
            className="md:hidden p-3 glass-card bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-gray-300 hover:text-white transition-all duration-200 hover:bg-white/20 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with Glass Morphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card bg-black/95 backdrop-blur-2xl border border-white/20 rounded-2xl mt-4 shadow-brutal animate-slide-down">
            <nav className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-white/10 hover:backdrop-blur-md border border-transparent hover:border-white/20 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="w-full neo-brutal-btn bg-gradient-to-r from-teal-500 to-teal-400 text-black font-black py-3 mt-4 transform hover:scale-105 transition-all duration-200 shadow-md"
                onClick={() => window.open("https://www.linkedin.com/in/shrashti-singhal-1869166b/", "_blank")}
              >
                <LinkedinIcon className="w-4 h-4 mr-2" />
                CONNECT ON LINKEDIN
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;