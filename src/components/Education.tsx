import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Masters in Computer Applications (MCA)",
      school: "G H Raisoni College of Engineering and Management",
      location: "Pune, Maharashtra",
      period: "2023 - 2025",
      gpa: "7.91/10.0",
      description: "Comprehensive program covering advanced software development, database management, and modern web technologies with focus on practical application.",
      achievements: [
        "Strong foundation in software engineering principles",
        "Hands-on experience with modern development frameworks",
        "Focus on full-stack development and database design"
      ]
    },
    {
      degree: "Bachelor of Business Administration & Computer Applications BBA(CA)",
      school: "G H Raisoni College of Arts, Commerce & Science",
      location: "Pune, Maharashtra",
      period: "2019 - 2022",
      gpa: "8.45/10.0",
      description: "Unique blend of business administration and computer applications, providing strong foundation in both technical and business domains.",
      achievements: [
        "Excellent academic performance with 8.45 CGPA",
        "Strong foundation in business operations and computer applications",
        "Developed analytical and problem-solving skills"
      ]
    }
  ];

  const additionalEducation = [
    {
      title: "Google Data Analytics Capstone",
      provider: "Google (Coursera)",
      year: "2023",
      type: "Professional Certification"
    },
    {
      title: "Microsoft Azure Data Fundamentals",
      provider: "Microsoft Learn",
      year: "2023",
      type: "Professional Certification"
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      provider: "TCS iON",
      year: "2023",
      type: "Professional Development"
    },
    {
      title: "Python Fundamentals for Beginners",
      provider: "Great Learning",
      year: "2023",
      type: "Technical Certification"
    },
    {
      title: "HackerRank Python Certificate",
      provider: "HackerRank",
      year: "2022",
      type: "Professional Certificate"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-maroon-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-maroon-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Academic foundation and continuous learning journey that shaped my expertise in technology and innovation.
            </p>
          </div>

          {/* Formal Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-maroon-400">Formal Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-maroon-500/20 rounded-xl p-6 hover:border-maroon-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-maroon-500/10"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 flex items-center">
                        <GraduationCap className="text-maroon-400 mr-3" size={24} />
                        {edu.degree}
                      </h4>
                      <h5 className="text-maroon-400 font-semibold mb-2">{edu.school}</h5>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <MapPin size={16} className="mr-1" />
                        {edu.location}
                      </div>
                      <div className="text-maroon-400 font-semibold text-sm">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h6 className="font-semibold text-sm text-maroon-300 mb-2 flex items-center">
                      <Award size={16} className="mr-2" />
                      Key Achievements:
                    </h6>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-maroon-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;