import styled, { css } from 'styled-components';
import Logo from './index';

export const BottleRender = styled.div`
  display: inline-block;
  width: 18px;
  height: 32px;
  background-image: url(${props => props.srcBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
