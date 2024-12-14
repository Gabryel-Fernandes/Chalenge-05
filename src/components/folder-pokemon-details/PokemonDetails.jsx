import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { POKEMON_API_URL } from "../../folder-variables/Variables";
import { BodyPage, CardPokemon, CardInfo, MovesList, UlMoves, SkillsList, UlSkills, PicturePokemon, ImgPokemon, TypePokemon, PokemonName, ButtonReturn, ContainerReturnAndPokemon } from "./StylesPokemonDetails";
import { ThemeContext } from "../../context/ThemeContext";

const PokemonDetails = () => {
    const { id } = useParams(); // Captura o ID da rota
    const { theme } = useContext(ThemeContext);
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await axios.get(`${POKEMON_API_URL}/${id}`);
                const data = response.data;

                // Monta os detalhes necessários
                const abilitiesWithDescriptions = await Promise.all(
                    data.abilities.map(async (ability) => {
                        const abilityResponse = await axios.get(ability.ability.url);
                        const abilityData = abilityResponse.data;
                        const description = abilityData.effect_entries.find(
                            (entry) => entry.language.name === "en"
                        )?.effect || "Descrição não disponível";
                        return {
                            name: ability.ability.name,
                            description,
                        };
                    })
                );

                // Monta os detalhes necessários
                setPokemonDetails({
                    name: data.name,
                    image: data.sprites.front_default,
                    types: data.types.map((type) => type.type.name),
                    abilities: abilitiesWithDescriptions,
                    moves: data.moves.map((move) => move.move.name),
                });
            } catch (error) {
                console.error("Erro ao buscar detalhes do Pokémon:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [id]); // Reexecuta o efeito sempre que 'id' mudar

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!pokemonDetails) {
        return <p>Pokémon não encontrado</p>;
    }

    return (
        <BodyPage>

            <ContainerReturnAndPokemon>
                <Link to="/">
                    <ButtonReturn theme={theme}>
                        Voltar para Home
                    </ButtonReturn>
                </Link>

                <CardPokemon theme={theme}>
                    <PicturePokemon>
                        <PokemonName theme={theme}>{pokemonDetails.name}</PokemonName>
                        <ImgPokemon src={pokemonDetails.image} alt={pokemonDetails.name} />
                    </PicturePokemon>

                    <div>
                        {pokemonDetails.types.map((type, index) => (
                            <TypePokemon key={index} type={type}>
                                {type}
                            </TypePokemon>
                        ))}
                    </div>
                </CardPokemon>
            </ContainerReturnAndPokemon>

            <CardInfo theme={theme}>
                <SkillsList theme={theme}>
                    <h2>Habilidades</h2>
                    <UlSkills>
                        {pokemonDetails.abilities.map((ability, index) => (
                            <li key={index}>
                                <strong>{ability.name}</strong>:  {ability.description}
                            </li>
                        ))}
                    </UlSkills>
                </SkillsList>

                <MovesList theme={theme}>
                    <h2>Movimentos</h2>
                    <UlMoves>
                        {pokemonDetails.moves.map((move, index) => (
                            <li key={index}>{move} </li>
                        ))}
                    </UlMoves>
                </MovesList>
            </CardInfo>
        </BodyPage>
    );
};

export { PokemonDetails };
