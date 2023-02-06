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
        gap:10px;
        h3{
            text-align: center;
            font-size: 13px;
            width: max-content;
        }
        .box_btn{
            button{
                height: max-content;
                width: max-content;

                display: flex;
                justify-content: end;
            }
        }
    }

    .form{
        height: 70%;
        padding: 22px;
        .box_input_value{
            height: 80%;
        }
    }
    .button_register{
        height: 100%;
    }
`