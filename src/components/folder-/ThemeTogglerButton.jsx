import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ToggleButton, ContainerToggler, SearchContainer, SearchInput, LogoPokemon } from "./stylesThemeTogglerButton";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ThemeToggle = ({ onSearch }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation(); 

  
  const isPokemonDetailsPage = location.pathname.includes("pokemon");

  return (
    <ContainerToggler>
      <LogoPokemon src="./src/assets/icons/Pokemon-Logo.png" alt="logo pokemon" />

      {!isPokemonDetailsPage && ( 
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Buscar Pokémon"
            onChange={(e) => onSearch(e.target.value)}
            theme={theme}
          />
        </SearchContainer>
      )}


      <ToggleButton theme={theme} onClick={toggleTheme}>
        Mudar para {theme === "light" ? "Claro" : "Escuro"}
      </ToggleButton>
    </ContainerToggler>
  );
};

export { ThemeToggle };



ThemeToggle.propTypes = {
  onSearch: PropTypes.func,
};



