import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ToggleButton, ContainerToggler, SearchContainer,  SearchInput, LogoPokemons} from "./stylesThemeTogglerButton";
import { useLocation } from "react-router-dom"; // Importar useLocation
import PropTypes from "prop-types";

const ThemeToggle = ({ onSearch }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation(); // Pega a rota atual

  // Verifica se estamos na página de detalhes
  const isPokemonDetailsPage = location.pathname.includes("pokemon");

  return (
    <ContainerToggler>
      {!isPokemonDetailsPage && (
        <SearchContainer>
          <SearchInput
            type="text" 
            placeholder="Buscar Pokémon" 
            onChange={(e) => onSearch(e.target.value)} // Atualiza a busca
            theme={theme}
          />
        </SearchContainer>
      )}

      <LogoPokemons src="src\assets\icons\pokemon-svgrepo-com.png" alt="logo pokemon" />

      <ToggleButton theme={theme} onClick={toggleTheme}>
        Mudar para {theme === "light" ? "Claro" : "Escuro"}
      </ToggleButton>
    </ContainerToggler>
  );
};

export { ThemeToggle };



ThemeToggle.propTypes = {
    onSearch: PropTypes.func, // Propriedade opcional
};



