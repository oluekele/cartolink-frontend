'use client'

import Image from "next/image"
import ThemeToggle from "./ThemeToggle"
import { useThemeStore } from "@/lib/store/theme-store"

export default function Header() {
  const { dark } = useThemeStore()
  return (
    <header className="flex items-center justify-between p-6 border-b dark:border-slate-700">
      <div className="flex items-center gap-3">
        <Image src="/Colorful-PNG.webp" width={50} height={50} alt="logo" className="w-10 h-10 rounded-full" />
        <div>
          <h1 className="font-semibold text-lg">Cartolinks</h1>
          <p className={`text-xs ${dark ? "dark:text-slate-400" : "dark:text-slate-800"}  `}>
            Software Engineering Internship
          </p>
        </div>
      </div>
      <ThemeToggle />
    </header>
  )
}
