"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Turning complex data into clear, strategic decisions."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-purple-900/70 to-pink-900/70 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 animate-fade-in">
          {/* Avatar with Initials */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-2xl shadow-pink-500/50 ring-4 ring-pink-400/20">
            LP
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Labhini Patel
          </h1>

          <h2 className="text-2xl sm:text-3xl text-gray-300 mb-8 font-light">
            Data Analyst | AI & Analytics Enthusiast
          </h2>

          <p className="text-xl text-pink-300 mb-12 h-8 font-medium">
            {text}
            <span className="animate-pulse text-purple-400">|</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-pink-500 text-pink-300 hover:bg-pink-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-pink-400" />
      </div>
    </section>
  )
}
