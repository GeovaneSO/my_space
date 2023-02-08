import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    background-color: rgb(100, 910, 902);
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.1);  
    position: fixed;
    z-index: 1;
    inset: -1000;

    padding: 0.75%;
    font-size: 70%;

        h2{
            font-size: 22px;
            width: fit-content;
        }

        span{
            width: fit-content;
        }
    /* margin:  0 auto; */
    .container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 2%;
        background-color: blue;
        span{
                color: #868E96;
        }

        .box_bnt{
            display: flex;
            gap: 10px;
        }
    }

    @media(min-width: 320px) {
        
        .container{
            padding: 3%;
        }
        
    }
    @media(min-width: 1000px) {
        
        align-items: center;
        .container{
            width: 1000px;

        }
        
    }

`