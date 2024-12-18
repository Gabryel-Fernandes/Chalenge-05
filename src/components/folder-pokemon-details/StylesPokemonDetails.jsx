import styled from "styled-components";
import typeColors from "../../style/TypeColors"


const BodyPage = styled.div`
    height: 80vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 720px){
      flex-direction: column;
      height: 100%;
  }
`

const ContainerReturnAndPokemon = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 0px 100px;

    @media(max-width: 720px){
        margin: 0px;
    }
`

const ButtonReturn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 310px;
    height: 60px;
    background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
    color: ${(props) => (props.theme === "dark" ? "#282828" : "#fff")};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    border: 2px solid #000;
    border-radius: 5px;
    box-shadow: 2px 3px 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")}, 4px 6px 0 #000;
    transition: background-color 0.3s;
    font-family: "Poppins", sans-serif;

    &:active{
        box-shadow: inset -4px 4px 0 #282828;
        font-size: 15px;
    }
`

const CardPokemon = styled.div`
    background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
    color: ${(props) => (props.theme === "dark" ? "#282828" : "#fff")};
    padding: 40px;
    border: 2px solid #000;
    border-radius: 5px;
    box-shadow: 2px 3px 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")}, 4px 6px 0 #000;
    transition: background-color 0.3s;
    margin: 40px 0px 0px 0px;
`;

const PicturePokemon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImgPokemon = styled.img`
    width: 200px;
    filter: drop-shadow(0px 0px 70px #009dff );
`

const PokemonName = styled.h1`
    color: ${(props) => (props.theme === "dark" ? "#282828" : "#fff")};
    text-transform: capitalize;
`

const ContainerType = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TypePokemon = styled.div`
    background-color: ${(props) => typeColors[props.type] || '#000'};
    color: white;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 5px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    box-shadow: .2rem .2rem .2rem #000000;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: scale(1.1);
        box-shadow: .4rem .4rem .4rem #000000;
    }    

`;

const CardInfo = styled.div`
    width: 50%;
    margin: 50px 230px 50px 50px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    border:2px solid #000000;
    background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
    box-shadow: 2px 3px 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")}, 4px 6px 0 #000;

    @media(max-width: 720px){
        margin: 40px;
        width: 100%;
        height: 100%;
    }
`

const SkillsList = styled.div`
    background-color: ${(props) => (props.theme === "light" ? "#d8d7d7" : "#282828")};
    border: 5px solid #000000;
    border-radius: 10px;
    padding: 10px;
    text-align: start;

    p {
        color: #ff0000; /* Destaque para mensagens de erro */
    }
`;

const UlSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: start;
    font-family: 'Poppins', sans-serif;
    max-height: 200px;
    overflow-y: auto; /* Rolagem vertical */
    padding: 10px;
    gap: 5px;
`;

const MovesList = styled.div`
    background-color: ${(props) => (props.theme === "light" ? "#d8d7d7" : "#282828")};
    border: 5px solid #000000;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0px 0px 0px;
    width: 100%; /* Permite ocupar todo o espaço disponível */
`;


const UlMoves = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    width: 100%;
    text-align: start;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    max-height: 200px;
    overflow-y: auto; /* Rolagem vertical */
    padding: 10px;
    gap: 5px;
    list-style: none;
`;


export { BodyPage, CardPokemon, CardInfo, MovesList, UlMoves, SkillsList, UlSkills, PicturePokemon, ImgPokemon, TypePokemon, PokemonName, ButtonReturn, ContainerReturnAndPokemon, ContainerType }