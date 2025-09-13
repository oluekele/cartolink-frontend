// lib/store/theme.ts
"use client";
import { create } from "zustand";

type ThemeState = {
  dark: boolean;
  toggle: () => void;
  setDark: (v: boolean) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  dark: true, // match server default
  toggle: () => set((s) => {
    const next = !s.dark;
    if (next) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    return { dark: next };
  }),
  setDark: (v) => set(() => {
    if (v) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    return { dark: v };
  }),
}));
