import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Calendar, Building, User, TrendingUp, Filter, Grid, List } from "lucide-react";
import { mockProjects } from "../data/mockProjects";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
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
      case "Active": return "bg-green-100 text-green-700";
      case "Completed": return "bg-blue-100 text-blue-700"; 
      case "Acquired": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Major <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            15+ transformative AI/ML projects spanning cybersecurity, healthcare, and data intelligence
          </p>
        </div>

        {/* Featured Projects Highlight */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-light text-black mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-gradient-to-br from-teal-50 to-rose-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 cursor-pointer group"
                onClick={() => handleProjectClick(project)}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-black mb-2 text-sm line-clamp-2">{project.title}</h4>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters and View Toggle */}
        <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`text-xs ${
                      selectedCategory === category 
                        ? "bg-teal-600 hover:bg-teal-700" 
                        : "border-gray-300 hover:border-teal-600 hover:text-teal-600"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="p-2"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm" 
                onClick={() => setViewMode("list")}
                className="p-2"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 cursor-pointer group"
                  onClick={() => handleProjectClick(project)}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-black text-lg line-clamp-2 flex-1">{project.title}</h3>
                        <Badge className={`text-xs ml-2 ${getStatusColor(project.status)}`}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="w-3 h-3" />
                          <span>{project.company}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="bg-white hover:shadow-lg transition-all duration-300 border-0 cursor-pointer group"
                  onClick={() => handleProjectClick(project)}
                >
                  <CardContent className="p-6">
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
                          <h3 className="font-semibold text-black text-xl">{project.title}</h3>
                          <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                            {project.status}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                        
                        <div className="flex items-center gap-6 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Building className="w-3 h-3" />
                            <span>{project.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{project.role}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <Card className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-black mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span>{selectedProject.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{selectedProject.role}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedProject.year}</span>
                      </div>
                      <Badge className={`${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" onClick={closeModal} className="p-2">
                    <span className="sr-only">Close</span>
                    ✕
                  </Button>
                </div>
                
                <div className="mb-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Project Overview</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.longDescription}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-teal-600" />
                      Key Impact & Results
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.impact.map((impact, index) => (
                        <li key={index} className="text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;