import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, LinkedinIcon } from "lucide-react";

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
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-bold text-xl cursor-pointer transition-transform hover:scale-105"
            onClick={() => scrollToSection("hero")}
          >
            <span className="text-black">Shrashti</span>
            <span className="text-teal-600 ml-1">Singhal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-teal-600 font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => window.open("https://linkedin.com/in/shrashtisinghal", "_blank")}
            >
              <LinkedinIcon className="w-4 h-4 mr-2" />
              Connect
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t">
            <nav className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-700 hover:text-teal-600 font-medium transition-colors w-full text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-full mt-4"
                onClick={() => window.open("https://linkedin.com/in/shrashtisinghal", "_blank")}
              >
                <LinkedinIcon className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;