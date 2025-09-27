import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Target, BookOpen } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-teal-600" />,
      title: "AI Innovation Leader",
      description: "Pioneering secure, scalable AI/ML systems with advanced LLM-based threat detection and RAG pipelines"
    },
    {
      icon: <Users className="w-6 h-6 text-rose-600" />,
      title: "Team Builder",
      description: "Building and mentoring high-performing data science teams, driving innovation at scale"
    },
    {
      icon: <Target className="w-6 h-6 text-teal-600" />,
      title: "Business Impact",
      description: "Translating complex AI technologies into actionable insights for C-suite stakeholders"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-rose-600" />,
      title: "Thought Leader",
      description: "Author and contributor to leading publications on AI, ML, and data science best practices"
    }
  ];

  const educationAndAchievements = [
    {
      type: "Education",
      items: [
        {
          title: "Master's in Computer Science - Data Science",
          institution: "University of Illinois at Urbana-Champaign, USA",
          year: "2018-2019",
          highlight: true
        },
        {
          title: "Bachelor of Technology - Computer Science",
          institution: "Amity School of Engineering and Technology, India",
          year: "2008-2012"
        }
      ]
    },
    {
      type: "Publications & Recognition",
      items: [
        {
          title: "Journey to the Ultimate AI: Future of Humanity",
          institution: "Science Fiction Novel - Amazon",
          description: "Exploring philosophical implications of AI advancement"
        },
        {
          title: "Technical Articles on AI/ML",
          institution: "Towards Data Science & Towards AI (Medium)",
          description: "Contributing to leading data science publications"
        }
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
            About <span className="text-teal-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Passionate about aligning next-gen AI architectures with real-world business impact
          </p>
        </div>

        {/* Professional Story */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8 sm:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Currently leading AI initiatives at <span className="font-semibold text-teal-600">Culinda Inc.</span>, where I spearhead the development of advanced ML solutions to proactively identify and mitigate vulnerabilities in healthcare infrastructure. My expertise spans integrating AI with EDR, threat intelligence platforms, and regulatory-compliant environments including HIPAA and ISO 27001.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  I serve as an <span className="font-semibold text-rose-600">academic advisor</span>, collaborating with leading U.S. research institutions on AI-driven disease diagnostics using medical imaging. This dual role allows me to bridge cutting-edge research with practical, production-ready solutions.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  My journey in AI spans from founding multiple successful startups including <span className="font-semibold">DermaAI</span>, <span className="font-semibold">ChestAI</span>, and <span className="font-semibold">NeedyData</span> (acquired by a Canadian firm) to working with Fortune 500 companies like Delta Airlines and Intel Deutschland.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Highlights */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-light text-black mb-8 text-center">Key Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-teal-50 transition-colors duration-300">
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-black mb-3">{highlight.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {educationAndAchievements.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-6 flex items-center">
                  {section.type}
                  <div className="ml-3 w-12 h-0.5 bg-teal-600"></div>
                </h3>
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-gray-100 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-600 rounded-full"></div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">{item.title}</h4>
                        <p className="text-teal-600 text-sm font-medium mb-2">{item.institution}</p>
                        {item.year && (
                          <Badge variant="secondary" className="text-xs mb-2">
                            {item.year}
                          </Badge>
                        )}
                        {item.description && (
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;