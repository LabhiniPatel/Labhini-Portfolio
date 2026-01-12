"use client"

import { BarChart3, Brain, Database } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Medicare Part D Formulary Dashboard",
      description:
        "Developed a comprehensive Tableau dashboard using CMS formulary and pharmacy network data to analyze plan performance, track drug coverage tiers, and visualize cost-sharing gaps across 80+ plans. Integrated SQL pipelines and Excel logic to standardize drug codes and enable reusable KPI reporting.",
      tags: ["Tableau","Python","Excel","CMS Data","Formulary Analysis","Healthcare Analytics","Cost-Sharing Tiers","Plan Performance"],
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Financial Modeling & Forecasting ",
      description:
        "Built a 3-statement Excel model using 3 years of financial data to project revenue, EBITDA, and free cash flow. Designed KPI dashboards to support executive decisions, and applied scenario analysis to stress-test business assumptions under different market conditions.",
      tags: ["Excel", "Financial Modeling", "Forecasting", "Scenario Planning", "Dashboarding"],
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "COVID-19 VAERS Hospitalization Prediction Model",
      description:
        "Performed data cleaning and exploratory analysis on VAERS data to identify patterns in adverse events related to COVID-19 vaccination. Built predictive models using logistic regression and random forest to classify hospitalization risk, achieving strong recall and interpretability.",
      tags: ["Python", "Pandas", "Scikit-learn", "VAERS Data", "Healthcare Analytics", "Predictive Modeling"],
      icon: <Database className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in data analysis, AI engineering, and business intelligence solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white mb-4 shadow-lg`}
                >
                  {project.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-100 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed text-justify">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30 font-medium"
                    >
                      {tag}
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
