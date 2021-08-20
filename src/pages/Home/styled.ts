import styled, { keyframes } from 'styled-components';
// import inf from 'assets/images/infinity.svg';
import { slideInDown, slideInUp, slideInRight, slideInLeft } from 'react-animations';

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
  height: 200px;
  width: 200px;
  /* background: url($"{inf}) no-repeat center; */
  background-size: cover;
  text-align: center;
`;
