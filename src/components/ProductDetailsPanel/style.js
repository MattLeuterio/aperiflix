import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  width: 100%;
  height: ${props => (props.isOpen ? '85vh' : '0px')};
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 13px 13px 0 0;
  background: ${props => props.theme.colors.background.light};
  transition: all 0.6s;
  overflow: scroll;
  
  .iconClose {
    cursor: pointer;
    position: absolute;
    top: 33px;
    right: 56px;

    @media ${props => props.theme.device.tablet} {
      top: 23px;
      right: 36px;
    }
  }
`;

export const Content = styled.div`
  max-width: 1052px;
  margin: 0 auto;
  padding: 60px 40px;

  @media ${props => props.theme.device.tablet} {
    padding: 60px 15px;
  }
`;

export const Header = styled.div`
  display: flex;

  @media ${props => props.theme.device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Cover = styled.div`
  width: 207px;
  min-width: 207px;
  height: 308px;
  background-image: ${props => `url(https://image.tmdb.org/t/p/original/${props.posterPath})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const InfoSection = styled.div`
  padding: 20px 0 0 30px;

  @media ${props => props.theme.device.tablet} {
    padding: 20px 0 0 0;
  }
`;

export const RowInfo = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const ReleaseDate = styled.div`
  margin-right: 16px;
`;

export const Genre = styled.div`
  margin-right: 16px;
  > div {
   > span:not(:last-child)::after {
     content: ', ';
   } 
  }
`;

export const RowRating = styled.div`
  display: flex;
  margin-top: 32px;
  
  > div {
    margin-right: 20px;
  }
`;

export const Description = styled.div`
  margin-top: 30px;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 46px;

  @media ${props => props.theme.device.tablet} {
    flex-direction: column;
  }
`;

export const VideoWrapper = styled.div`
  width: 70%;
  height: 340px;

  @media ${props => props.theme.device.tablet} {
    width: 100%;
    height: 450px;
  }

  @media ${props => props.theme.device.mobileM} {
    width: 100%;
    height: 240px;
  }
  
  > div:first-child {
    margin-bottom: 20px;
  }
`;

export const DetailsProduct = styled.div`
  width: 30%;
  margin-top: 36px;
  padding-left: 30px;

  @media ${props => props.theme.device.tablet} {
    width: 100%;
    padding: 0;
    margin-top: 76px;
  }
`;

export const Detail = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
  
  > div:first-child {
    margin-bottom: 5px;
  }
`;

export const NoVideoWrapper = styled.div`
  background: #2f3143;
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.device.tablet} {
    width: 100%;
    height: 450px;
  }

  @media ${props => props.theme.device.mobileM} {
    width: 100%;
    height: 240px;
  }
`;
