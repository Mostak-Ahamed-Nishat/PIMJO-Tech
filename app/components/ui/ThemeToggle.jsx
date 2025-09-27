"use client"

import { useDashboardTheme } from "@/app/hooks/useDashboardTheme"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const { theme, toggleTheme, isDashboard } = useDashboardTheme()
    if (!isDashboard) {
        return null
    }

    return (
        <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-lg w-9 h-9 bg-card border border-border hover:bg-accent transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <Moon className="h-4 w-4" />
            ) : (
                <Sun className="h-4 w-4" />
            )}
        </button>
    )
}