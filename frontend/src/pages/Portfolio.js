import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />

        {/* Contact Anchor / Call to Action */}
        <section id="contact" className="py-20 text-center relative z-10">
          <h2 className="text-3xl font-black text-foreground mb-6">READY TO INNOVATE?</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto px-4">
            I'm just a message away. Use the chat assistant in the bottom right corner to connect!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;