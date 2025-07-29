"use client"

import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Analytics",
      school: "Northeastern University",
      location: "Boston, MA",
      year: "2025",
      description:
        "Advanced coursework in data science, machine learning, statistical analysis, and business intelligence. Focus on practical applications of analytics in business decision-making.",
      highlights: [
        "Advanced Statistical Analysis",
        "Machine Learning & AI",
        "Business Intelligence",
        "Data Visualization",
        "Predictive Modeling",
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "DBATU University",
      location: "Maharashtra, India",
      year: "2021",
      description:
        "Comprehensive foundation in computer science principles, programming, algorithms, and software development. Strong emphasis on problem-solving and analytical thinking.",
      highlights: [
        "Programming & Algorithms",
        "Database Management",
        "Software Engineering",
        "Data Structures",
        "System Design",
      ],
      icon: <Award className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic foundation in analytics, computer science, and data-driven decision making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-pink-500/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${edu.gradient} text-white shadow-lg`}
                >
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-pink-400 font-semibold mb-2">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-pink-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-pink-400" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

              <div>
                <h4 className="text-white font-semibold mb-3">Key Areas of Study:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30 font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
