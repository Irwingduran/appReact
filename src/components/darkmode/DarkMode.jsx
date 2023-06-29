import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext({});

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled');
    setIsDarkMode(darkModeEnabled === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem('darkModeEnabled', newIsDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
