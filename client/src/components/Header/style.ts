import styled from 'styled-components';
import { Theme } from '../../interfaces/theme.interface';

export const HeaderContainer = styled.header<{theme?: Theme}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    
    position: fixed;
    z-index: 1;
    inset: -1000;

    background-color:${(props) => props.theme.header.backgroundColor};
    box-shadow: ${(props) => props.theme.header.boxShadow};  
    height: 62px;
    padding: 1%;
    font-size: 70%;

    .bt{
        position: absolute;
        top: 0;
        right: -10px;
    }
        h2{
            font-size: 22px;
            width: fit-content;
            color: ${(props) => props.theme.header.textColor};
        }

        span{
            width: fit-content;
        }
    .container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 2%;
        background-color: blue;
        span{
                color: #868E96;
        }

        .box_bnt{
            display: flex;
            gap: 10px;
        }
    }

    @media(min-width: 320px) {
        
        .container{
            padding: 3%;
        }
        
    }
    @media(min-width: 1000px) {
        
        align-items: center;
        .container{
            width: 1000px;

        }
        
    }

`