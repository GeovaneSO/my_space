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
    height: 100%;

    input, textarea, select, option{
        background-color: ${(props) => props.theme.list.backgroundColor};
        border-radius: 3px;
    }
        
    @media (min-width: 500px) {
        width: 396px;
    }

`


export const BoxTitle = styled.div`

    display: flex;
    justify-content: space-between;
    
    gap: 15px;
    align-items: center;
    text-align: center;
    padding: 15px;
    width: 100%;
    
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.3);   

    background-color:${(props) => props.theme.header.backgroundColor};

    h3{
        font-size: 14px;
        color: ${(props) => props.theme.header.textColor};
    }

    button{
        color: ${(props) => props.theme.header.textColor};
    }

    .box_btns{
        display: flex;

        gap: 20px;
    }

`

export const ContainerModal = styled.div`
         position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;
    inset: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.5);

    .box_title{
        display: flex;

        justify-content: space-between;

        width: 100%;
        position: relative;

        h3{
            margin-top: 0;
        }
    }

    .form{
        height: 50%;
        padding: 20px;
        gap: 35px;

        .box_input_value{
            gap: 20px;
        }
        .box_btns{
            display: flex;
            gap: 12px;
        }
    }
`

export const ContainerButton = styled.div`
    width: 100%;
    height: 100%;
`