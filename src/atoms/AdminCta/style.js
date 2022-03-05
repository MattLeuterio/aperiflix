import styled, { css } from 'styled-components';
import Button from './index';

const funzioneCalcoloStile = ({ theme, btnType, disabled }) => {
  let style;
  switch (btnType) {
    case Button.TYPE.PUBLISHER:
      style = css`
        background-color: ${theme.colors.custom.blue};
        color: ${theme.colors.primary.white};
        border: transparent;
        &:hover {
          background-color: ${theme.colors.custom.blue};
        }
      `;
      break;
    case Button.TYPE.SWITCH:
      style = css`
        background-color: ${theme.colors.custom.blue};
        color: ${theme.colors.primary.white};
        border: transparent;
        &:hover {
          background-color: ${theme.colors.custom.blue};
        }
        ${disabled && css`
          background-color: ${theme.colors.primary.lightgray};
          &:hover {
            background-color: ${theme.colors.primary.lightgray};
          }
        `}
      `;
      break;
    case Button.TYPE.EDIT:
      style = css`
        color: ${theme.colors.primary.black};
        background-color: ${theme.colors.custom.darkGray};
        border: none;
        &:hover {
          background-color: ${theme.colors.custom.darkGray};
        }
        ${disabled && css`
          background-color: ${theme.colors.primary.lightgray};
          &:hover {
            background-color: ${theme.colors.primary.lightgray};
          }
        `}
      `;
      break;
    case Button.TYPE.DELETE:
      style = css`
        color: ${theme.colors.primary.white};
        background-color: ${theme.colors.primary.red};
        border: none;
      }

        

        ${disabled
          && css`
            background-color: ${theme.colors.primary.lightestgray};
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

const AdminCtaContainer = styled.button`
  height: ${({ height }) => (height ? `${height}px` : '40px')};
  width: ${({ width }) => (width ? `${width}` : '100%')};
  border-radius: 15px;
  white-space: nowrap;
  transition: all 0.125s ease-in;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: ${({ hasIcon }) => (hasIcon ? '0 40px 0 0' : '12px 0')};
  display: ${({ hasIcon }) => (hasIcon ? 'flex' : 'inline-block')};
  align-items: ${({ hasIcon }) => (hasIcon ? 'center' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 16px;
  }

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
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.custom.darkestred};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  background-image: url(${props => props.logo});
  width: 100%;
  height: 100%;
`;

export { AdminCtaContainer, IconContainer, ImgContainer };
