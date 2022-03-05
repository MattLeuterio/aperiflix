import styled from 'styled-components';

const TextAreaContainer = styled.div`
  text-align: left;
`;

const Label = styled.div`
  margin-bottom: 5px;
`;

const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 6px;
  border: solid 1px ${props => props.theme.colors.primary.lightestgray};
  background-color: ${props => props.theme.colors.primary.white};
  padding: 12px 10px;
`;

const TextInput = styled.textarea`
  background-color: transparent;
  border: none;
  width: 100%;
  resize: none;
  overflow: auto;

  :focus {
    outline: none;
  }

  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: normal;
  color: ${props => props.theme.colors.custom.darkText};
  font-weight: 500;
  


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
`;

export {
  TextAreaContainer, Label, TextAreaWrapper, TextInput
};
