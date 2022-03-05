import styled from 'styled-components';
import theme from '../../ui/theme';
import { NavBarHeight } from '../../const';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NavBarHeight}px;
  padding: 0 20px;
  z-index: ${theme.zIndex.menu};
  background-color: ${theme.colors.primary.white};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;

`;

export const Left = styled.div`
  width: 40%;
  display: flex;
`;

export const Right = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  max-width: 130px;
  min-width: 130px;

  @media ${props => props.theme.device.tablet} {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;

export const LinksContainer = styled.div`
  display: ${props => (props.isHidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  width: 80%;

  a:not(:last-child) {
    border-right: 1px solid ${theme.colors.custom.darkText};
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 25px;
  }

  span {
    margin-bottom: 4px;
  }

  a.menuActive {
    
    > span {
      color: ${theme.colors.custom.blue};
    }

    > div {
      font-weight: 500;
      color: ${theme.colors.custom.blue};
    }
  }

  
  @media ${theme.device.tabletL} {
    width: 100%;
    flex-direction: column;
    height: calc(100% - 120px);
    padding: 0 20px;

    a:not(:last-child) {
    border-right: 0;
    }
    
    a {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      > div {
        > div {
          font-size: 22px;
        }
        > span {
          margin: 0;
          margin-right: 5px;
        }
      }
    }


    a:not(:last-child) {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`;

export const PublishersWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.custom.lightText};

  @media ${theme.device.tabletL} {
    width: 100%;
    height: 60px;  

    > div:first-child {
      font-size: 18px;
    }
  }
`;
export const UserWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media ${theme.device.tabletL} {
    width: fit-content;

    > div {
      font-size: 16px;
      color: ${theme.colors.primary.white};
    }
  }
`;

export const LangWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media ${theme.device.tabletL} {
    width: fit-content;
    position: absolute;
    right: 130px;
    top: 19px;
  }

  @media ${theme.device.mobileL} {
    right: 90px;
    top: 10px;
  }
`;
export const Logout = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${theme.device.tabletL} { 

    > span {
      font-size: 22px;
      color: ${theme.colors.primary.white};
    }
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 40vh;
  top: ${NavBarHeight}px;
  left: 0;
  background-color: #e6e6e6;
`;

export const WrapperLogoutUser = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 0;
  background-color: ${theme.colors.custom.blue};
`;


export const UserType = styled.div`
  font-weight: 400;
  color: #5a5a5a;
  font-size: 14px;
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  text-transform: capitalize;
`;

export const LinkNameWrapper = styled.div`
  display: flex;
  width: 110px;
  justify-content: space-between;
`;

