import styled, { keyframes } from 'styled-components';
import { slideInDown, slideInUp } from 'react-animations';
import inf from 'assets/images/infinity.svg';

export const Main = styled.div`
  animation: 2s ${keyframes`${slideInUp}`};
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H1 = styled.h1`
  animation: 1s ${keyframes`${slideInDown}`};
  color: green;
  text-align: center;
`;

export const Loader = styled.div`
  padding-top: 20px;
  height: 200px;
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  color: green;
  background: url(${inf}) no-repeat center;
  background-size: cover;
  text-align: center;
`;
