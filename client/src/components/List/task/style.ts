import styled from 'styled-components';

export const List = styled.li<{status?: boolean}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20%;
    gap: 10px;
    justify-content: center;
    
    border-bottom: 1.4px solid #E9ECEF;
    border-top: 1.4px solid #E9ECEF;
    padding: 40px 18px;
    
    background-color:  ${(props) => props.status === true ? "#F1F3D0" : '#fff'} ;
    
    :hover{
        background-color:#F1F3F5;
    }

    .box-2{
        .box-description{
            width: 70%;
        }
    }

    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: center;

        justify-content: space-between;
        .box-1{
            gap: 35%;
        }
        .box-2{
            justify-content: flex-start;
            width: 70%;
            .box-description{
                justify-content: flex-start;
            }
            .box-category{
                gap: 30px;
            }
        }

        @media (min-width: 1000px) {
        .box-2{justify-content: space-between;}
        .box-category{
            justify-content: space-between;
            width: 22%;
            gap: 40px;
        }
    }
    }
    @media (min-width: 1200px) {
        .box-1{
            gap: 50px;
        }
    }
`
export const BoxContent = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-size: 12px;
        text-overflow: ellipsis;

        max-width: 100%;

        overflow: hidden;

        white-space: nowrap;
    }

   


    @media (min-width: 512px) {
        .box-description{
            width: fit-content;
        }
    }
`

export const Content = styled.div<{status?: boolean}>`
    display: flex;
    width: 100%;
    justify-content: end;
    text-decoration-line: ${(props) => props.status === true ? "line-through" : 'none'} ;

`

export const BoxCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:fit-content;
`