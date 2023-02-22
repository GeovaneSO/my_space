import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    .box_title{
        display: flex;
        justify-content: space-between;
        gap: 15px;
        align-items: center;

        padding: 20px;
        height: 10%;

        text-align: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        
        background-color: rgb(117 222 255);
        background-color:${(props) => props.theme.header.backgroundColor};
        
        h3{
            font-size: 18px;
        }

        h3, button{
            color: ${(props) => props.theme.header.textColor};

        }
    }

`

export const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    
    gap: 20px;
    
    overflow-y: auto;
    overflow-x: hidden;
    
    margin: 0;
    padding: 20px;

    width: 100%;
    height: 377px;
    
    border: 1.4px solid ${(props) => props.theme.borderColor_2};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: ${(props) => props.theme.list.backgroundColor};
   
    li{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed ${(props) => props.theme.borderColor};
        border-top: 1px dashed ${(props) => props.theme.borderColor};
        padding: 10px 0;
        
        color: ${(props) => props.theme.header.textColor};

        :hover{
            background-color: ${(props) => props.theme.list.hover};
        }

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