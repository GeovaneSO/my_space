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
    padding: 15px;
    width: 100%;
    
    align-items: center;
    text-align: center;

    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.3);   

    background-color:${(props) => props.theme.header.backgroundColor};

    h3{
        font-size: 14px;
    }

    .svg{
        background-color: transparent;
    }
    
    h3, .svg, button{
        
        color: ${(props) => props.theme.header.textColor};
    }


    .box_btsn{
        display: flex;
        gap: 10px;
    }

`

export const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    gap: 20px;
    
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0;
    padding: 20px;

    width: 100%;

    height: 100%;

    background-color: ${(props) => props.theme.list.backgroundColor};

    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    li{
        display: flex;
        justify-content: space-around;
        padding: 5px;
        border-bottom: solid 0.1px ${(props) => props.theme.borderColor};
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
        .box_information, button{
            color: ${(props) => props.theme.header.textColor};

        }
    }

`