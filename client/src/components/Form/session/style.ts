import { motion } from 'framer-motion';
import styled from 'styled-components';


export const ContainerForm = styled(motion.form)<{ active?: boolean }>`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 69%;

    padding: 8% 10%;
    background-color:  #fff;

    border-top-left-radius: 0;
    border-top-right-radius: 0;

    box-shadow: -1px 0px 22px 0px rgba(0,0,0,0.20);

    h3 {
        font-size: 20px;
        font-weight: 600;
    }
   
    @media(min-width:445px){
        /* form{ */
            width: 395px;
            padding: 32px 40px;
            /* height: 85%; */
        /* } */
    }
`;


export const BoxFormInputValue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;

    width: 100%;
    .footer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ContainerButton = styled.div`
    width: 100%;
    height: 100%;
`