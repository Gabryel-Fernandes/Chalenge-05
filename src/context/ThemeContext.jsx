import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { useEffect } from "react";

export const themes = {
  light: {
    background: "#d8d7d7",
    color: "#000000",
  },
  dark: {
    background: "#282828",
    color: "#d8d7d7",
  },
};


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = themes[theme].background;
    document.body.style.color = themes[theme].color;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};