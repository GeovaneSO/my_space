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

    .form{
        height: 50%;
        .box_input_value{
            gap: 30px;
        }
    }

`
export const BoxContentTask = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    background-color: ${(props) => props.theme.list.backgroundColor};

    height: 50%;
    width: 100%;
    padding: 6% ;

    span{
        font-size: 14px;
        color: #343A40;
        color: ${(props) => props.theme.header.textColor};

    }
    p{
        font-size: 12px;
        line-height: 20px;
        font-weight: 300;
        color: ${(props) => props.theme.header.textColor};

    }

`

export const BoxButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 50%;
    height: 20%;

    .button_update{
        width: 100%;
        height: 100%;
    }
    .delete_btn{
        background-color: red;
        height: 100%;
    }
`