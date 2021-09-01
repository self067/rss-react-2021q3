import styled from 'styled-components';

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 5px;
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

export const FormResult = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  font-size: 18px;
`;
