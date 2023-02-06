import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;

    .container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 2%;
        
        span{
                color: #868E96;
            }

            .box_bnt{
                display: flex;
                gap: 10px;
            }
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