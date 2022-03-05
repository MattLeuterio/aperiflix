import styled, { css } from 'styled-components';

export const DatePickerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: solid 1px ${({ valid, value, theme }) => (valid || !value ? theme.colors.primary.lightestgray : theme.colors.primary.red)};
  background-color: transparent;
  padding: 10px 5px 10px 10px;
  /* z-index: 2; */
    
  ${({ disabled, readonly, theme }) => disabled && !readonly && css`
    cursor: not-allowed;
    background-color: ${theme.colors.primary.lightestgray};
  `};
  
  ${({ readonly, theme }) => readonly && css`
    pointer-events: none;
    border: none;
    background-color: ${theme.colors.custom.transparent};;
    padding: 10px 0;
  `};
  
  input {
    background-color: ${({ theme }) => theme.colors.custom.transparent};
    border: none;
    color: inherit;
    font-family: ${({ theme }) => theme.fontset.arial};
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: ${({ theme }) => theme.colors.primary.lightblack};
    width: inherit;
    
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : null)};
    
    &:focus {
      outline: none;
    }
    
    ::placeholder {
      font-weight: normal;
      font-style: italic;
      color: ${props => props.theme.colors.primary.lightgray};
    }
    
    ::-webkit-input-placeholder { /* Edge */
      font-weight: normal;
      font-style: italic;
      color: ${props => props.theme.colors.primary.lightgray};
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      font-weight: normal;
      font-style: italic;
      color: ${props => props.theme.colors.primary.lightgray};
    }
  
  }
  
  .react-datepicker-wrapper {
    width: 100%;
  }
  
  .react-datepicker {
    font-family: ${({ theme }) => theme.fontset.arial};
  }
  .react-datepicker__day--keyboard-selected, .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.custom.blue};
    border-radius: 0;
    transition: all 250ms ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.custom.blue};
      border-radius: 0;
    }
    &:focus {
      outline: none;
    }
  }
  .react-datepicker__day {
      border-radius: 0;
      transition: all 250ms ease-in-out;
      &:hover {
        border-radius: 0;
      }
      &:focus {
        outline: none;
      }
  }
`;
