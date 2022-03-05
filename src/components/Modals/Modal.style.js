import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

export const ModalGlobalContainer = styled.div`
  background-color: ${props => props.theme.colors.primary.white};
  color: ${props => props.theme.colors.primary.black};
  pointer-events: auto;
  position: relative;
  user-select: none;
  padding: 20px;
  border-radius: 15px;

  box-shadow: 1px 5px 8px 0 rgb(0 0 0 / 20%);
  height: ${({ height }) => (height ? `${height}` : 'auto')};
  width: ${({ width }) => (width ? `${width}` : '602px')};
  margin: 0 auto;
  transition: all 250ms ease-in-out;

  @media ${props => props.theme.device.tablet} {
    width: ${props => props.widthtablet && `${props.widthtablet}px`};
  }

  @media ${props => props.theme.device.mobileL} {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    border-radius: 0;
    overflow: auto;

    display: flex;
    flex-direction: column;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  color: ${props => props.theme.colors.primary.lightblack};
  position: relative;
`;

export const ModalDescription = styled.div`
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.singleButton ? 'flex-end' : 'space-between')};

  @media ${props => props.theme.device.mobileL} {
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
    width: 100%;
    background: ${props => props.theme.colors.primary.white};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 10px;
`;

export const ModalBody = styled.div`
  width: 100%;
  margin-top: 32px;
  min-height: calc(100% - 40px);
  max-height: calc(100% - 40px);
  overflow: auto;

  @media ${props => props.theme.device.mobileL} {
    flex: 1 1 0;
  }
`;
