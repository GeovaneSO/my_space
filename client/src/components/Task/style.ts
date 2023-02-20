import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: #ffff;
`
export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    border: 1.4px solid #EBEBEB;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    gap: 20px;
    height: 100%;
`

export const ContainerHeader = styled.div`
    display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px;
   border-top-left-radius: 5px;
    border-top-right-radius: 5px;
   height: 61px;
   background-color: rgb(117 222 255);

   
`
export const ContainerBtns = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    gap: 10px;
    .btn{
        border: 1px #000080 solid;
        :hover{
            background-color: #999B;
        }
        :focus{
            background-color: #999B;

        }
        padding: 5px;
        font-size: 12px;
    }

    @media (min-width: 450px) {
        width: 40%;
    }
    @media (min-width: 630px) {
        width: 50%;
    }
    @media (min-width: 850px) {
        width: 167px;
        width: 30%;
    }
`

export const ContainerList = styled.ul`
    display: flex;
    height: 350px;
    gap: 10px;
    background-color: #ffff;
    flex-direction: column  ;
    overflow-y: auto;
    
`

export const ContainerSubtitle = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    border-bottom: 1.4px solid #EBEBEB;
    padding: 15px;

    .box-1{
        width: max-content;
    }

    .box-2{
        width: 60%;
        justify-content: space-between;
        .box-2-content{
            display: flex;
            gap: 25px;
        }
    }

    p{
        font-size: 10px;
        color:  #A1A1A1;
    }

    @media (min-width: 516px) {
        .box-1{
            width: 20%;
        }
    }
    @media (min-width: 1000px) {
        .box-1{
            width: 15%;
        }
        .box-2{
            width: 50%;
            justify-content: space-between;
            
        }
    }
`
export const SubtitleContent = styled.div`
    display: flex;
    width: 100%;  
    justify-content: space-between;
    width: 40%;
    gap: 15%;
    @media (min-width: 1000px) {
        .box-2-content{
            display: flex;
            justify-content: space-between;
            width: 35%;
        }
    }
`

export const Columns = styled.div`
    width: max-content;
`
export const SvgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin: 0 auto;
    width: 80%;
    @media (min-width: 850px) {
        width: 330px;
    }
    /* width: 40%; */
    /* height: 50%; */
`