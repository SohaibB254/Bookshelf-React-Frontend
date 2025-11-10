import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  // Determine real theme based on system preference
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  useEffect(() => {
    let activeTheme = theme === "system" ? getSystemTheme() : theme;

    document.documentElement.classList.toggle("dark", activeTheme === "dark");
    document.body.style.backgroundColor =
      activeTheme === "dark" ? "#111827" : "#ffffff";

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Update on system theme change (if using system mode)
  useEffect(() => {
    const listener = (e) => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
