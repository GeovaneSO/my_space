import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 20px;
  height: 40%;
  width: 100%;
  border: none;
  border-bottom: 1px solid;


  label{
    font-weight: 400;
    font-size: 12px;
    line-height: 0px;
  }

  input {
    width: 100%;
    padding: 5px;
    border: none;
  }
`;
