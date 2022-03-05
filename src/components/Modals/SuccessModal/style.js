import styled from 'styled-components';


export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  & > span:nth-child(2) {
    margin-top: 40px;
  }
`;

export const Title = styled.div`
  margin: 30px 0px;
  width: 240px;
  text-align: center;
`;

export const Subtitle = styled.div`
  width: 320px;
  margin-bottom: 35px;
  text-align: center;
`;

export const IconClose = styled.span`
  position: absolute;
  top: 5%;
  font-size: 30px;
  right: 4%;
  cursor: pointer;
  color: ${props => props.theme.colors.red};
`;

export const Head = styled.div`
  padding-bottom: 5px;
`;
