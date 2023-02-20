import styled from 'styled-components';

export const Container = styled.div`
     position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;
    inset: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.3);

`

export const ContainerModal = styled.div`
         position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
    inset: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.3);

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

export const ContainerForm = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    width: 95%;
    /* height: 70%; */

    padding: 6% 5%;
    background-color:  #fff;

    border-top-left-radius: 0;
    border-top-right-radius: 0;

    box-shadow: -1px 0px 22px 0px rgba(0,0,0,0.20);

    h3 {
        font-size: 20px;
        font-weight: 600;
    }
   

`;

export const BoxTitle = styled.div`

    display: flex;
    justify-content: space-between;
    
    gap: 15px;
    align-items: center;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 15px;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.3);   
    width: 95%;
    background-color: white;
    background-color: rgb(100, 910, 902);

    h3{
        font-size: 14px;
    }

    .svg{
        color: gray;
        background-color: transparent;
    }

    .box_btns{
        display: flex;

        gap: 10px;
    }

`
