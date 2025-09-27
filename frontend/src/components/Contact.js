import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { LinkedinIcon, Github, Mail, MapPin, BookOpen, Send, Cpu, Shield, Zap } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

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

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - in real implementation, this would send data to backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-teal-600" />,
      title: "Email",
      value: "shrashtisinghal@gmail.com",
      action: () => window.open("mailto:shrashtisinghal@gmail.com")
    },
    {
      icon: <LinkedinIcon className="w-6 h-6 text-blue-600" />,
      title: "LinkedIn",
      value: "Connect with me",
      action: () => window.open("https://www.linkedin.com/in/shrashti-singhal-1869166b/", "_blank")
    },
    {
      icon: <Github className="w-6 h-6 text-gray-700" />,
      title: "GitHub",
      value: "View my code",
      action: () => window.open("https://github.com/shrashtisinghal", "_blank")
    },
    {
      icon: <BookOpen className="w-6 h-6 text-rose-600" />,
      title: "Medium",
      value: "Read my articles",
      action: () => window.open("https://medium.com/@shrashtisinghal", "_blank")
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Location",
      value: "Delhi, India",
      action: null
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 bg-black relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(23, 195, 178, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)
        `
      }}
    >
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, index) => (
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
            {index % 3 === 0 ? <Mail className="w-8 h-8" /> : 
             index % 3 === 1 ? <LinkedinIcon className="w-6 h-6" /> : 
             <Send className="w-7 h-7" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Neo-Brutalism Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-8">
            <div className="neo-brutal-btn bg-gradient-to-r from-orange-500 to-teal-500 text-black font-black px-8 py-4 transform rotate-1 shadow-md">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                LET'S CONNECT
              </h2>
            </div>
          </div>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Ready to discuss <span className="text-orange-400 font-bold">AI innovations</span>, 
            <span className="text-teal-400 font-bold"> collaboration opportunities</span>, or just want to chat about 
            <span className="text-orange-400 font-bold"> the future of technology</span>?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information with Glass Morphism */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-black text-white mb-4">GET IN TOUCH</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm always excited to connect with fellow <span className="text-teal-400 font-bold">innovators</span>, 
                  potential <span className="text-orange-400 font-bold">collaborators</span>, and anyone passionate about AI and technology. 
                  Whether you're looking to discuss a project, explore opportunities, or simply want to exchange ideas about 
                  <span className="text-teal-400 font-bold"> the future of artificial intelligence</span>.
                </p>
              </div>

              {/* Primary CTA with Glass Morphism */}
              <div className="glass-card bg-gradient-to-br from-teal-500/20 to-orange-500/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg isometric-card">
                <LinkedinIcon className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-pulse" />
                <h4 className="font-black text-white mb-3 text-xl text-center">CONNECT ON LINKEDIN</h4>
                <p className="text-gray-300 text-sm mb-6 text-center">
                  The best way to reach me and stay updated with my latest work
                </p>
                <Button 
                  className="neo-brutal-btn w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-black py-3 transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={() => window.open("https://www.linkedin.com/in/shrashti-singhal-1869166b/", "_blank")}
                >
                  <LinkedinIcon className="w-4 h-4 mr-2" />
                  CONNECT NOW
                </Button>
              </div>

              {/* Contact Methods with Glass Morphism */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index} 
                    className={`glass-card bg-black/40 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 isometric-card ${contact.action ? 'cursor-pointer hover:-translate-y-1 ar-hover' : ''}`}
                    onClick={contact.action}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-white/10">
                        <div className="text-gray-300">
                          {contact.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-sm">{contact.title}</h4>
                        <p className="text-gray-400 text-sm">{contact.value}</p>
                      </div>
                      {contact.action && (
                        <div className="text-teal-400">
                          <Send className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form with Glass Morphism */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-lg isometric-card">
              <h3 className="text-2xl font-black text-white mb-6 neon-text-teal">SEND A MESSAGE</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project, idea, or just say hello..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="neo-brutal-btn w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-black font-black py-4 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Alternative Contact Note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Prefer a direct conversation? 
                <button 
                  className="text-teal-400 hover:text-white font-bold ml-1 transition-colors hover:neon-glow-teal"
                  onClick={() => window.open("https://www.linkedin.com/in/shrashti-singhal-1869166b/", "_blank")}
                >
                  Message me on LinkedIn
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;