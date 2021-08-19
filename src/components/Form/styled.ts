import styled from 'styled-components';

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px 10px 5px;
  margin: 10px;
  max-width: 300px;
  border: 3px solid #76ffe9;
`;

export const FormButton = styled.button`
  margin-top: 10px;
  padding: 5px;
  background-color: #76ffe9;
  &:hover {
    background-color: #76dcf9;
    cursor: pointer;
  }
`;

export const FormStatus = styled.div`
  margin-top: 5px;
  font-size: 22px;
  color: green; //#77f763;
  text-align: center;
  transition: all ease 1s;
`;
