import styled from 'styled-components';

export const ContainerForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    width: 100%;
    height: 80%;

    padding: 15px;
    background-color:  #fff;

    border: solid 1px;

    h3 {
        font-size: 15px;
        font-weight: 600;
    }
    @media(min-width: 320px) {
        
        width: 320px;
        
    }

`;

export const BoxFormInputValue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    /* padding: 10px; */
    width: 100%;
    height: 70%;

`