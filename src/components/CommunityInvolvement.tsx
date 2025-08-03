import React from 'react';
import { Users, Heart, Award, Calendar } from 'lucide-react';

const CommunityInvolvement = () => {
  const activities = [
    {
      icon: <Users size={24} />,
      title: "Workshop Host and Facilitator",
      organization: "Jyotirgamay Solutions Pvt Ltd",
      description: "Volunteered to conduct onboarding sessions for visitors and new members, introducing them to Bliss Stewardship and Entrepreneurship.",
      period: "Jan 2025 - May 2025",
      impact: "Values-aligned network growth"
    },
    {
      icon: <Heart size={24} />,
      title: "Coordinator – Business Accelerator Program (BAP)",
      organization: "Bharat Entrepreneurs Network (BEN) Community",
      description: "Coordinated the pro bono Business Accelerator Program to connect entrepreneurs with experienced business coaches.",
      period: "Jan 2025 - Present",
      impact: "Entrepreneurs mentored"
    },
    {
      icon: <Award size={24} />,
      title: "Educational Games Developer",
      organization: "RRBCEA Pune",
      description: "Developed browser-based educational games that are regularly used by schoolchildren, becoming a key attraction for interactive learning.",
      period: "2025",
      impact: "Students engaged daily"
    },
    {
      icon: <Calendar size={24} />,
      title: "Community Engagement Leader",
      organization: "Jyotirgamay Mission",
      description: "Successfully inspired and onboarded individuals to explore and engage with Jyotirgamay&apos;s mission, contributing to community growth.",
      period: "2024 - Present",
      impact: "Network expansion"
    }
  ];

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-maroon-400 bg-clip-text text-transparent">
              Community Involvement
            </h2>
            <div className="w-24 h-1 bg-maroon-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Giving back to the tech community through mentorship, open source contributions, and educational initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-maroon-500/20 rounded-xl p-6 hover:border-maroon-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-maroon-500/10 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-maroon-400 group-hover:text-maroon-300 transition-colors duration-300">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-maroon-400 transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <h4 className="text-maroon-400 font-semibold mb-3">
                      {activity.organization}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-1" />
                        {activity.period}
                      </div>
                      <div className="text-maroon-400 font-semibold">
                        {activity.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5+", label: "Live Projects" },
              { number: "40%", label: "Performance Improvement" },
              { number: "100+", label: "Students Engaged" },
              { number: "2", label: "Active Programs" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-maroon-500/20 rounded-xl p-6 hover:border-maroon-500/40 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-maroon-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityInvolvement;