"use client";

import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    if (storedTheme !== theme) {
      toggleTheme();
    }
    document.documentElement.classList.add(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <>{children}</>;
};