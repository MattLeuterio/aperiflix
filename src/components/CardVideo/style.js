import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  position: relative;
  width: 280px;
  height: 160px;
  margin: 17px 0 80px 16px;
`;

export const TitleVideo = styled.div`
  font-size: 14px;
  margin-top: 4px;
  color: ${theme.colors.custom.darkText};
`;

export const DateVideo = styled.div`
  font-size: 12px;
  margin-top: 8px;
  color: ${theme.colors.custom.lightText};
  width: fit-content;
  background-color: #9e9e9e;
  padding: 2px 5px;
  border-radius: 30px;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const EmbeddedContainer = styled.div`
  position: absolute;
  width: 130px;
  height: 30px;
  border-radius: 28px 28px 0px 28px;
  top: -15px;
  right: 0px;
  background: #585858;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.custom.lightText};
  padding: 0 10px;

  &:hover {
    background-color: ${theme.colors.custom.blue};
    cursor: pointer;
  }
`;
