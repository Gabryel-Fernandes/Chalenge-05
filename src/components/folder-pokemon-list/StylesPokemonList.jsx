import styled from "styled-components";
import typeColors from "../../style/TypeColors"


const ContainerBoard = styled.div`
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BordPokemons = styled.div`
    width: 1245px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
    color: ${(props) => (props.theme === "dark" ? "#282828" : "#fff")};
    border-radius: 10px;
    border:2px solid #000000;
    padding: 20px;
    transition: background-color 0.3s;
    box-shadow: 2px 3px 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
    margin: 20px 30px;
`

const CardPokemon = styled.div`
    width: 220px;
    box-shadow: 0px 0px 5px  #000000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
`

const TypePokemon = styled.span`
  background-color: ${(props) => typeColors[props.type] || '#000'};
  color: white;  // Fonte branca
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px;
  font-weight: bold;
  display: inline-block;
`;

export { ContainerBoard, BordPokemons, CardPokemon, TypePokemon}