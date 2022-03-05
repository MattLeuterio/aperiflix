import styled from 'styled-components';
import theme from '../../../ui/theme';

export const NameData = styled.span`
  font-style: italic;
  color: ${theme.colors.custom.blue};
`;

export const BtnCancel = styled.div`
  margin-right: 8px;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 0;
  border-radius: 50px;
  color: ${theme.colors.custom.lightText};
  background-color: ${theme.colors.custom.darkGray};
  cursor: pointer;
  width: 90px;
  display: flex;
  justify-content: center;
`;

export const BtnDelete = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 5px 0;
  border-radius: 50px;
  color: ${theme.colors.custom.lightText};
  background-color: ${theme.colors.primary.red};
  cursor: pointer;
  width: 110px;
  display: flex;
  justify-content: center;
`;

export const DeletePublisherAction = styled.div`
  margin-top: 16px;
  display: flex;
  //justify-content: flex-end;
`;
