"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow data
            enthusiasts.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information - Centered */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking to collaborate on a data project, discuss analytics opportunities, or just want
                to chat about the latest in AI and machine learning, I'd love to hear from you.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://linkedin.com/in/labhini-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-pink-500/20 text-gray-400 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-110 shadow-lg hover:shadow-pink-500/20"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:patel.la@northeastern.edu"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-pink-500/20 text-gray-400 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-110 shadow-lg hover:shadow-pink-500/20"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
