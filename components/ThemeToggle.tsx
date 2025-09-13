"use client"

import { useThemeStore } from "@/lib/store/theme-store"

export default function ThemeToggle() {
  const { dark, toggle } = useThemeStore()

  return (
    <button
      onClick={toggle}
      className={`px-3 py-2 border rounded-lg text-sm transition ${
        dark ? "" : "bg-[#171717] text-white"
      }`}
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
