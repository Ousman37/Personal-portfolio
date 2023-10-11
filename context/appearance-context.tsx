 "use client" //🚀
 import React, { createContext, useEffect, useState, useContext } from 'react';

type Theme = 'light' | 'dark';

type AppearanceContextProviderProps = {
  children: React.ReactNode;
};

type AppearanceContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const AppearanceContext = createContext<AppearanceContextType | null>(null);

// Define the useTheme hook
export const useTheme = () => {
  const context = useContext(AppearanceContext);

  if (context === null) {
    throw new Error('useTheme must be used within an AppearanceContextProvider');
  }

  return context;
};

const AppearanceContextProvider = ({
  children,
}: AppearanceContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
    // Add a console.log to check if the function is called
    console.log('Theme toggled:', theme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      // Add a console.log to check the local theme
      console.log('Local theme:', localTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      // Add a console.log to check the theme based on media query
      console.log('Theme based on media query: dark');
    }
  }, []);

  return (
    <AppearanceContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppearanceContext.Provider>
  );
};

export default AppearanceContextProvider;


