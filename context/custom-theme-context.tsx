"use client" //🚀
// Import necessary libraries and types

import React, { useEffect, useState, createContext, useContext } from "react";

// Define a type for the theme
type Theme = "light" | "dark";

// Define props for the ThemeContextProvider component
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// Define the shape of the theme context
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create a context to manage the theme
const ThemeContext = createContext<ThemeContextType | null>(null);

// Create a component that provides the theme context to its children
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // Initialize state for the theme, defaulting to "light"
  const [theme, setTheme] = useState<Theme>("light");

  // Function to toggle between "light" and "dark" themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  // Use useEffect to initialize the theme based on local storage or user preferences
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Create a custom hook for accessing the theme context
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
