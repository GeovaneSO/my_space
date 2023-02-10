import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  label{
    font-weight: 400;
    font-size: 12px;
    line-height: 0px;
  }

  .a{
      border: 2px dashed #ccc;
      width: 100%;
      /* padding: 20px; */
      height: 60px;
      border: none;
      border-bottom: 1px solid;

      /* text-align: center; */

    }
    .dropzone-input {
      cursor: pointer;
      .input {
        /* height: 100%; */
      }
      display: flex;
      justify-content: center;

      span{
        font-weight: 400;
  font-size: 12px;
  line-height: 0px;
text-align: center;
      }
height: 20px;
    }

  input {
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 1px solid;
  };

  .box_input_error {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
  }

  .box_label_error{
    height: 14px;
  }

  .dropdown {
      position: relative;
      top: 5px;
      display: inline-block;
      height:  16px;
      margin-left: 10px;
      
      .svg{
        color:red;

        width: 10px;
      }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    background-color: white;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1;
    border-radius: 0.15vw;

    color:red;
    margin: 0;

    p {
        font-size: 60%;
        width: fit-content;
        margin: 0;
        line-height: 20px;
    }
  }

  .dropdown:hover .dropdown-content {
      display: block;
  }
`;

export const ErrorsSpan = styled.span`
  font-size: 8px;
  margin: 0;
`;
