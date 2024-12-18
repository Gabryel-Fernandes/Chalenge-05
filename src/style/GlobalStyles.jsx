import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-family: "Poppins", sans-serif;
        background: linear-gradient(91deg, rgba(105,0,0,1) 0%, rgba(190,0,0,1) 100%);
    
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