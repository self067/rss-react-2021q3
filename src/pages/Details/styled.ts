import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';
import inf from 'assets/images/infinity.svg';

export const DetailsCard = styled.div`
  animation: 1s ${keyframes`${slideInUp}`};
  padding: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 28px;
`;

export const DetailsItem = styled.div`
  margin: 5px;
`;

export const H1 = styled.h1`
  font-size: 40px;
  color: green;
  text-align: center;
`;

export const Loader = styled.div`
  padding: 50px;
  height: 200px;
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  color: green;
  background: url(${inf}) no-repeat center;
  background-size: cover;
  text-align: center;
`;
