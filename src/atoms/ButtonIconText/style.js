import styled, { css } from 'styled-components';

export const ButtonIconTextContainer = styled.div`
  display: flex;
  align-items: center; 
  cursor: pointer;

  ${props => props.disabled && css`
    color: ${props.theme.colors.primary.lightergray};
    pointer-events: none;
  `};
  
  ${props => props.active && css`
    color: ${props.theme.colors.secondary.brightgreen};
    > span {
      color: ${props.theme.colors.secondary.brightgreen};
    }
  `};
`;
