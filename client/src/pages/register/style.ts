import styled from 'styled-components';
import { Theme } from '../../interfaces/theme.interface';

export const ContainerPageRegister = styled.div<{theme?: Theme}>`
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100vw;
`

export const ContainerMainRegister = styled.main<{theme?: Theme}>`
    display: flex;
    flex-direction: column;

    gap: 30px;
    padding: 30% 8%;
    padding-bottom: 4%;
    width: 100vw;
    
    background-color:${(props) => props.theme.backgroundColor}; 
    @media (min-width: 450px) {
        padding-top: 15%;
    }
    @media (min-width: 710px) {
        padding-top: 100px;
    }
`
export const SectionForm = styled.section<{theme?: Theme}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    height: 100%;
`;

export const SvgContainer = styled.div`
    width: 40%;
`
