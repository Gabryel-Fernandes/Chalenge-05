import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ToggleButton, ContainerToggler } from "./stylesThemeTogglerButton"

const ThemeToggle = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <ContainerToggler>
            <ToggleButton theme={theme} onClick={toggleTheme}>
                Mudar para {theme === "light" ? "Claro" : "Escuro"}
            </ToggleButton>
        </ContainerToggler>
    );
};

export { ThemeToggle }