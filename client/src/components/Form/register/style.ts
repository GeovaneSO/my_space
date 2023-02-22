import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Theme } from '../../../interfaces/theme.interface';

export const ContainerForm = styled(motion.form)<{ active?: boolean, theme: Theme }>`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 72%;

    padding: 8% 10%;
    background-color:  ${(props) => props.theme.form.backgroundColor};

    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-radius: 5px;

    box-shadow: ${(props) => props.theme.form.boxShadow};

    h3 {
        font-size: 20px;
        font-weight: 600;
        color: ${(props) => props.theme.header.textColor};

    }

    .footer{
        width: 80%;
        height: 100%;
    }
   
    @media(min-width:445px){
        width: 395px;
        
        padding: 32px 40px;
    }
`;


export const ContainerLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        font-size: 10px;
    }
    a{
        font-size:10px ;
    }
    gap: 5px;

`


export const ContainerButton = styled.div`
    width: 70%;
    height: 100%;
`