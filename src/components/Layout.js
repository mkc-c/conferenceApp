import { useContext, useEffect } from "react";

import { ThemeContext, ThemeProvider } from "./../contexts/ThemeContext";

function Layout({ children, startingTheme }) {
  console.log(startingTheme);
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
}

function LayoutNoThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
}

export default Layout;
