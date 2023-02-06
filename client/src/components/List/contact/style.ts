import styled from 'styled-components';

export const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    
    gap: 20px;
    
    overflow-y: auto;
    
    margin: 0;
    padding: 20px;

    width: 85%;

    border: 0.2px solid gray ;
    border-radius: 5px;

    background-color: white;
    .box_title{
        display: flex;
        justify-content: space-between;

        gap: 15px;
        align-items: center;
        text-align: center;

        h3{
            font-size: 18px;
        }
    }
    li{
        display: flex;
        justify-content: space-between;

        .box_name_contact{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: 100px;
            p{
                font-size: 12px;
                text-overflow: ellipsis;

                max-width: 15ch;

                overflow: hidden;

                white-space: nowrap;
            }
        }
    }

    @media(min-width: 330px) {
        
        width: 320px;
        
    }
    @media(min-width: 500px) {
        
        width: 65%;
        
    }
    @media(min-width: 728px) {
        
        width: 500px
        
    }

`