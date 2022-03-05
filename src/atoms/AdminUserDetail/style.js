import styled from 'styled-components';

export const AdminDetailContainer = styled.div`
  height: 50px;
  min-width: ${props => (!props.isPublisher ? 'calc((100% / 4) - 32px)' : 'calc((100% / 3) - 50px)')};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.primary.lightgray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  > :first-child {
    color: ${props => props.type === 'medium' && '#8b8b8b'};
  }

  :not(:last-child) {
    margin-right: 16px;
  }

  @media ${props => props.theme.device.tabletL} {
    width: 100%;
    margin-bottom: 16px;
  }
`;
