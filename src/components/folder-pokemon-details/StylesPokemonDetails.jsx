import styled from "styled-components";
import typeColors from "../../style/TypeColors"


const BodyPage = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContainerReturnAndPokemon = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonReturn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 80px;
  background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
  color: ${(props) => (props.theme === "dark" ? "#282828" : "#fff")};
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  border: .2rem solid #000;
  border-radius: .5rem;
  margin: 2rem;
  box-shadow: .2rem .3rem 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")}, .4rem .6rem 0 #000;
  transition: background-color 0.3s;
  font-family: "Poppins", sans-serif;

  &:active{
    box-shadow: inset -.4rem .4rem 0 #282828;
    font-size: 1.5rem;
  }
`

const CardPokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 1rem;
   
    border: .2rem solid #000;
    background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
    box-shadow: .2rem .3rem 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
`;

const PicturePokemon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: .2rem;
`

const ImgPokemon = styled.img`
    width: 20rem;
    filter: drop-shadow(0px 0px 70px #009dff );
`

const PokemonName = styled.h1`
    color: ${(props) => (props.theme === "dark" ? "#282828" : "#fff")};
    text-transform: capitalize;
    text-shadow: .2rem .2rem .2rem #000000;
`

const TypePokemon = styled.div`
    background-color: ${(props) => typeColors[props.type] || '#000'};
    color: white;
    padding: 1.5rem 3rem;
    border-radius: .5rem;
    margin: .5rem;
    font-weight: bold;
    display: inline-block;
    font-size: 2rem;
    text-transform: uppercase;
    box-shadow: .2rem .2rem .2rem #000000;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: scale(1.1);
        box-shadow: .4rem .4rem .4rem #000000;
    }
`;


const CardInfo = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px;
    padding: 20px;
    border-radius: 10px;
    border:2px solid #000000;
    background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
    box-shadow: 2px 3px 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
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


export { BodyPage, CardPokemon, CardInfo, MovesList, UlMoves, SkillsList, UlSkills, PicturePokemon, ImgPokemon, TypePokemon, PokemonName, ButtonReturn, ContainerReturnAndPokemon }