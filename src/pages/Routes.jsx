import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { PokemonDetailsPage } from "../pages/PokemonDetails";
import PropTypes from "prop-types";

const AppRoutes = ({ searchTerm }) => {
    return (

        <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
        </Routes>

    );
};

AppRoutes.propTypes = {
    searchTerm: PropTypes.string, // searchTerm é uma string
};

export { AppRoutes };