import styled from 'styled-components';
import { ToastContainer as Toaster } from 'react-toastify';
import { NavBarHeight } from '../../const';

export const ToastWrapper = styled.div`
  .Toastify__toast-container {
    top: calc(${NavBarHeight}px + 20px);
  }
`;

export const ToastContainer = styled(Toaster)`
  .Toastify__toast--default, .Toastify__toast--info .Toastify__toast--success, .Toastify__toast--error {
    background-color: ${({ theme }) => theme.colors.custom.lightText};
    box-shadow: 0 10px 20px 0 ${({ theme }) => theme.mixin.rgba(theme.colors.custom.darkText, 0.2)};
    color: ${({ theme }) => theme.colors.custom.darkText};
    border-radius: 8px;
    left: 50%;
    transform: translateX(-50%);
    
    @media ${props => props.theme.device.mobileL} {
      min-height: 50px;
      max-width: 90%;
    }
  };

  .Toastify__toast--info {
    background-color: ${({ theme }) => theme.colors.primary.blue};
    color: ${({ theme }) => theme.colors.custom.lightText};
    border-radius: 8px;
  }

  .Toastify__toast--success {
    background-color: ${({ theme }) => theme.colors.primary.green};
    color: ${({ theme }) => theme.colors.custom.lightText};
    border-radius: 8px;
  }

  .Toastify__toast--error {
    background-color: ${({ theme }) => theme.colors.primary.red};
    color: ${({ theme }) => theme.colors.custom.lightText};
    border-radius: 8px;
  }
`;

export const ToastCustomContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  
  > div {
    margin-left: 10px;
  }
`;
