"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 shadow-lg">
          <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify ">
            I’m a Data Analyst with a strong foundation in financial modeling, business intelligence, and a growing understanding of healthcare analytics. I hold a Master’s in Analytics from Northeastern University and a background in computer science, with a focus on transforming complex data into clear, strategic insights.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify ">
            I have hands-on experience with IQVIA commercial datasets such as DDD, Xponent, and LAAD, and a solid understanding of leveraging Veeva CRM data to support call planning and market performance tracking. My technical toolkit includes Tableau, Power BI, SQL, Excel, and Python, which I use to build dynamic dashboards, automate workflows, and drive data-informed decisions.
          </p>

      

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Data Analysis",
              "Tableau",
              "Power BI",
              "Python",
              "SQL",
              "Machine Learning",
              "Business Intelligence",
              "Financial Modeling",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
