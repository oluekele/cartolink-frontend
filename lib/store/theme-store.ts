"use client"
import { create } from "zustand"

type ThemeState = {
  dark: boolean
  toggle: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  dark: false, // start in dark mode
  toggle: () =>
    set((state) => {
      const next = !state.dark
      if (next) {
        document.documentElement.classList.add("dark")
        document.documentElement.classList.remove("light")
      } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
      }
      return { dark: next }
    }),
}))
