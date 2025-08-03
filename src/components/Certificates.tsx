import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      title: "Google Data Analytics Capstone",
      issuer: "Google (Coursera)",
      date: "2023",
      image: "/Googledata.png",
      credentialId: "WM6KRDBHSUEV",
      link: "https://www.coursera.org/account/accomplishments/verify/WM6KRDBHSUEV",
      description: "Comprehensive data analytics program covering data collection, processing, analysis, and visualization using industry-standard tools.",
      skills: ["Data Analysis", "Data Visualization", "Statistical Analysis", "Business Intelligence"]
    },
    {
      title: "Microsoft Azure Data Fundamentals",
      issuer: "Microsoft Learn",
      date: "2023",
      image: "Microsoftazure.png",
      credentialId: "HNGC3DT8",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/ShashikantMaurya-3012/HNGC3DT8?sharingId=FABBF8817C6F3381V",
      description: "Foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.",
      skills: ["Azure Data Services", "Data Storage", "Data Processing", "Data Analytics"]
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      date: "2023",
      image: "TCSion.png",
      credentialId: "TCS-YP-2023",
      link: "https://drive.google.com/file/d/1Co0F8rh3PkO-80t1OxQeqlJbkbDSb4XR/view",
      description: "Professional development program focusing on industry readiness, soft skills, and career advancement for young professionals.",
      skills: ["Professional Skills", "Industry Readiness", "Communication", "Leadership"]
    },
    {
  title: "Python Fundamentals for Beginners",
  issuer: "Great Learning",
  date: "2023",
  image: "Greatlearning.png",
  credentialId: "TOKCNAKW",
  link: "https://www.mygreatlearning.com/certificate/TOKCNAKW",
  description: "Comprehensive Python programming course covering fundamental concepts, data structures, and practical applications.",
  skills: ["Python Programming", "Data Structures", "Object-Oriented Programming", "Problem Solving"]
},
{
  title: "HackerRank Python Certificate",
  issuer: "HackerRank",
  date: "2022",
  image: "Hackerrankpython.png",
  credentialId: "617726fd41f9",
  link: "https://www.hackerrank.com/certificates/617726fd41f9",
  description: "Hands-on Python certification assessing proficiency in syntax, algorithms, data manipulation, and problem solving.",
  skills: ["Python Syntax", "Algorithms", "Data Manipulation", "Code Optimization"]
},
{
  title: "HackerRank C# Certificate",
  issuer: "HackerRank",
  date: "2022",
  image: "Hackerrankchash.png",
  credentialId: "617726fd41f9",
  link: "https://www.hackerrank.com/certificates/e40c4acebb2e",
  description: "Skill-based assessment validating expertise in C# programming, including object-oriented design, logic, and syntax.",
  skills: ["C# Programming", "Object-Oriented Design", "Data Types", "Logic Implementation"]
},
{
  title: "HackerRank JavaScript Certificate",
  issuer: "HackerRank",
  date: "2022",
  image: "Hackerrankjavascript.png",
  credentialId: "617726fd41f9",
  link: "https://www.hackerrank.com/certificates/84fc8c808e11",
  description: "Assessment covering JavaScript fundamentals including ES6 syntax, DOM manipulation, and asynchronous programming.",
  skills: ["JavaScript", "ES6", "DOM Manipulation", "Asynchronous Programming"]
},
{
  title: "HackerRank CSS Certificate",
  issuer: "HackerRank",
  date: "2022",
  image: "Hackerrankcss.png",
  credentialId: "617726fd41f9",
  link: "https://www.hackerrank.com/certificates/e9407f658e58",
  description: "Evaluation of CSS skills including layout techniques, responsive design, and styling principles for modern web development.",
  skills: ["CSS3", "Responsive Design", "Flexbox", "Grid Layout", "Styling"]
}

  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-maroon-400 bg-clip-text text-transparent">
              Certificates & Achievements
            </h2>
            <div className="w-24 h-1 bg-maroon-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications and achievements that validate my expertise and commitment to continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-maroon-500/20 rounded-xl overflow-hidden hover:border-maroon-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-maroon-500/10 cursor-pointer group"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-maroon-600 text-white p-2 rounded-full">
                    <Award size={16} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-maroon-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-maroon-400 font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {cert.description}
                  </p>
                  <div className="flex items-center text-maroon-400 text-sm font-medium">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-maroon-300 transition-colors">
                      View Certificate
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Modal */}
          {selectedCertificate && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-900 border border-maroon-500/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{selectedCertificate.title}</h3>
                  <p className="text-maroon-400 font-semibold mb-2">{selectedCertificate.issuer}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-gray-400 text-sm">Issue Date:</span>
                      <p className="font-semibold">{selectedCertificate.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Credential ID:</span>
                      <p className="font-semibold">{selectedCertificate.credentialId}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Description:</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedCertificate.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Skills Validated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-maroon-600/20 border border-maroon-500/30 text-maroon-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(selectedCertificate.link, '_blank')}
                    className="w-full py-3 bg-maroon-600 hover:bg-maroon-700 text-white rounded-lg font-semibold transition-colors duration-300 mb-3"
                  >
                    View Certificate
                  </button>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;