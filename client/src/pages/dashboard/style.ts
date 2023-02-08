import styled from 'styled-components';

export const ContainerDashboard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width:100vw;
    height: 100%;
    background-color: #F4F4F4;
`

export const ContainerMainDashboard = styled.main`
    display: flex;
    flex-direction: column;

    /* gap: 30px; */
    /* padding: 20% 8%; */
    /* padding-bottom: 2%; */
    width: 100%;
    height: 100%;
    
    background-color:  #f3f7f9;
    @media (min-width: 450px) {
        /* padding-top: 8%; */
    }
`

export const SectionContacts = styled.section`
    display: flex;
    flex-direction: column;

    /* justify-content: center; */
    align-items: center;
    height: 100%;


`