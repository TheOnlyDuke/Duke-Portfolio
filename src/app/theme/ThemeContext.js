"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./MUIStylesConfig";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const theme = isDarkMode ? darkTheme : lightTheme;
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode, mounted]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);