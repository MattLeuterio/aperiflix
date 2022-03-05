import styled from 'styled-components';
import theme from '../../ui/theme';

export const JumbotronContainer = styled.div`
  padding-top: 80px;

  @media ${props => props.theme.device.mobileL} {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  margin: 0 auto;
  
  @media ${props => props.theme.device.tablet} {
    width: 400px;
  }

  @media ${props => props.theme.device.mobileL} {
    width: 300px;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  margin: 50px 0;
  
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
`;

export const Search = styled.input`
  width: 600px;
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

  @media ${props => props.theme.device.tablet} {
    width: 400px;
  }

  @media ${props => props.theme.device.mobileL} {
    width: 300px;
  }
`;

export const ActionsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  
  @media ${props => props.theme.device.tabletL} {
    padding: 0 20px;
  }

  @media ${props => props.theme.device.tablet} {
    padding: 0 10px;
  }
  
  @media ${props => props.theme.device.mobileL} {
    margin-top: 30px;
  }
`;
export const FiltersContainer = styled.div``;
export const ProductTypeContainer = styled.div`

  @media ${props => props.theme.device.mobileL} {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const DisplayContainer = styled.div``;
export const FiltersActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

