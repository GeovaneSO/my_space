import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }
    body,html{
        width: 100vw;
        height: 100vh;
    }
    body {
        background: var(--color-background);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        background: #ffff;   
    }
    body, input, button, textarea {
        font-family: 'Inter', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, strong {
        /* font-weight: 500; */
    }
    button {
        cursor: pointer;
    }
    ul, ol{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
`;
