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
      action: () => window.open("https://linkedin.com/in/shrashtisinghal", "_blank")
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
    <section id="contact" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Let's <span className="text-teal-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Ready to discuss AI innovations, collaboration opportunities, or just want to chat about the future of technology?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">Get In Touch</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm always excited to connect with fellow innovators, potential collaborators, and anyone passionate about AI and technology. Whether you're looking to discuss a project, explore opportunities, or simply want to exchange ideas about the future of artificial intelligence.
                </p>
              </div>

              {/* Primary CTA */}
              <Card className="bg-gradient-to-br from-teal-50 to-rose-50 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <LinkedinIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-black mb-2">Connect on LinkedIn</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    The best way to reach me and stay updated with my latest work
                  </p>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
                    onClick={() => window.open("https://linkedin.com/in/shrashtisinghal", "_blank")}
                  >
                    <LinkedinIcon className="w-4 h-4 mr-2" />
                    Connect Now
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={index} 
                    className={`bg-white hover:shadow-md transition-all duration-300 border-0 ${contact.action ? 'cursor-pointer hover:-translate-y-1' : ''}`}
                    onClick={contact.action}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-50 rounded-full">
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-black text-sm">{contact.title}</h4>
                          <p className="text-gray-600 text-sm">{contact.value}</p>
                        </div>
                        {contact.action && (
                          <div className="text-gray-400">
                            <Send className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-black mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-colors resize-none"
                      placeholder="Tell me about your project, idea, or just say hello..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg transition-all duration-200 hover:scale-105 font-medium"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Alternative Contact Note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Prefer a direct conversation? 
                <button 
                  className="text-teal-600 hover:text-teal-700 font-medium ml-1 transition-colors"
                  onClick={() => window.open("https://linkedin.com/in/shrashtisinghal", "_blank")}
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