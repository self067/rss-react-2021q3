import styled, { keyframes } from 'styled-components';
import { slideInDown, slideInUp, slideInRight, slideInLeft } from 'react-animations';

/// /* animation: 2s ${keyframes`${slideInUp}`}; */
/// // /* animation: 1s ${keyframes`${slideInDown}`}; */

export const DetailsCard = styled.div`
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
  text-align: center;
`;
