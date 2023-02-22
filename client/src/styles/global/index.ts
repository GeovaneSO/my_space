import styled, { createGlobalStyle }  from "styled-components";
import { Theme } from "../../interfaces/theme.interface";

export default createGlobalStyle`
:root{
    --white:#FFFFFF;
    --black: #000000;
    --black-2:#212221;
    --black-3: #131313;
    --black-4: #1b1c1c;
    --grey-1: #383838;
    --grey-2: #757575;
    --grey-3: #FAFAFA;
    --grey-4: #F4F4F4;
    --grey-5: #D9D9D9;
    --grey-6: #D3D4E6;
    --grey-7: #a3a3a3;
    --grey-8: #c7c2be;
    --grey-9: #353736;
    --grey-10: #EBEBEB;
    --grey-11: #F1F3F5;
    --orange-1: #F66813;
    --orange-2: #DF3B19;
    --blue-1: #2927A6;
    --blue-2: #272586;
    --blue-3: #155BCB;
    --blue-4: #79a2ff;
    --blue-5: #248aa9e6;
    --blue-6: #151A69;
    --blue-7: #2C3357;
    --blue-8: #75deff;
    --blue-9: #acc9ff;
    --blue-10: #000080;
    --red-1: #E60000;
    --red-2: #F40000;
    --green-1: #3FE864;
    --green-2: #13586b;
    --green-3: #80cfe7e6;
    --green-4: #13586bf7;
    --green-5: #a0a470;
    --green-6: #F1F3D0;
    --yellow-1: #FFCD07;
    --shadow-header-1: 0px 3px 7px -1px rgba(0,0,0,0.1);
    --shadow-header-2: 0px 2px 3px -1px #a3a3a3;
    --shadow-form-1: -1px 0px 15px 0px rgba(0,0,0,0.20);
    --shadow-form-2: 0px 0px 4px 0px #a3a3a3;
    --transparent: transparent;

}
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
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
        background-color: --;
    }
    *::-webkit-scrollbar {
        width: 5px;   
        border: 1px solid ;
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


export const ImageContainer = styled.figure<{theme?: Theme}>`
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    
    cursor: pointer;

    img{
        border: 1px solid ${(props) => props.theme.borderColor_3};
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
        width: 100%;
        height: 100%;

        color:  #2C3357 ;
        color: ${(props) => props.theme.header.textColor};
    }
`