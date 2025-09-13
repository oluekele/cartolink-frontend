import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cartolinks Internship",
  description: "Frontend Assignment - Next.js + Tailwind",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
      
        {children}
      </body>
    </html>
  )
}
