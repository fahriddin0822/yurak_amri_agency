import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yurak Amri",
  description: "A platform for charitable donations and community support",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-satoshi antialiased">{children}</body>
    </html>
  )
}
