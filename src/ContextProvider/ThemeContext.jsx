import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ContextProvider = ({ children }) => {

  const [currentMode, setCurrentMode] = useState(
    localStorage.getItem("themeMode") || "Dark"
  );

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);

  };

  return (
    <ThemeContext.Provider
      value={{
        currentMode,
        setCurrentMode,
        setMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const UseThemeContext = () => {
  return useContext(ThemeContext);
};