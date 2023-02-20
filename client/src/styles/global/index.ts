import styled, { createGlobalStyle }  from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }
    html, body {
        width: 100vw;
        height: 100%;
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
    }  
  #root {
    width: 100vw;
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
    *::-webkit-scrollbar {
            width: 5px;   
            border: 1px solid            /* width of the entire scrollbar */
    }   
    *::-webkit-scrollbar-track{
        background: #F4F4F4; 
    }
    *::-webkit-scrollbar-thumb{
        background-color: #A1A1A1;
        border-radius: 100px;    
        border: 1px solid #A1A1A1

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
    li, input {
        cursor: pointer;
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
    justify-content: center;
    width: 50px;
    height: 50px;
    
    cursor: pointer;

    img{
        border: 1px #2C3357 solid;
        width: 100%;
        border-radius: 50%;
    }
    .div_img{
        background-color: rgb(600, 200, 111);
        border: 1px #2C3357 solid;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        color: #2C3357;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .svg{
        /* font-size: 50px; */
        /* border: 1px #2C3357 solid; */
        width: 100%;
        height: 100%;
        /* background-color: ; */
        color:  #2C3357 ;
        /* border-radius: 50%; */
    }
`