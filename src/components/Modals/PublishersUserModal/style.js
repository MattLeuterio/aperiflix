import styled from 'styled-components';
import theme from '../../../ui/theme';

export const PublishersList = styled.div`
  
`;
export const PublisherRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  @media ${theme.device.mobileL} {
    margin-top: 16px;
    flex-wrap: wrap;
  }
`;
export const NamePublisher = styled.div`
  width: 65%;

  @media ${theme.device.mobileL} {
    width: 50%;
  }
`;
export const RolePublisher = styled.div`
  width: 33%;
  color: ${theme.colors.custom.blue};
  display: flex;
  justify-content: center;

  @media ${theme.device.mobileL} {
    width: 50%;
    justify-content: flex-end;
  }
`;
export const ActionPublisher = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${theme.device.mobileL} {
    margin-top: 8px;
    width: 100%;
  }
`;

export const EditButton = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 50px;
  color: ${theme.colors.custom.lightText};
  background-color: ${theme.colors.custom.blue};
  cursor: pointer;
`;

export const EditRoleWrapper = styled.div`
  position: absolute;
  display: flex;
  background: white;
  align-items: center;
  width: 70%;
  height: 110%;
  right: 0;

  @media ${theme.device.mobileL} {
    bottom: 0;
    width: 100%;
    height: fit-content;
  }

`;

export const EditRoleTitle = styled.span`
  font-style: italic;
  color: ${theme.colors.custom.blue};
`;

export const EditRole = styled.div`
  margin-top: 16px;
  display: flex;

  > div:first-child {
    margin-right: 32px;
  }
`;

export const BtnCancel = styled.div`
    margin-right: 8px;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 50px;
    color: ${theme.colors.custom.lightText};
    background-color: ${theme.colors.custom.darkGray};
    cursor: pointer;
    height: 21px;
    width: 80px;
    text-align: center;
`;

export const BtnSave = styled.div`
    font-size: 15px;
    font-weight: 500;
    padding: 5px 0;
    border-radius: 50px;
    color: ${theme.colors.custom.lightText};
    background-color: ${props => (props.disabled ? `${theme.colors.custom.darkGray}` : `${theme.colors.custom.blue}`)};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
    width: 90px;
    display: flex;
    justify-content: center;
`;

export const BtnDelete = styled.div`
    font-size: 12px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 50px;
    color: ${theme.colors.custom.lightText};
    background-color: ${theme.colors.primary.red};
    cursor: pointer;
    height: 21px;
    width: 80px;
    text-align: center;
`;

export const AddPublisherWrapper = styled.div`
  margin: 16px 0 32px;
  display: flex;
  justify-content: space-between;

  @media ${theme.device.mobileL} {
    flex-direction: column;

    > div:last-child {
      margin-top: 8px;
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;

  > div:first-child {
    margin-right: 8px;
  }
`;

export const DeletePublisherAction = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
