import styled, { css } from 'styled-components';
import {
  NavBarHeight,
} from '../../const';

export const PageContainer = styled.div`
  position: relative;
  // height: ${({ vh }) => `calc(${vh} * 100)`};

  @media ${props => props.theme.device.tabletL} {
    margin-left: 0;
    width: 100vw;
  }
`;

export const PageContent = styled.div`
  min-height: calc(100vh - ${NavBarHeight}px);
  padding-top: calc(${NavBarHeight}px + 50px);
  overflow: auto;
  position: relative;
  flex-grow: 1;
  width: 100%;

  transition: all 250ms ease-in-out;
`;
