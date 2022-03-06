import styled from 'styled-components';
import theme from '../../ui/theme';

export const CardProductContainer = styled.div`
  width: calc(100% / 4 - 20px);
  min-width: 300px;
  margin: 10px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.background.light};
  cursor: pointer;
  transition: all .3s;
  
  &:hover {
    transform: scale(1.06) translateY(-17px);
    filter: drop-shadow(0px 5px 12px #111111);
  }

  @media (max-width: 1319px) {
    width: calc(100% / 3 - 20px);
  }
  
  @media (max-width: 999px) {
    width: calc(100% / 2 - 20px);
  }

  @media ${props => props.theme.device.tablet} {
    &:hover {
      transform: unset;
      filter: unset;
    }
  }
`;

export const CoverSection = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-image: ${props => `url(${props.cover})`};
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;
`;

export const RatingWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const TypeWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: space-around;
  border-radius: 300px;
  padding: 3px 6px;
  background-color: ${props => props.theme.colors.primary.red};
`;

export const InfoSection = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  padding: 50px 20px 20px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.background.light};
  
  > div:first-child {
    margin-bottom: 10px;
  }
`;
