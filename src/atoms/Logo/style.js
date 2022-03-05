import styled, { css } from 'styled-components';
import Logo from './index';

export const LogoContainer = styled.div`
  display: flex;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'unset')};
  ${props => {
    switch (props.size) {
      case Logo.SIZE.LARGE:
        return css`
           width: 300px;
           height: auto;
        `;

      case Logo.SIZE.MEDIUM:
      default:
        return css`
           width: 200px;
           height: auto;
        `;

      case Logo.SIZE.SMALL:
        return css`
           width: 90px;
           height: auto;
        `;
    }
  }};
`;

export const LogoImg = styled.img`
  height: 100%;
  width: 100%;
`;
