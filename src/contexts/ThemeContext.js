import React, { createContext, useEffect } from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext();

function ThemeProvider({ children, startingTheme }) {
  const { theme, setTheme } = useTheme(startingTheme);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
