import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)<{ active?: boolean }>`
     position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;
    inset: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.3);

`

export const ContainerListInformation = styled(motion.div)<{ active?: boolean }>`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 80%;
    height: 60%;
        
    @media (min-width: 384px) {
        width: 310px;
    }

`

export const BoxTitle = styled.div`

    display: flex;
    justify-content: space-between;
    
    gap: 15px;
    align-items: center;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 15px;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.3);   
    width: 100%;
    background-color: white;
    background-color: rgb(100, 910, 902);

    h3{
        font-size: 14px;
    }

    .svg{
        color: gray;
        background-color: transparent;
    }

    .box_btsn{
        display: flex;
        gap: 10px;
    }

`

export const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    
    gap: 20px;
    
    overflow-y: auto;
    margin: 0;
    padding: 20px;

    width: 100%;

    height: 100%;

    background-color: white;

    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    li{
        display: flex;
        justify-content: space-around;
        padding: 5px;
        border-bottom: solid 0.1px;
        .box_information{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            width: 100%;
            p{
                width: 100%;
                font-size: 12px;
            }
        }
    }
/* 
    @media(min-width: 320px) {
        
        width: 272px;
        
    } */
    @media(min-width: 1400px) {
        
        /* width: 300px; */
        
    }
`