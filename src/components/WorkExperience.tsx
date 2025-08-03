import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Jyotirgamay Solutions Pvt Ltd",
      location: "Pune, India",
      period: "Dec 2024 - Present",
      description: "Built and deployed multiple web applications using Next.js, Supabase, and Python. Created educational browser-based games and implemented AI chatbot solutions.",
      achievements: [
        "Built and deployed multiple web applications using Next.js, Supabase, and Python",
        "Created educational browser-based games using Phaser.js and deployed them on Vercel",
        "Implemented AI chatbot (BharatMitra) to query business data using Python and LLMs",
        "Managed web hosting and deployments using Plesk, Namecheap, and Vercel"
      ]
    },
    {
      title: "Business Operations and Admin (Multi-role)",
      company: "Jyotirgamay Solutions Pvt Ltd",
      location: "Pune, India",
      period: "Dec 2024 - Present",
      description: "Engaged with clients and partners for onboarding and collaboration. Handled administrative workflows and streamlined reporting processes.",
      achievements: [
        "Engaged with clients and partners for onboarding using structured communication",
        "Handled PF, TDS filings, invoice processing, and documentation of admin workflows",
        "Streamlined reporting using spreadsheets and digital tools, ensuring operational clarity"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-maroon-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-maroon-500 mx-auto mb-8"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-maroon-500 to-maroon-300 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-maroon-500 rounded-full transform md:-translate-x-1/2 -translate-y-1 z-10 shadow-lg shadow-maroon-500/50"></div>

                {/* Experience Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-maroon-500/20 rounded-xl p-6 hover:border-maroon-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-maroon-500/10">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="flex items-center text-maroon-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <h4 className="text-maroon-400 font-semibold mb-4 flex items-center">
                      {exp.company}
                      <ExternalLink size={16} className="ml-2 opacity-60" />
                    </h4>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm text-maroon-300">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="text-maroon-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default WorkExperience;