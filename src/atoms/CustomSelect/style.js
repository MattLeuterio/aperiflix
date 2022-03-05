import styled, { css } from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: ${props => props.theme.colors.primary.lightblack};
  
  div[class*="-placeholder"] {
    font-weight: normal;
    font-style: italic;
    color: ${props => props.theme.colors.primary.lightgray};
  }
  
  div[class*="-menu"] {
    font-weight: normal;
  }

  div[class*="-indicatorContainer"] {
    color: ${props => props.theme.colors.primary.black};
    margin-right: 5px;

    &:hover {
      color: ${props => props.theme.colors.custom.blue};
    }
  }
  
  ${props => props.readonly && css`
    pointer-events: none;
    div[class*="control"] {
      border: none;
      background-color: transparent;
    }
    
    div[class*="ValueContainer"] {
      padding: 0;
    }
    
    div[class*="IndicatorsContainer"], div[class*="-indicatorContainer"] {
      display: none;
    }
    
  `}
  
  ${({ isSearchType }) => isSearchType && css`
    div[class*="control"] {
      cursor: auto;
    }
    div[class*="-indicatorContainer"] {
      cursor: pointer;
    }
    span ~ div[class*="-indicatorContainer"] {
      display: none;
    }
  `}
`;

export { SelectContainer };
