"use client";

import { useThemeStore } from "@/lib/store/theme-store";


export default function ThemeToggle() {
  const dark = useThemeStore((s) => s.dark);
  const toggle = useThemeStore((s) => s.toggle);

  return (
    <button onClick={toggle} className={`px-3 py-2 border rounded ${dark ? "" : "bg-[#171717] text-white"}`}>
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
