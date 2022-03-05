import styled from 'styled-components';

const InputRangeContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
  height: 59px;

  @media ${props => props.theme.device.mobileL} {
    margin-bottom: 12px;
  }
`;

const Label = styled.div`
  margin-bottom: 5px;
`;

const Error = styled.div`
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  & div {
    :first-child {
      margin-right: 10px;
    }
  }
`;

export { InputRangeContainer, Label, Error, InputContainer };
