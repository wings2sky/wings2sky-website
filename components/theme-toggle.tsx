"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`relative inline-flex h-9 w-16 shrink-0 cursor-pointer items-center rounded-full border border-primary/30 bg-primary/15 p-1 shadow-inner transition-colors hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      {/* Knob position and icon follow the .dark class, so it is correct before hydration */}
      <span className="flex h-7 w-7 translate-x-[26px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform duration-300 dark:translate-x-0">
        <Sun size={16} className="dark:hidden" />
        <Moon size={16} className="hidden dark:block" />
      </span>
    </button>
  )
}
