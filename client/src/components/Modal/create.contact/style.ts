import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerModal = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
    inset: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.3);

    .box_title{
        display: flex;

        justify-content: space-between;

        width: 100%;
        position: relative;
        top: -20px;

    }

    .form{
        width: 85%;
        height: 75%;
        padding: 8%;
        .box_input_value{
            height: 80%;
        }
    }
    
    .button_register{
        
        height: 100%;
        padding: 5%;

    }

    @media (min-width: 500px) {
        .form{
            width: 396px;
            padding:38px
        }
    }
`

export const BoxTitle = styled.div`
    display: flex;

    justify-content: space-between;

    width: 100%;
    position: relative;
    top: -20px;

`
export const ContainerListInformation = styled(motion.div)<{ active?: boolean }>`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 80%;
    height: 100%;
        
    @media (min-width: 500px) {
        width: 396px;
    }

`
export const ContainerForm = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 65%;

    padding: 6% 10%;
    background-color:  #fff;

    border-top-left-radius: 0;
    border-top-right-radius: 0;

    box-shadow: -1px 0px 22px 0px rgba(0,0,0,0.20);

    h3 {
        font-size: 20px;
        font-weight: 600;
    }
   

`;

export const ContainerButton = styled.div`
    width: 80%;

`