import styled from 'styled-components';

export const ContainerPageRegister = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100vw;
`

export const ContainerMainRegister = styled.main`
    display: flex;
    flex-direction: column;

    gap: 30px;
    padding: 20% 8%;
    padding-bottom: 2%;
    width: 100vw;
    
    background-color:  #f3f7f9;
    @media (min-width: 450px) {
        padding-top: 8%;
    }
`
export const SectionForm = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    height: 100%;
`;

export const SvgContainer = styled.div`
    width: 40%;
`