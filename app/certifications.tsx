"use client"

import { Award, CheckCircle, Star, Trophy } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "McKinsey.org Forward Program",
      category: "Business Strategy",
      icon: <Trophy className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-600",
      type: "Professional Development",
    },
    {
      title: "SQL for Data Analysis",
      category: "Database Management",
      icon: <CheckCircle className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600",
      type: "Technical Skills",
    },
    {
      title: "Big Data Analytics with Hadoop and Apache Spark",
      category: "Big Data",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600",
      type: "Advanced Analytics",
    },
    {
      title: "Google Analytics for Beginners",
      category: "Web Analytics",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-600",
      type: "Digital Marketing",
    },
    {
      title: "Power BI: Dashboards for Beginners",
      category: "Business Intelligence",
      icon: <CheckCircle className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-600",
      type: "Data Visualization",
    },
    {
      title: "New York Jobs CEO Council - Financial Analyst Job Simulation",
      category: "Financial Analysis",
      icon: <Trophy className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600",
      type: "Industry Simulation",
    },
    {
      title: "Accenture North America - Data Analytics and Visualization Job Simulation",
      category: "Data Analytics",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-600",
      type: "Industry Simulation",
    },
    {
      title: "Dataiku ML Practitioner",
      category: "Machine Learning",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      type: "ML Platform",
    },
    {
      title: "Dataiku Core Designer",
      category: "Data Science Platform",
      icon: <CheckCircle className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-600",
      type: "ML Platform",
    },
  ]

  const groupedCertifications = certifications.reduce(
    (acc, cert) => {
      if (!acc[cert.type]) {
        acc[cert.type] = []
      }
      acc[cert.type].push(cert)
      return acc
    },
    {} as Record<string, typeof certifications>,
  )

  return (
    <section id="certifications" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development in data analytics, business intelligence, and emerging
            technologies.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedCertifications).map(([category, certs]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {category}
                </span>
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-pink-500/20"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${cert.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-pink-100 transition-colors leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-pink-400 font-medium text-sm">{cert.category}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs border border-pink-500/30 font-medium">
                        Certified
                      </span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">{certifications.length}</div>
            <div className="text-gray-300 text-sm">Total Certifications</div>
          </div>
          <div className="text-center bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">{Object.keys(groupedCertifications).length}</div>
            <div className="text-gray-300 text-sm">Skill Categories</div>
          </div>
          <div className="text-center bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">2</div>
            <div className="text-gray-300 text-sm">Industry Simulations</div>
          </div>
          <div className="text-center bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
            <div className="text-gray-300 text-sm">Platform Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}
