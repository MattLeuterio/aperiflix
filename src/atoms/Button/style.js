import styled, { css } from 'styled-components';
import Button from './index';

const funzioneCalcoloStile = ({ theme, btnType, disabled }) => {
  let style;
  switch (btnType) {
    case Button.TYPE.PRIMARY:
      style = css`
        background-color: ${theme.colors.custom.blue};
        color: ${theme.colors.primary.white};
        border: transparent;
        &:hover {
          background-color: ${theme.colors.custom.blue};
        }
        ${disabled
          && css`
            background-color: ${theme.colors.custom.disabled};
            color: ${theme.colors.primary.white};
            border: none;
          `}
      `;
      break;
    case Button.TYPE.SECONDARY:
      style = css`
        color: ${theme.colors.custom.lightText};
        background-color: ${theme.colors.primary.gray};
        border: transparent;
        &:hover {
          background-color: ${theme.colors.custom.darkGray};
        }
        ${disabled
          && css`
            background-color: ${theme.colors.primary.lightestgray};
            color: ${theme.colors.primary.white};
            border: none;
          `}
      `;
      break;
    case Button.TYPE.PLATFORM:
      style = css`
        color: ${theme.colors.primary.black};
        background-color: ${theme.colors.custom.lightText};
        border: 1px solid ${theme.colors.primary.lightgray};
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.11);
        border-radius: 10px;
        border: ${props => (props.selected
    ? `3px solid ${theme.colors.custom.blue}` : '0')};
      }

        &:hover {
          background-color: ${theme.colors.custom.backgroundlight};
        }
        /* &:active,
        &:focus {
          border: 3px solid ${theme.colors.custom.blue};
        } */

        ${disabled
          && css`
            background-color: ${theme.colors.custom.disabled};
            color: ${theme.colors.primary.white};
            border: none;
          `}
      `;
      break;

    default:
      break;
  }

  return style;
};

const ButtonContainer = styled.button`
  height: ${({ height }) => (height ? `${height}px` : '40px')};
  width: ${({ width }) => (width ? `${width}` : '100%')};
  border-radius: 8px;
  white-space: nowrap;
  transition: all 0.125s ease-in;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: ${({ hasIcon }) => (hasIcon ? '0 40px 0 0' : '12px 0')};
  display: ${({ hasIcon }) => (hasIcon ? 'flex' : 'inline-block')};
  align-items: ${({ hasIcon }) => (hasIcon ? 'center' : 'none')};
  position: relative;
 
  ${props => funzioneCalcoloStile(props)};

  ${({ disabled, theme }) => disabled
    && css`
      background-color: ${theme.colors.primary.lightgray};
      &:hover {
        background-color: ${theme.colors.primary.lightgray};
      }
    `};
`;

const IconContainer = styled.div`
  width: ${({ height }) => (height ? `${height}px` : '40px')};
  height: ${({ height }) => (height ? `${height}px` : '40px')};
  background-color: ${({ theme }) => theme.colors.custom.darkestred};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

const ImgContainer = styled.div`
  background-image: url(${props => props.logo});
  width: 100%;
  height: 100%;
`;

export { ButtonContainer, IconContainer, ImgContainer };
