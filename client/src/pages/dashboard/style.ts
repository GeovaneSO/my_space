import styled from 'styled-components';

export const ContainerDashboard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width:100vw;
    height: 100%;
    background-color: #F4F4F4;
`

export const ContainerMainDashboard = styled.main`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 0 6%;
    gap: 20px;
    background-color:  #f3f7f9;
    @media (min-width: 380px) {
        align-items: center;

    }
    @media (min-width: 632px) {
        align-items: normal;
        flex-direction: row;
        /* gap: 15%; */
        padding: 0 4%;

    }

`

export const SectionContacts = styled.section`
    display: flex;
    flex-direction: column;

    height: 100%;
    /* padding: 0 42px; */
    padding: 0;
    width: 100%;
    @media (min-width: 380px) {
        width: 380px;

    }
    @media (min-width: 768px) {

    }
`


export const SectionTasks = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @media (min-width: 634px) {
        width: 70%;
    }   
`

export const SectionUserContainer = styled.section`
    display: flex;
    align-items: center;
    padding: 0 21px;
    width: 100vw;
    height: 30%;
    margin-top: 89px;
    /* background-color:  #80cfe78f; */
    background-color: #f4f4f4;

    `
export const SectionUser = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 16px 2% ;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #acc9ff;
    border-top: 1px solid #acc9ff;
`