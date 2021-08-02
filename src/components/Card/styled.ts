import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 5px;
  margin: 10px;
  max-width: 300px;
  border: 3px solid green;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  font-size: 18px;
`;

export const CardImage = styled.img`
  height: auto;
  width: auto;
  margin: 5px 0;
`;

export const CardDescription = styled.p`
  margin-bottom: 3px;
`;
