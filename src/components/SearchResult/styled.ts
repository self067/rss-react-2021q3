import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin: 15px;
  padding: 10px;
  border: 2px solid #33dd11;
  /* text-decoration: none; */
`;

export const FormLink = styled(Link)`
  color: #135a15;
  border: 1px solid #333311;
  text-decoration: none;
  &:visited {
  }
`;

export const FormItem = styled.div`
  margin: 5px;
`;

export const FormItemName = styled(FormItem)`
  font-weight: bold;
`;
