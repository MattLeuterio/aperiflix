import styled, { css } from 'styled-components';

const InputNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`;

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 30px;
  border-radius: 6px;
  border: solid 1px ${props => (props.valid || !props.value ? props.theme.colors.primary.lightestgray : props.theme.colors.primary.red)};
  background-color: ${props => props.theme.colors.primary.white};
  
  ${props => props.readonly && css`
    border: none;
    background-color: transparent;
    padding: 10px 0;
  `}
`;

const InputNumber = styled.input.attrs(() => ({
  type: 'number'
}))`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;

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
  color: ${props => props.theme.colors.primary.lightblack};
  text-align: center;


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
  
  &:disabled {
    opacity: 0.6;
  }
`;

const IconContainer = styled.div`
  span {
    font-weight: 700;
  }
`;

export {
  InputContainer, InputNumber, InputNumberContainer, IconContainer
};
