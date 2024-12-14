import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { useEffect } from "react";

// Definindo os temas: claro e escuro
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

// Criando o ThemeContext
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Função para alternar o tema
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

// Adicionando validação de props com PropTypes
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};