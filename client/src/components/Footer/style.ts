import styled from 'styled-components';
import { Theme } from '../../interfaces/theme.interface';


export const SectionContainerFooter = styled.footer<{theme: Theme}>`
    width: 100vw;
    height: 300px;
    padding: 40px 10px;

    border-top: 1px solid ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.header.textColor};
    background-color: ${(props) => props.theme.footer.backgroundColor};
    
    
    @media (min-width: 360px) {
        padding: 40px 21px;
    }
    @media (min-width: 630px) {
        height: 200px;
    }

`

export const FooterContent = styled.div<{theme: Theme}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 60px;
    
    height: 100%;
    padding: 16px 0;

    h3{
        font-size: 18px;
    }
    
    a{
        color: ${(props) => props.theme.header.textColor};

    }

    @media (min-width: 360px) {
        padding: 16px 2%;
    }

`

export const BoxLink = styled.div<{theme: Theme}>`
    display: flex;
    justify-content: space-around;
    width: 200px;

`