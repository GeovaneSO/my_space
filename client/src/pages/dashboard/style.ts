import styled from 'styled-components';
import { Theme } from '../../interfaces/theme.interface';

export const ContainerDashboard = styled.div<{theme?: Theme}>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width:100vw;
    height: 100%;
    background-color:${(props) => props.theme.backgroundColor}; 
`

export const ContainerMainDashboard = styled.main<{theme?: Theme}>`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 0 6%;
    gap: 20px;
    background-color:${(props) => props.theme.backgroundColor}; 
    @media (min-width: 380px) {
        align-items: center;

    }
    @media (min-width: 632px) {
        align-items: normal;
        flex-direction: row;
        padding: 0 4%;

    }

`

export const SectionContacts = styled.section`
    display: flex;
    flex-direction: column;

    height: 100%;
    padding: 0;
    width: 100%;

    @media (min-width: 380px) {
        width: 380px;

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
`



export const SectionUser = styled.div<{theme?: Theme}>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 16px 2% ;
    width: 100%;
    height: 100%;
    background-color:${(props) => props.theme.backgroundColor}; 

    border-bottom: 1px solid  ${(props) => props.theme.borderColor};
    border-top: 1px solid ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.header.textColor};

`