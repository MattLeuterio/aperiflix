import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  cursor: pointer;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 27px;
  height: 70px;

  @media ${theme.device.mobileL} {
    height: 50px;
  }
`;

export const HamburgerIcon = styled.div`
  width: 27px;
  height: 3px;
  display: flex;
  justify-content: flex-end;
  background-color: ${props => (props.open ? 'none' : `${theme.colors.primary.white}`)};
  border-radius: 5px;
  transition: all .5s ease-in-out;
  transform: ${props => (props.open ? 'translateX(-50px)' : 'none')}; 
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    background-color: ${theme.colors.primary.white};
    border-radius: 5px;
    transition: all .5s ease-in-out;
  }
  
  &::before {
    width: 27px;
    transform: ${props => (props.open
    ? 'rotate(45deg) translate(35px, -35px)'
    : 'translateY(-8px)')};
  }
  
  &::after {
    width: 27px;
    transform: ${props => (props.open
    ? 'rotate(-45deg) translate(35px, 35px)'
    : 'translateY(8px)')};
  }
`;
