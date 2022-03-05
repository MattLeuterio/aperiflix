import styled, { css } from 'styled-components';
import Button from './index';
import theme from '../../ui/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  
  & > div:not(:last-child) {
    margin-right: 15px;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;