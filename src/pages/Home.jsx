import { PokemonList } from "../components/folder-pokemon-list/PokemonList";
import PropTypes from "prop-types";

const Home = ({ searchTerm }) => {
  return (
    <div>
      <PokemonList searchTerm={searchTerm} /> {/* Passando o searchTerm para o PokemonList */}
    </div>
  );
};

Home.propTypes = {
    searchTerm: PropTypes.string, // searchTerm é uma string
};

export { Home };
