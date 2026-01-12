import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Labhini Patel - Data Analyst | AI & Analytics Enthusiast",
  description: "Portfolio of Labhini Patel - Turning complex data into clear, strategic decisions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
