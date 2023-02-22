import styled from 'styled-components';
import { Theme } from '../../interfaces/theme.interface';

export const ContainerMainSession = styled.main<{theme?: Theme}>`
    display: flex;
    flex-direction: column;

    gap: 15px;
    padding: 0 8%;
    
    width: 100vw;
    height: 100vh;

    background-color:${(props) => props.theme.backgroundColor}; 
`


export const SectionForm = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    height: 100%;
    padding-top: 25px ;
`;

export const SvgContainer = styled.div`
    width: 50%;
`