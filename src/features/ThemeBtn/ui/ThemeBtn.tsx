"use client";

import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store/useThemeStore";

interface IBtnProps {
  className?: string;
}

export const ThemeBtn:React.FC<IBtnProps> = ({className}) => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Button className={className} onClick={toggleTheme}>
      Switch to {theme === "dark" ? "light" : "dark"}
    </Button>
  );
};
