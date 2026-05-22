"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "playful" | "spectrum";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "playful",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("playful");

  useEffect(() => {
    const stored = localStorage.getItem("aba-theme") as Theme | null;
    if (stored === "playful" || stored === "spectrum") {
      applyTheme(stored);
      setThemeState(stored);
    }
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("aba-theme", t);
    applyTheme(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function applyTheme(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
}

export const useTheme = () => useContext(ThemeContext);
