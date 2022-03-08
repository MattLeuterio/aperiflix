import styled from 'styled-components';
import theme from '../../ui/theme';

export const HomeContainer = styled.div`
  height: inherit;
  
  @media ${props => props.theme.device.tablet} {
    height: 100%;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  
  @media ${props => props.theme.device.tablet} {
    padding: 0 20px;
  }
`;
export const FiltersWrapper = styled.div`
 > span:first-child {
   margin-right: 10px;
 } 
`;
export const TotalWrappers = styled.div`
  > span:first-child {
    margin-right: 10px;
  }
`;
export const FiltersRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 80px;
  margin: 10px 0px 15px;
  
  > div {
    margin-bottom: 10px;
  }
  > div:not(:last-child) {
    margin-right: 10px;
  }

  @media ${props => props.theme.device.tablet} {
    padding: 0 20px;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;   
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 20px;

  @media (max-width: 743px) {
    justify-content: center;
  }
`;

export const NoResultWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2f3143;
  
  
  > div:first-child {
    font-size: 14px;
    color: ${props => props.theme.colors.primary.red};
    font-style: 'italic';
    margin-right: 10px;
  }
`;

export const BottleRender = styled.div`
  display: inline-block;
  width: 18px;
  height: 32px;
  background-image: url(${props => props.srcBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
