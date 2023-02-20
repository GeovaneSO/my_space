import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavBarContainer = styled(motion.div)<{ active?: boolean }>`
    position: fixed;
    z-index: 9999;
    inset: 0;
    display: flex;
    flex-direction: row-reverse;
    
    /* background: rgba(18, 18, 20, 0.5); */

    
    `

export const NavBarSection = styled(motion.section)<{ active?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 10%;
        width: 75%;
    height: 100%;
   
    background-color:  #80cfe7e6;

    box-shadow: 3px -1px 31px 3px rgba(0,0,0,0.48);
   
    border-radius: 1px;
   
    padding: 5%;

    @media (min-width: 370px) {
        width: 280px;
        padding: 34px;
    }
`

export const BoxBtnNav = styled(motion.div)<{ active?: boolean }>`
    display: flex;
    flex-direction: column;

    gap: 8%;

    height: 80%;
    
`