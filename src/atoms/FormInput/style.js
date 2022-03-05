import styled from 'styled-components';

const FormInputContainer = styled.div`
  text-align: left;
  margin-bottom: ${props => (props.type === 'modal-input' || props.type === 'form-password'
    ? '32px'
    : '0')};

  @media ${props => props.theme.device.mobileL} {
    margin-bottom: 32px;
  }
`;

const Label = styled.div`
  margin-bottom: ${props => (props.type === 'modal-input' ? '10px' : '5px')};
  //white-space: nowrap;
`;

const Error = styled.div`
  position: absolute;
  margin-top: 5px;
`;

export { FormInputContainer, Label, Error };
