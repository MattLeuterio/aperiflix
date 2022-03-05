import styled, { css } from 'styled-components';
import theme from '../../ui/theme';

export const SearchWrapper = styled.div`
  position: relative;
  margin: 50px 0;
  width: 100%;
  
  & > span {
    position: absolute;
    top: calc(50% + 2px);
    transform: translate(-50%, -50%);
    
    &.iconSearch {
      left: 30px;
    }

    &.iconClose {
      cursor: pointer;
      right: 10px;
    }
  }
  
  ${props => props.isHeader && css`
    margin: 0;
    max-width: 50%;
    ${SearchInput} {
      padding: 8px 15px 8px 45px;
      border: 1px solid ${theme.colors.primary.white};
      font-size: 14px;
    }
  `};

  ${props => props.isMobile && css`
    width: fit-content;
    margin-right: 0 !important;
    position: absolute;
    right: 110px;
    top: 50%;
    transform: translateY(-50%);
    max-width: 100%;
    & > span {
      &.iconSearch {
        left: 20px;
      }
    }
    ${SearchInput} {
      padding: 10px;
      width: 40px;

      ::placeholder {
        color: transparent;
      }
    }
  `};

  ${props => props.isSearchOpen && css`
    position: absolute;
    width: calc(100% - 125px);
    margin-right: 0 !important;
    right: 110px;
    transition: all 0.5s;
    & > span {
      &.iconSearch {
        z-index: 1;

        transition: all 0.7s;
      }
    }
    ${SearchInput} {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background: ${theme.colors.background.dark};
      width: 100%;
      padding: 8px 15px 8px 45px;
      border: 1px solid ${theme.colors.primary.white};
      font-size: 14px;

      transition: width 0.5s;

      ::placeholder {
        color: ${theme.colors.primary.gray};
      }
    }
  `};
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 64px;
  border: 2px solid ${theme.colors.primary.white};
  border-radius: 300px;
  background: transparent;
  color: ${theme.colors.primary.white};
  outline: none;
  font-family: "Inter", sans-serif;

  ::placeholder {
    font-weight: normal;
    font-style: italic;
    color: ${props => props.theme.colors.primary.gray};
  }
  
`;

