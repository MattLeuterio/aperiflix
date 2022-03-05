import styled from 'styled-components';

const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  left: 0;

  &:checked ~ span {
    box-shadow: ${props => (props.disabled ? 'none' : '0 4px 10px 0 rgba(200, 0, 7, 0.2)')};  
    border: ${props => (props.disabled ? `1px solid ${props.theme.colors.primary.lightestgray}` : 'none')};
    background: ${props => (props.disabled ? props.theme.colors.primary.lightestgray : props.theme.colors.custom.blue)}
  }

  &:checked ~ span:after {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    width: 6px;
    height: 10px;
    border: solid ${props => (props.disabled ? props.theme.colors.primary.lightgray : props.theme.colors.primary.white)};
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
    display: block;
  }
`;

const CustomCheckbox = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.primary.white};
  border: 1px solid ${props => (props.disabled ? props.theme.colors.primary.lightestgray : props.theme.colors.primary.lightergray)};
  border-radius: 6px;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary.gray};
  margin: 0;
  width: 100%
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  margin-bottom: 5px;
`;

const Text = styled.label`
  width: 70%;
  margin-left: 10px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  color: ${props => (props.disabled ? props.theme.colors.primary.lightgray : props.theme.colors.primary.black)};
`;

export {
  Label, Input, CustomCheckbox, Text
};
