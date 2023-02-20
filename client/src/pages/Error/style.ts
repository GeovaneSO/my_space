import styled from "styled-components";

export const ContainerSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100vw;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${(props) => props.theme.grey4};
    background: #121214;   

    .img {
        width: 60%;
    }
    @media (max-width: 950px) {
        background-position: center center;

        .img {
            width: 70%;
        }
    }
    @media (max-width: 600px) {
        background-position: center center;

        .img {
            width: 100%;
        }
    }
`;
