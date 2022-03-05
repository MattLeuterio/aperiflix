import styled from 'styled-components';
import { FooterHeight } from '../../const';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary.background};
  height: ${FooterHeight}px;
  width: 100%;
  padding: 56px 0px;
  text-align: center;
  box-shadow: inset 0 1px 0 0 #bab9b9;
  color: ${props => props.theme.colors.primary.lightblack};
  z-index: ${props => props.theme.zIndex.headerFooter};
`;

export { FooterContainer };
