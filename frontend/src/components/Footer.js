import React from "react";
import { LinkedinIcon, Github, BookOpen, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "https://linkedin.com/in/shrashtisinghal",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/shrashtisinghal", 
      label: "GitHub"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      href: "https://medium.com/@shrashtisinghal",
      label: "Medium"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:shrashtisinghal@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">
                  <span className="text-white">Shrashti</span>
                  <span className="text-teal-400 ml-1">Singhal</span>
                </h3>
                <p className="text-gray-400 mt-2">AI Engineer | Chief Data Scientist | Product Manager</p>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Transforming complex AI technologies into real-world solutions across cybersecurity, 
                healthcare, and data intelligence. Building the future, one algorithm at a time.
              </p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-teal-600 transition-all duration-200 hover:scale-110 group"
                    aria-label={link.label}
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:shrashtisinghal@gmail.com"
                    className="text-white hover:text-teal-400 transition-colors"
                  >
                    shrashtisinghal@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Delhi, India</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Portfolio</p>
                  <p className="text-white">Available worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Shrashti Singhal. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>and AI expertise</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;