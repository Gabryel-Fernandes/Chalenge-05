import styled from "styled-components";

const ContainerToggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;

  @media(max-width: 720px){
      flex-direction: column;
      gap: 30px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
  color: ${(props) => (props.theme === "dark" ? "#282828" : "#fff")};
  font-size: 20px;
  font-weight: 600;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 15px 15px;
  box-shadow: 2px 3px 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")}, 4px 6px 0 #000;
  transition: background-color 0.3s;
  font-family: "Poppins", sans-serif;
`;

const LogoPokemons = styled.img`
  height: 90px;
`

const ToggleButton = styled.button`
  background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
  color: ${(props) => (props.theme === "dark" ? "#282828" : "#fff")};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 15px 60px;
  box-shadow: 2px 3px 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")}, 4px 6px 0 #000;
  transition: background-color 0.3s;
  font-family: "Poppins", sans-serif;

  &:active{
    box-shadow: inset -4px 4px 0 #282828;
    font-size: 15px;
  }
`;

export { ToggleButton, SearchInput, SearchContainer, ContainerToggler, LogoPokemons }
