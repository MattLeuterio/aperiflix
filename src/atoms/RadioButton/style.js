import styled from 'styled-components';

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  left: 0;

  &:checked ~ span {
    border: 1px solid ${props => (props.disabled ? props.theme.colors.primary.lightestgray : props.theme.colors.primary.lightergray)};
  }

  &:checked ~ span:after {
    display: block;
    background: ${props => (props.disabled ? props.theme.colors.primary.lightgray : props.theme.colors.custom.youtube)}
  }
`;

const CustomRadio = styled.span`
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.primary.white};
  border: 1px solid ${props => (props.disabled ? props.theme.colors.primary.lightestgray : props.theme.colors.primary.lightergray)};
  border-radius: 100%;

  &:after {
    content: '';
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 12px;
    height: 12px;
    margin: auto;
    border-radius: 100%;
    display: block;
  }
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.gray};
  margin: 0;
`;

const Text = styled.label`
  margin-left: 30px;
`;

const RadioButtonContainer = styled.div`
  position: relative;
`;

export {
  RadioButtonContainer, Label, Input, CustomRadio, Text
};
