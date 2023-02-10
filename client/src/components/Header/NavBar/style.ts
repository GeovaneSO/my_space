import styled from 'styled-components';

export const NavBarContainer = styled.div`
    position: fixed;
    z-index: 1;
    inset: 0;


    /* background: rgba(18, 18, 20, 0.5); */

    
    `

export const NavBarSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10%;
        width: 75%;
    height: 100%;
   
    background-color: rgb(100, 910, 200);
    box-shadow: 3px -1px 31px 3px rgba(0,0,0,0.48);
   
    border-radius: 1px;
   
    padding: 5%;

    @media (min-width: 370px) {
        width: 280px;
        padding: 34px;
    }
`

export const BoxBtnNav = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8%;

    height: 80%;
    
`