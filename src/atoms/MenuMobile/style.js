import styled, { css } from 'styled-components';
import { NavBarHeight } from '../../const';
import theme from '../../ui/theme';

export const Container = styled.div`
  position: fixed;
  top: ${NavBarHeight}px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: ${props => props.isOpen ? 'calc(100vh - 80px)' : 0};
  background: ${theme.colors.background.dark};
  overflow: hidden;
  z-index: ${theme.zIndex.header};
  padding: ${props => props.isOpen ? '15px' : 0};

  transition: all .5s;
  
  > div:nth-child(2) {
    margin: 30px 0;
  }
`;