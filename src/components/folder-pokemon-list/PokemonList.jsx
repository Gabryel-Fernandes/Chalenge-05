import { useState, useEffect, useContext } from "react";
import getPokemons from "../../services/FetchPokemonsData";
import { ContainerBoard, BordPokemons, CardPokemon, TypePokemon } from "./stylesPokemonList";
import { LoadMoreButton } from "../folder-load-more/LoadMoreButton";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import PropTypes from "prop-types";

const PokemonList = ({ searchTerm }) => {
    const { theme } = useContext(ThemeContext);
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        const fetchInitialPokemons = async () => {
            try {
                const data = await getPokemons(0);
                setPokemons(data);
            } catch (error) {
                console.error("Erro ao Buscar os Pokemons", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInitialPokemons();
    }, []);

    const loadMore = async () => {
        setIsLoadingMore(true);
        try {
            const data = await getPokemons(offset + 10);
            setPokemons((prevPokemons) => [...prevPokemons, ...data]);
            setOffset((prevOffset) => prevOffset + 10);
        } catch (error) {
            console.error("Erro ao corregar mais 10 pokemon", error);
        } finally {
            setIsLoadingMore(false);
        }
    };

    // Filtra os pokémons pelo nome, se o campo de busca estiver preenchido
    const filteredPokemons = searchTerm
        ? pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : pokemons;

    return (
        <>
            {loading && pokemons.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <ContainerBoard>
                    <BordPokemons theme={theme}>
                        {filteredPokemons.map((pokemon, index) => (
                            <Link key={index} to={`/pokemon/${pokemon.name}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <CardPokemon>
                                    <img src={pokemon.image} alt={pokemon.name} />
                                    <p>{pokemon.name}</p>
                                    <div>
                                        {pokemon.types.map((type, index) => (
                                            <TypePokemon key={index} type={type}>
                                                {type}
                                            </TypePokemon>
                                        ))}
                                    </div>
                                </CardPokemon>
                            </Link>
                        ))}
                    </BordPokemons>
                </ContainerBoard>
            )}

            <LoadMoreButton onClick={loadMore} disabled={isLoadingMore} />
        </>
    );
};

PokemonList.propTypes = {
    searchTerm: PropTypes.string, // searchTerm é uma string
};

export { PokemonList };
