import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 60px;
  width: 70%;

  margin: 0;

  button {

    color: gray;
    border: none;
    border-radius: 5px;

    color: white;
    padding: 5px;

    background-color: #2C3357;

    font-size: 85%;
    width: 70%;
    height: 100%; 
    .svg{
      color: gray;
      background-color:  transparent;
      width: 20px;

    }
  }
`;