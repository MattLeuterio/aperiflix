import styled from 'styled-components';
import { NavBarHeight } from '../../const';

export const GlobalOverlaySC = styled.div`
  background-color: ${props => props.theme.colors.custom.overlay};
  pointer-events: ${props => (props.isOpen ? 'all' : 'none')};
  position: fixed;
  
  left: 0;
  top: ${NavBarHeight}px;
  
  height: calc(100vh - ${NavBarHeight}px);
  width: 100vw;
  z-index: ${props => props.theme.zIndex.modal - 2};
  transition: background-color 250ms ease-in;
`;
