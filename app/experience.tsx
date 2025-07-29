"use client"

import { Calendar, MapPin, Briefcase, Brain } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "RadicalX",
      period: "Sept 2024 – April 2025",
      location: "Remote",
      description:
        "Designed and deployed AI-powered solutions for document processing and workflow automation. Created structured pipelines to process, tag, and retrieve documents with improved accuracy.",
      achievements: [
        "Built AI-powered quiz generator reducing manual tasks by 60%",
        "Implemented document processing pipelines with 95% accuracy",
        "Improved workflow transparency across research teams",
        "Documented processes and tracked task completion metrics",
      ],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "Business Analyst",
      company: "Shree Jay Ambey Textile, India",
      period: "Oct 2021 – Jan 2023",
      location: "Maharashtra, India",
      description:
        "Managed vendor records, invoicing, and contract tracking using Excel and Google Sheets. Streamlined operational reporting and automated routine dashboards.",
      achievements: [
        "Reduced manual workload by 40% through automation",
        "Managed vendor records and financial operations",
        "Streamlined operational reporting processes",
        "Maintained compliance documentation and vendor coordination",
      ],
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in data analysis, AI engineering, and business intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${exp.gradient} shadow-lg shadow-pink-500/25 ring-4 ring-pink-400/20`}
                >
                  <div className="text-white">{exp.icon}</div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 shadow-lg hover:shadow-pink-500/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-pink-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 mt-2 sm:mt-0">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4 text-pink-400" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4 text-pink-400" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
