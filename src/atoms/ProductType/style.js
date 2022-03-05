import styled, { css } from 'styled-components';
import Button from './index';
import theme from '../../ui/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  
  & > div:not(:last-child) {
    margin-right: 30px;
  }
`;

export const Product = styled.div`
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primary.red};
  }
`;