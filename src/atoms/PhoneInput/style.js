import styled, { css } from 'styled-components';

const InputContainer = styled.div`
  .react-tel-input {
    .flag-dropdown {
      ${({ readonly, theme }) => readonly && css`
        pointer-events: none;
        border: none;
        background-color: ${theme.colors.custom.transparent};
        
        .arrow {
          display: none;
        }
      `};
    }
    
    input.form-control {
    
      height: 40px;
      border-radius: 6px;
      border: solid 1px ${({ valid, value, theme }) => (valid || !value ? theme.colors.primary.lightestgray : theme.colors.primary.red)};
      background-color: ${({ theme }) => theme.colors.primary.white};
        
      ${({ disabled, readonly, theme }) => disabled && !readonly && css`
        cursor: not-allowed;
        background-color: ${theme.colors.primary.lightestgray};
      `};
      
      ${({ readonly, theme }) => readonly && css`
        pointer-events: none;
        border: none;
        background-color: ${theme.colors.custom.transparent};;
        padding: 10px 0;
        margin-left: 48px;
      `};
    
      width: calc(100% - ${({ icon }) => (icon ? 50 : 5)}px);
      :focus {
        outline: none;
      }
      
      font-family: ${({ theme }) => theme.fontset.arial};
      font-size: 14px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.14;
      letter-spacing: normal;
      color: ${({ theme }) => theme.colors.primary.lightblack};
    
    
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
      
      &[type=number]::-webkit-inner-spin-button, 
      &[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
      }
      
      ${({ disabled }) => disabled && css`
        cursor: not-allowed;
      `}
      
      ${({ readonly }) => readonly && css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
    }
  }
`;

export {
  InputContainer
};
