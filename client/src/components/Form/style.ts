import styled from 'styled-components';

export const ContainerForm = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    width: 100%;
    /* height: 70%; */

    padding: 6% 6%;
    background-color:  #fff;

    border-top-left-radius: 0;
    border-top-right-radius: 0;

    box-shadow: -1px 0px 22px 0px rgba(0,0,0,0.20);

    h3 {
        font-size: 20px;
        font-weight: 600;
    }
   

`;

export const BoxFormInputValue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;

`
export const ContainerLink = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    span{
        font-size: 10px;
    }
    a{
        font-size:10px ;
    }
    gap: 5px;

    @media (min-width: 342px) {
        span{
        font-size: 12px;
    }
    a{
        font-size:12px ;
    }
    }

`