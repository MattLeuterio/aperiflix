import styled, { css } from 'styled-components';

const Input = styled.input`
  background-color: transparent;
  border: none;
  width: calc(100% - ${({ icon }) => (icon ? 50 : 5)}px);

  :focus {
    outline: none;
  }
  
  font-family: ${({ theme }) => theme.fontset.roboto};
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.custom.darkText};


  ::placeholder {
    font-weight: normal;
    font-style: italic;
    color: ${props => props.theme.colors.primary.lightText};
  }
  
  ::-webkit-input-placeholder { /* Edge */
    font-weight: normal;
    font-style: italic;
    color: ${props => props.theme.colors.primary.lightText};
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-weight: normal;
    font-style: italic;
    color: ${props => props.theme.colors.primary.lightText};
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
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary.lightgray};
  padding: ${props => (props.padding ? `${props.padding}` : '12px 10px')};
    
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
`;


const SpanIcon = styled.span`
  position: absolute;
  width: 50px;
  height: 47px;
  right: 5px;
  top: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 6px 6px 0;
  color: ${props => (props.theme.colors.custom.darkText)};
  cursor: pointer;
  font-size: 25px;
`;

const ValidInput = styled.span`
  position: absolute;
  font-size: 35px;
  font-weight: 700;
  top: 50%;
  right: 5px;
  color: ${({ theme }) => theme.colors.secondary.brightgreen};
  transform: translate(0, -50%);
`;

export {
  Input, InputContainer, SpanIcon, ValidInput
};
