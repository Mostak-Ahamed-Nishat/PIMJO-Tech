"use client"

import { createContext, useContext, useEffect, useState } from "react"

const initialState = {
    theme: "light",
    setTheme: () => null,
    isDashboard: false,
    setIsDashboard: () => null,
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "light",
    storageKey = "pimjo-theme",
    dashboardOnly = false,
    ...props
}) {
    const [theme, setTheme] = useState(defaultTheme)
    const [isDashboard, setIsDashboard] = useState(false)

    // Initialize theme from localStorage only if in dashboard
    useEffect(() => {
        if (isDashboard && typeof window !== "undefined") {
            const stored = localStorage.getItem(storageKey)
            if (stored && (stored === "light" || stored === "dark")) {
                setTheme(stored)
            }
        } else {
            // Always light mode outside dashboard
            setTheme("light")
        }
    }, [isDashboard, storageKey])

    // Apply theme to document
    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        // Only apply dark mode if in dashboard and theme is dark
        if (isDashboard && theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.add("light")
        }
    }, [theme, isDashboard])

    const value = {
        theme: isDashboard ? theme : "light", // Force light mode outside dashboard
        setTheme: (newTheme) => {
            if (isDashboard) {
                localStorage.setItem(storageKey, newTheme)
                setTheme(newTheme)
            }
            // Ignore theme changes outside dashboard
        },
        isDashboard,
        setIsDashboard,
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}