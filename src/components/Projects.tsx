import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
// import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Bharat Entrepreneurs Network Portal",
      category: "web",
      description: "Full-stack portal for entrepreneurs to create profiles and network with real-time authentication",
      image: "/BENweb.png",
      tech: ["Next.js", "Supabase", "PostgreSQL", "Authentication"],
      // github: "https://github.com/shashikant190/ben-community",
      live: "https://ben-community.vercel.app/",
      featured: true
    },
    {
      title: "JyoTax Web Platform",
      category: "web",
      description: "Redesigned static website into responsive, fast-loading platform with improved UI/UX and SEO",
      image: "Jyotaxweb.png",
      tech: ["Next.js", "Tailwind CSS", "SEO", "Responsive Design"],
      // github: "https://github.com/shashikant190/JyotaxWebPlatform",
      live: "https://jyotax.ai/",
      featured: true
    },
          {
      title: "Ai Tutor for History Subject (MCA Project)",
      category: "ai",
      description: "Developed an AI-powered history learning platform featuring interactive timelines, quizzes, and a conversational tutor to enhance engagement and historical understanding.",
      image: "/Aitutor.png",
      tech: ["Next.js", "Supabase", "LLMs", "AI/ML"],
      // github: "https://github.com/shashikant190/AiTutorFrontEnd",
      live: "https://historyaitutor.vercel.app/",
      featured: true
    },
    {
      title: "RRBCEA Educational Browser Games",
      category: "games",
      description: "Interactive educational games for children with animations and audio feedback for improved learning",
      image: "/Gardencraft.png",
      tech: ["JavaScript", "Phaser.js", "Vercel", "Game Development"],
      // github: "https://github.com/shashikant190/gardencraft-game",
      live: "http://games.rrbcea.org/",
      featured: true
    },
    {
      title: "BharatMitra Chatbot",
      category: "ai",
      description: "AI chatbot to fetch and present business info from Supabase backend using natural language queries",
      image: "/Bharatmitra.png",
      tech: ["Python", "LLMs", "Supabase", "AI/ML"],
      // github: "https://github.com/shashikant190/ben-community",
      live: "https://ben-community.vercel.app/",
      featured: false
    },
    {
      title: "Lead Management System",
      category: "web",
      description: "Internal tool to manage partner/client leads and team follow-ups, replacing spreadsheet-based tracking",
      image: "/LMS.png",
      tech: ["Next.js", "Supabase", "CRM", "Internal Tools"],
      // github: "https://github.com/shashikant190/LeadManagementSystem",
      live: "#",
      featured: false
    },
        {
      title: "User Analytics Dashboard",
      category: "web",
      description: "Developed interactive educational games for children with animations and audio feedback to enhance learning, along with a user analytics dashboard to track engagement and user activity.",
      image: "/Analytics.png",
      tech: ["Next.js", "Supabase"],
      // github: "https://github.com/shashikant190/usergarden",
      live: "https://usergarden.vercel.app/",
      featured: false
    },
        {
      title: "Jyotirgamay Business Ecosystem (JBE) Portfolio",
      category: "web",
      description: "Developed interactive educational games for children with animations and audio feedback to enhance learning, along with a user analytics dashboard to track engagement and user activity.",
      image: "/JBEportfolio.png",
      tech: ["Next.js"],
      // github: "https://github.com/shashikant190/jbe-portfolio",
      live: "https://jbe-portfolio.vercel.app/",
      featured: false
    },

    {
  "title": "Shashikant Maurya – Personal Portfolio",
  "description": "A fully responsive personal portfolio website showcasing my work, experience, skills, community contributions, and certifications. Designed with a clean UI, built for performance and clarity.",
  "tech": ["Next.js", "Tailwind CSS", "Vercel", "JavaScript"],
  "category": "Web Apps",
  "image": "Shashikantportfolio.png",
  "live": "https://shashikant-portfolio.vercel.app/",
  // "github": "https://github.com/shashikant190/ShashikantPortfolio",
  "featured": false
}


  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'games', label: 'Games' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-maroon-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-maroon-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-maroon-600 text-white shadow-lg shadow-maroon-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-maroon-500/20 rounded-xl overflow-hidden hover:border-maroon-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-maroon-500/20"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.live}
                      className="p-3 bg-maroon-600 text-white rounded-full hover:bg-maroon-700 transition-colors duration-300"
                    >
                      <Play size={20} />
                    </a>
                    {/* <a
                      href={project.github}
                      className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a> */}
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-maroon-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-maroon-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 border border-maroon-500/30 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      className="flex items-center text-maroon-400 hover:text-maroon-300 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    {/* <a
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;