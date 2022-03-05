import styled, { css } from 'styled-components';
import Button from './index';
import theme from '../../ui/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 112px;
  height: 30px;
  background: ${props => props.opened ?
   `${theme.colors.primary.red}` : `${theme.colors.background.light}`
  };
  border-radius: 300px;
  padding: 0 19px;
  user-select: none;
`;