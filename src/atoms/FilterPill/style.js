import styled, { css } from 'styled-components';
import Button from './index';
import theme from '../../ui/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${theme.colors.primary.red};
  border-radius: 300px;
  user-select: none;
  padding: 5px 11px;
  
  > span {
    margin-left: 18px;
    display: flex;
  }
`;