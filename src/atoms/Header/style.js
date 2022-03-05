import styled from 'styled-components';
import { NavBarHeight } from '../../const';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: ${props => props.isVisible ? `${NavBarHeight}px` : 0};
  background-color: ${props => props.theme.colors.background.dark};
  z-index: ${props => props.theme.zIndex.header};
  box-shadow: 0px 4px 6px rgba(20, 20, 20, 0.25);
  top: 0;
  left: 0;
  overflow: hidden;
  
  transition: all 0.5s;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  
  // Logo
  > div:first-child {
    margin-right: 40px;
  }
`;
export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  // FiltersButton
  > div:first-child {
    margin-right: 30px;
  }
`;
