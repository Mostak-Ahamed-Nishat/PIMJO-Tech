"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "../components/ThemeProvider";

export function useDashboardTheme() {
  const { theme, setTheme, setIsDashboard } = useTheme();
  const pathname = usePathname();

  // Detect if we're in dashboard
  useEffect(() => {
    const isDashboardRoute = pathname.startsWith("/dashboard");
    setIsDashboard(isDashboardRoute);
  }, [pathname, setIsDashboard]);

  return {
    theme,
    setTheme,
    isDashboard: pathname.startsWith("/dashboard"),
    toggleTheme: () => {
      setTheme(theme === "light" ? "dark" : "light");
    },
  };
}
