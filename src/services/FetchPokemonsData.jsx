import axios from "axios";
import { POKEMON_API_URL} from "../folder-variables/Variables"


async function getPokemons(offset = 0, limit = 10) {
    try {
        const response = await axios.get(`${POKEMON_API_URL}?limit=${limit}&offset=${offset}`);
        const pokemonList = response.data.results;

        const pokemonDetails = await Promise.all(
            pokemonList.map(async (pokemon) => {
                try {
                    const details = await axios.get(pokemon.url);

                    return {
                        name: pokemon.name,
                        types: details.data.types.map((type) => type.type.name),
                        image: details.data.sprites.front_default
                    };
                } catch (detailError) {
                    console.error(`Erro ao buscar detalhes do Pokémon: ${pokemon.name}`, detailError);
                    return {
                        name: pokemon.name,
                        types: ["Desconhecido"],
                        image: null,
                    };
                }
            })

        );

        return pokemonDetails;

    } catch (error) {
        console.error("Erro ao buscar Pokemons", error);
        throw error;
    }
}

export default getPokemons
