import styled from 'styled-components';

export const AdminCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 16px;
    @media ${props => props.theme.device.tabletL} {
      margin-bottom: 32px;
    }
  }

  @media ${props => props.theme.device.tabletL} {
    display: block;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  @media ${props => props.theme.device.tabletL} {
    width: 100%;
    flex-direction: flex-start;
  }
`;
export const UserDetail = styled.div`
  display: flex;
  width: 100%;

  @media ${props => props.theme.device.tabletL} {
    width: 100%;
    flex-direction: column;
  }
`;
