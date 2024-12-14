import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 62.5%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-family: "Poppins", sans-serif;
        background: rgb(105,0,0);
        background: linear-gradient(62deg, rgba(105,0,0,1) 0%, rgba(190,0,0,1) 60%);
    }

    ul, li{
    list-style-type: none;
}

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }



`
export default GlobalStyle