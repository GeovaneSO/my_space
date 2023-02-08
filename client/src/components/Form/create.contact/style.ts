import styled from 'styled-components';

export const ContainerModal = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
    inset: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.5);

    .box_title{
        display: flex;

        justify-content: space-between;

        width: 100%;
        position: relative;
        top: -20px;

    }

    .form{
        width: 85%;
        height: 75%;
        padding: 8%;
        .box_input_value{
            height: 80%;
        }
    }
    .button_register{
        height: 100%;
        padding: 5%;

    }

    @media (min-width: 456px) {
        .form{
            width: 367px;
            padding:38px
        }
    }
`