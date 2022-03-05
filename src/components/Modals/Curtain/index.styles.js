import styled from 'styled-components';

export const CurtainWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.mixin.rgba(props.backgroundColor || '#414141', 0.21)};
  z-index: ${props => props.theme.zIndex.absoluteUp};
`;
