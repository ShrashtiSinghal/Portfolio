import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Calendar, Building, User, TrendingUp, Filter, Grid, List, Cpu, Shield, Zap } from "lucide-react";
import { mockProjects } from "../data/mockProjects";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial visibility to true for mobile to prevent empty screen
    const checkMobile = () => window.innerWidth <= 768;
    if (checkMobile()) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '50px' } // Reduced threshold and added margin for better mobile detection
    );

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    // Add resize listener to handle orientation changes
    const handleResize = () => {
      if (checkMobile()) {
        setIsVisible(true);
      }
    };
    window.addEventListener('resize', handleResize);

    // Fallback timer to ensure content is visible after 2 seconds
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const categories = ["All", ...new Set(mockProjects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === "All" 
    ? mockProjects 
    : mockProjects.filter(project => project.category === selectedCategory);

  const featuredProjects = mockProjects.filter(project => project.featured);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Completed": return "bg-blue-500/20 text-blue-400 border-blue-500/30"; 
      case "Acquired": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-black relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(23, 195, 178, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)
        `
      }}
    >
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, index) => (
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
            {index % 3 === 0 ? <Cpu className="w-8 h-8" /> : 
             index % 3 === 1 ? <Shield className="w-6 h-6" /> : 
             <Zap className="w-7 h-7" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Neo-Brutalism Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 sm:mb-8">
            <div className="neo-brutal-btn bg-gradient-to-r from-teal-500 to-orange-500 text-black font-black px-4 py-3 sm:px-8 sm:py-4 transform -rotate-1 shadow-md">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                MAJOR PROJECTS
              </h2>
            </div>
          </div>
          <p className="text-base sm:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
            <span className="text-orange-400 font-bold">15 transformative AI/ML projects</span> spanning 
            <span className="text-teal-400 font-bold"> cybersecurity</span>, healthcare, and 
            <span className="text-orange-400 font-bold"> data intelligence</span>
          </p>
        </div>

        {/* Featured Projects Highlight with Dark Theme */}
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 text-center px-4">FEATURED PROJECTS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Glass Morphism Featured Card */}
                <div className="glass-card bg-gradient-to-br from-orange-500/10 to-teal-500/10 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 isometric-card ar-hover">
                  <div className="mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-40 sm:h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-black text-white mb-2 text-sm sm:text-base line-clamp-2">{project.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-3">{project.description}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <Badge className={`neo-brutal-btn-small text-xs font-bold border w-fit ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  
                  {/* Floating Corner Element */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${index % 2 === 0 ? 'from-orange-500 to-orange-400' : 'from-teal-500 to-teal-400'} rounded-full animate-pulse-glow`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and View Toggle with Glass Morphism */}
        <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-md">
            <div className="flex flex-col gap-4">
              {/* Filters Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300 text-sm font-bold">FILTER:</span>
                </div>
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`neo-brutal-btn-small text-xs font-bold transition-all duration-200 px-3 py-1 ${
                        selectedCategory === category 
                          ? "bg-teal-600 hover:bg-teal-700 text-black" 
                          : "bg-transparent border-2 border-gray-600 text-gray-300 hover:border-teal-400 hover:text-teal-400"
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* View Toggle Row */}
              <div className="flex justify-between items-center">
                <div className="text-gray-400 text-sm">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </div>
                <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? 'bg-teal-600 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm" 
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? 'bg-teal-600 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid/List with Dark Theme */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="glass-card bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer isometric-card ar-hover group"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <h3 className="font-black text-white text-base sm:text-lg line-clamp-2 flex-1">{project.title}</h3>
                      <Badge className={`neo-brutal-btn-small text-xs font-bold border w-fit ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-teal-400" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Building className="w-3 h-3 text-orange-400" />
                        <span className="line-clamp-1">{project.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} className="neo-brutal-btn-small bg-gray-800/80 text-gray-300 text-xs border border-gray-700/50">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge className="neo-brutal-btn-small bg-gray-800/80 text-gray-300 text-xs border border-gray-700/50">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Floating Corner Element */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${index % 2 === 0 ? 'from-orange-500 to-orange-400' : 'from-teal-500 to-teal-400'} rounded-full animate-pulse-glow`}></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="glass-card bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer isometric-card ar-hover group"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-32 md:h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:w-3/4 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-black text-white text-xl">{project.title}</h3>
                        <Badge className={`neo-brutal-btn-small text-xs font-bold border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                      
                      <div className="flex items-center gap-6 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-teal-400" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="w-3 h-3 text-orange-400" />
                          <span>{project.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3 text-teal-400" />
                          <span>{project.role}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} className="neo-brutal-btn-small bg-gray-800/80 text-gray-300 text-xs border border-gray-700/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Project Detail Modal with Dark Theme */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="glass-card bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-2xl border border-white/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-xl" onClick={e => e.stopPropagation()}>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="flex-1 pr-4">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-2 line-clamp-3">{selectedProject.title}</h2>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
                        <span className="line-clamp-1">{selectedProject.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                        <span className="line-clamp-1">{selectedProject.role}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
                        <span>{selectedProject.year}</span>
                      </div>
                      <Badge className={`neo-brutal-btn-small font-bold border text-xs ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={closeModal} 
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full flex-shrink-0"
                  >
                    <span className="sr-only">Close</span>
                    <span className="text-lg">✕</span>
                  </Button>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
                  />
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white mb-3">PROJECT OVERVIEW</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedProject.longDescription}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-400" />
                      KEY IMPACT & RESULTS
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.impact.map((impact, index) => (
                        <li key={index} className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white mb-3">TECHNOLOGIES & TOOLS</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} className="neo-brutal-btn-small bg-gray-800/80 text-gray-300 text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 border border-gray-700/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;