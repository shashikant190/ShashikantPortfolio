import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Web Technologies",
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React.js", level: 85 },
        { name: "JavaScript", level: 92 },
        { name: "HTML/CSS", level: 88 }
      ]
    },
    {
      icon: <Database size={32} />,
      title: "Backend & Database",
      skills: [
        { name: "Python", level: 85 },
        { name: "Flask", level: 78 },
        { name: "PostgreSQL", level: 82 },
        { name: "Supabase", level: 88 }
      ]
    },
    {
      icon: <Cloud size={32} />,
      title: "Deployment & Tools",
      skills: [
        { name: "Vercel", level: 90 },
        { name: "Git", level: 85 },
        { name: "Plesk", level: 75 },
        { name: "Namecheap", level: 78 }
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Game Development",
      skills: [
        { name: "Phaser.js", level: 82 },
        { name: "Game Logic", level: 78 },
        { name: "Animation", level: 75 },
        { name: "Audio Integration", level: 70 }
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: "AI & Automation",
      skills: [
        { name: "LLM Integration", level: 80 },
        { name: "Chatbot Development", level: 85 },
        { name: "Admin Automation", level: 78 },
        { name: "Data Processing", level: 75 }
      ]
    },
    {
      icon: <Settings size={32} />,
      title: "Business Operations",
      skills: [
        { name: "Client Engagement", level: 88 },
        { name: "Project Management", level: 82 },
        { name: "Documentation", level: 85 },
        { name: "Process Optimization", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-maroon-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-maroon-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiencies across various technologies and domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-maroon-500/20 rounded-xl p-6 hover:border-maroon-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-maroon-500/10"
              >
                <div className="flex items-center mb-6">
                  <div className="text-maroon-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-maroon-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-maroon-600 to-maroon-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-maroon-400">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'SQL', 'Tailwind CSS', 'Authentication', 'Real-time Data', 'SEO Optimization', 'Responsive Design',
                'API Integration', 'Database Design', 'Web Hosting', 'Performance Optimization', 'UI/UX', 'Deployment'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 border border-maroon-500/30 rounded-full text-sm font-medium hover:bg-maroon-500/20 hover:border-maroon-500/50 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;