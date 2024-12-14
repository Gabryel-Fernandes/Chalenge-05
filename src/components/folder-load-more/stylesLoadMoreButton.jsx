import styled from "styled-components";

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
  background-color: ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")};
    color: ${(props) => (props.theme === "dark" ? "#282828" : "#fff")};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 40px;
  padding: 15px 25px;
  box-shadow: 2px 3px 0 ${(props) => (props.theme === "dark" ? "#d8d7d7" : "#282828")}, 4px 6px 0 #000;
  transition: background-color 0.3s;
  font-family: "Poppins", sans-serif;

  &:active{
    box-shadow: inset -4px 4px 0 #282828;
    font-size: 15px;
  }
`;

export {Button, ContainerButton}