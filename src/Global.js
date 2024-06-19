import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #000814 ;
        color: #E0E1DD;
    }
    h1, h3{
        font-family: 'Josefin Sans', sans-serif;
    }
    button, p, span {
        font-family: "Poppins", sans-serif;
    }
`;
