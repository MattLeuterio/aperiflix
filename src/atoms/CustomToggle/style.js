import styled from 'styled-components';

export const CustomToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  @media ${props => props.theme.device.mobileL} {
    margin-bottom: 12px;
  }
  
  .react-toggle {
    margin-right: 10px;
  }
  
  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track{
    background-color: ${props => props.theme.colors.custom.youtube};
  }
  
  .react-toggle:hover:not(.react-toggle--checked) .react-toggle-track{
    background-color: ${props => props.theme.colors.primary.white};
  }
  
  .react-toggle-track {
    width: 40px;
    height: 20px;
    border-radius: 10px;
    border: solid 1px ${props => props.theme.colors.primary.lightergray};
    background-color: ${props => props.theme.colors.primary.white};
  }
  
  .react-toggle-thumb {
    width: 16px;
    height: 16px;
    background-color: ${props => props.theme.colors.custom.youtube};
    border: none;
    top: 1.5px;
    left: 2px;
  }
  
  .react-toggle--focus {
    .react-toggle-thumb {
      box-shadow: none;
    }
  }
  
  .react-toggle--checked .react-toggle-track{
    background-color: ${props => props.theme.colors.custom.youtube};
  }
  
  .react-toggle--checked .react-toggle-thumb {
    left: 22px;
    background-color: ${props => props.theme.colors.primary.white};
  }
  
  .react-toggle--disabled {
    opacity: 1;
    .react-toggle-thumb {
      background-color: ${props => props.theme.colors.primary.lightestgray};
    }
    .react-toggle-track {
      border: solid 1px ${props => props.theme.colors.primary.lightestgray};
    }
    
    &.react-toggle--checked {
      .react-toggle-thumb {
        background-color: ${props => props.theme.colors.primary.white};
      }
      .react-toggle-track {
        background-color: ${props => props.theme.colors.primary.lightestgray};
      }
    }
  }
`;
