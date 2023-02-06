import styled from 'styled-components';

export const ContainerListInformation = styled.div`
     position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
    inset: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.5);
    .box{
        height: 60%;
        background-color: white;
        border: 0.2px solid gray ;
    border-radius: 5px;
    .box_title{
        display: flex;
        justify-content: space-between;

        gap: 15px;
        align-items: center;
        text-align: center;
        padding: 10px;
        box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.3);   


        h3{
            font-size: 12px;
        }

        .svg{
            color: gray;
            background-color: transparent;
        }

        .box_btsn{
            display: flex;
            gap: 10px;
        }
    }


    }

`

export const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    
    gap: 20px;
    
    overflow-y: auto;
    margin: 0;
    padding: 20px;

    width: 85%;

    height: 100%;

    background-color: white;

    border-radius: 5px;
    li{
        display: flex;
        justify-content: space-around;
        padding: 5px;
        border-bottom: solid 0.1px;
        .box_information{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            width: 100%;
            p{
                width: 100%;
                font-size: 10px;
            }
        }
    }

    @media(min-width: 320px) {
        
        width: 272px;
        
    }
    @media(min-width: 1400px) {
        
        width: 300px;
        
    }
`