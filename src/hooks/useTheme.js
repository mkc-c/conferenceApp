import { useEffect, useState } from "react";

function useTheme(startingTheme = "light") {
  console.log(startingTheme);
  const [theme, setTheme] = useState(startingTheme);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  function validateTheme(themeValue) {
    console.log(themeValue + "here");
    if (themeValue === "dark") setTheme("dark");
    else setTheme("light");
  }

  return { theme, setTheme: validateTheme };
}

export default useTheme;
