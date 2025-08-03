import React from 'react';
import { User, Target, Award, TrendingUp } from 'lucide-react';

const ProfessionalSummary = () => {
  const highlights = [
    {
      icon: <User size={24} />,
      title: "Full Stack Developer",
      description: "Next.js, Supabase & Python"
    },
    {
      icon: <Target size={24} />,
      title: "5+ Live Projects",
      description: "Successfully deployed"
    },
    {
      icon: <Award size={24} />,
      title: "5+ Certifications",
      description: "Google, Microsoft, TCS"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Multi-role Experience",
      description: "Tech & Business Operations"
    }
  ];

  return (
    <section id="summary" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-maroon-400 bg-clip-text text-transparent">
              Professional Summary
            </h2>
            <div className="w-24 h-1 bg-maroon-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Software Developer with a strong foundation in web development, full-stack project execution, and automation. 
                Experienced in building interactive platforms using JavaScript, Next.js, Supabase, and Python.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Known for delivering high-performance code, managing deployments, and collaborating cross-functionally. 
                Driven by clarity, ownership, and a continuous learning mindset, with hands-on experience in both 
                technical development and business operations.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {['JavaScript', 'Next.js', 'Python', 'Supabase', 'PostgreSQL', 'Phaser.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 border border-maroon-500/30 rounded-full text-sm font-medium hover:bg-maroon-500/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-maroon-500/20 rounded-xl p-6 hover:border-maroon-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-maroon-500/10"
                >
                  <div className="text-maroon-400 mb-3">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;