import styled, { createGlobalStyle }  from "styled-components";

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
    font-family: 'Roboto', sans-serif;
  }  
    body {
        background: var(--color-background);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        background: #F4F4F4;   
    }
    body, label,input, button, textarea {
        font-family: 'Roboto', sans-serif;
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

export const SectionForm = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    height: 100%;
`;


export const ImageContainer = styled.figure`
    display: flex;

    width: 50px;
    height: 50px;
    img{
        border: 1px #2C3357 solid;
        width: 100%;
        border-radius: 50%;
    }
`