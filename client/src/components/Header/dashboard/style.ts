import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 62px;
    background-color: rgb(100, 910, 902);

    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.3);    
    display: flex;
    justify-content: center;
    align-items: center;
    padding:21px;
    /* position: fixed;
    z-index: 1;
    inset: -1000; */

    .container{
        width: 100%;
        padding: 2%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
        
    .box_logout{
        display: flex;
        align-items: center;
        gap: 5px;
        .logout{
            font-size: 15px;
        }
    }
    span{
        color: #868E96;
    }

    .box_bnt{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    border: none;
    
    font-size: 70%;

        h2{
            font-size: 22px;
            width: fit-content;
        }

        span{
            width: fit-content;
        }
    margin:  0 auto;



    @media(min-width: 1000px) {
        
        align-items: center;
        .container{
            /* width: 1000px; */

        }
        
    }

`