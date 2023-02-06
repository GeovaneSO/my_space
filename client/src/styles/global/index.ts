import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }
    html, body, #root {
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
    font-family: 'Inter', sans-serif;
  }  
    body {
        background: var(--color-background);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        background: #F4F4F4;   
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
