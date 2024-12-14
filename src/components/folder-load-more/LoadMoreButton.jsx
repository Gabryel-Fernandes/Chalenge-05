import PropTypes from "prop-types";
import {Button, ContainerButton} from "./stylesLoadMoreButton";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const LoadMoreButton = ({ onClick, disabled }) => {

    const { theme, } = useContext(ThemeContext);

    return (
        <ContainerButton >
            <Button theme={theme} onClick={onClick} disabled={disabled}>
                {disabled ? "Carregando..." : "Carregar mais"}
            </Button>
        </ContainerButton>
    );
};

LoadMoreButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export { LoadMoreButton }