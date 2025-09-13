'use client'
import { useThemeStore } from "@/lib/store/theme-store";

type Props = { title: string; subtitle?: string }

export default function Card({ title, subtitle }: Props) {
   const { dark } = useThemeStore()
  return (
    <div className={`p-4 border rounded-xl shadow-sm  ${dark ? "bg-slate-700" : "bg-slate-800"} border-slate-700`}>
      <h3 className="font-medium text-white">{title}</h3>
      {subtitle && (
        <p className={`text-sm text-slate-400 `}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
