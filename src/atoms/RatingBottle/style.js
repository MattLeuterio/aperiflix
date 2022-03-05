import styled, { css } from 'styled-components';
import Button from './index';
import theme from '../../ui/theme';

export const Container = styled.div`
  display: flex;
  background: ${theme.colors.primary.white};
  width: fit-content;
  padding: 5px 10px;
  border-radius: 300px;
  align-items: center;
`;

export const Plug = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${props => props.srcPlug});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Rating = styled.div`
`;