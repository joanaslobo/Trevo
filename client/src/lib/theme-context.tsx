import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type ThemeMode = 'light' | 'rock';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  isRockMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'light';
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    return (savedTheme === 'rock') ? 'rock' : 'light';
  });

  const isRockMode = themeMode === 'rock';

  // Update the theme attribute on the document element when themeMode changes
  useEffect(() => {
    const html = document.documentElement;
    
    if (themeMode === 'rock') {
      html.classList.add('rock-mode');
      html.classList.remove('light-mode');
      document.body.style.backgroundColor = '#121212';
    } else {
      html.classList.add('light-mode');
      html.classList.remove('rock-mode');
      document.body.style.backgroundColor = '#F7F3E3';
    }
    
    // Save the theme preference to localStorage
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  // Toggle between light and rock modes
  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'rock' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, isRockMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};