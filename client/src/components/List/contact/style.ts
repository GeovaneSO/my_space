import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    .box_title{
        display: flex;
        justify-content: space-between;

        gap: 15px;
        align-items: center;
        text-align: center;
        height: 10%;
        padding: 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: rgb(117 222 255);
        h3{
            font-size: 18px;
        }
    }

    @media(min-width: 370px) {
        
        /* width: 314px */
        
    }

`

export const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    
    gap: 20px;
    
    overflow-y: auto;
    
    margin: 0;
    padding: 20px;

    width: 100%;
    height: 377px;


    border: 0.2px solid #E9ECEF ;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: white;
    
    li{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #acc9ff;
    border-top: 1px dashed #acc9ff;
    padding: 10px 0;

        .box_name_contact{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            gap: 5px;
            
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

    
`