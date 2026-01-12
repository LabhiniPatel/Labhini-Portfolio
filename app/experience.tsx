"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Experience() {
  const experiences = [
    {
      title: "Market Insights Analyst",
  company: "Viz Digital Marketing, LLC",
  period: "Oct 2025 – Present",
  location: "Remote",
  description:
    "Delivered data-driven marketing insights through dashboarding, campaign analysis, and cross-channel performance reporting. Collaborated with marketing leads to improve campaign ROI and automate analytics workflows.",
  achievements: [
    "Built SQL-powered Tableau dashboards reducing ad-hoc analysis time by ~30%",
    "Improved campaign ROI insights through KPI integration with business metrics",
    "Performed segmentation analysis leading to simulated ROI improvement of ~15%",
    "Created repeatable analytics pipelines for customer acquisition insights"
  ],
  icon: <BarChart className="w-6 h-6" />,
  gradient: "from-sky-500 to-indigo-600"
    },
    {
  title: "AI Engineer Intern",
  company: "RadicalX",
  period: "Sept 2024 – April 2025",
  location: "Remote",
  description:
    "Led analytics development for AI operations by building pipelines, dashboards, and insights delivery tools to improve performance and streamline data processing.",
  achievements: [
    "Built analytics pipelines and Power BI dashboards to monitor KPIs, driving ~20% efficiency gains",
    "Automated SQL and Python validation checks to improve data reliability to ~98%",
    "Delivered executive-ready insights reducing manual reporting time and decision delays",
    "Supported cross-functional collaboration on multi-source dataset workflows"
  ],
  icon: <Brain className="w-6 h-6" />,
  gradient: "from-purple-500 to-violet-600",
},
    {
      title: "Business Analyst",
  company: "Shree Jay Ambey Textile",
  period: "Oct 2021 – Jan 2023",
  location: "India",
  description:
    "Delivered operational analytics by analyzing pricing, sales, and demand data to support planning, reduce delays, and improve decision-making efficiency.",
  achievements: [
    "Analyzed sales trends and fulfillment bottlenecks to reduce delays by ~10–15%",
    "Built weekly reporting workflows for sales and inventory decisions",
    "Translated transactional data into actionable business insights",
    "Enhanced visibility into planning KPIs for leadership decision-making"
  ],
  icon: <Database className="w-6 h-6" />,
  gradient: "from-yellow-500 to-orange-600",
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
