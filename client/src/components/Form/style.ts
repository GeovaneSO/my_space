import styled from 'styled-components';
import { Theme } from '../../interfaces/theme.interface';

export const ContainerForm = styled.form<{theme: Theme}>`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    width: 100%;

    padding: 6% 6%;
    background-color: ${(props) => props.theme.list.backgroundColor};

    border-top-left-radius: 0;
    border-top-right-radius: 0;

    box-shadow: -1px 0px 22px 0px rgba(0,0,0,0.20);

    h3 {
        font-size: 20px;
        font-weight: 600;
    }
    textarea, select{
        background-color: ${(props) => props.theme.list.backgroundColor};

    }
    .title{
        background-color: ${(props) => props.theme.list.backgroundColor};

    }

`;

export const BoxFormInputValue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
`
export const ContainerLink = styled.div<{theme: Theme}>`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    span{
        font-size: 10px;
        color: ${(props) => props.theme.header.textColor};

    }
    a{
        font-size:10px ;
    }
    gap: 5px;

    @media (min-width: 342px) {
        span{
        font-size: 12px;
    }
    a{
        font-size:12px ;
    }
    }

`