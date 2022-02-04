import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body{
        padding:20px 40px;

        @media(max-width: 800px){
          padding: 10px;
        }
    }

    a{
        text-decoration: none;
        color: black;
    }
`;
