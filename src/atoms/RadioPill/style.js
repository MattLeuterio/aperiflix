import styled from 'styled-components';

const CustomRadio = styled.div`
  display: inline-block;
  min-width: 53px;
  min-height: 30px;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary.white};
  border: 1px solid ${({ theme }) => theme.colors.primary.lightergray};
  transition: all 250ms ease-in-out;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.lightestgray};
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  left: 0;

  &:checked ~ div {
    box-shadow: 0 4px 10px 0 rgba(200, 0, 7, 0.2);
    background-color: ${({ theme }) => theme.colors.custom.youtube};
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;


const Text = styled.span`
  clear: both;
`;

const RadioPillContainer = styled.div`
  position: relative;
`;

export {
  RadioPillContainer, Input, CustomRadio, Text
};
