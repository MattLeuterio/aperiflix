import styled, { css } from 'styled-components';
import theme from '../../ui/theme';
import { NavBarHeight } from '../../const';

export const FiltersSectionContainer = styled.div`
  position: ${props => props.isHeader ? 'fixed' : 'absolute'};
  top: ${props => props.isHeader ? '80px' : '350px'};
  left: 0;
  background: ${theme.colors.background.light};
  display: flex;
  width: 100%;
  z-index: ${theme.zIndex.filtersSection};
  height: ${props => props.isOpen ? '170px' : 0};
  padding: ${props => props.isOpen ? '20px 50px' : 0};
  overflow-y: hidden;
  
  transition: height, padding .5s;
  
  ${props => props.isMenuMobile && css`
    position: relative;
    top: auto;
    left: auto;
    height: 100%;
    background: ${theme.colors.background.dark};
    
    ${Section} {
      width: 100%;
    }
    
    ${Genres}, ${Orders} {
      flex-direction: Column;
      
      > div {
        margin-right: 0;
      }
    }
  `};
`;

export const Section = styled.div`
  width: 50%;
`;

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  max-width: 360px;
  
  > div:not(:last-child) {
    margin-right: 15px;
  }
  
  > div {
    line-height: 1.6;
    cursor: pointer;
  }
`;

export const Orders = styled.div`
  margin-top: 10px;
  
  > div {
    line-height: 1.6;
    cursor: pointer;
  }
`;

