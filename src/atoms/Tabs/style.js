import styled, { css } from 'styled-components';
import theme from '../../ui/theme';
import Tabs from './index';

export const TabItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  font-size: 20px;
  margin-right: 5px;
`;
export const TabEL = styled.div`
  display: flex;
  font-weight: 400;
  user-select: none
`;

const calculateStyle = ({ tabType }) => {
  let style;
  switch (tabType) {
    case Tabs.TYPE.PRIMARY:
      style = css`
        display: flex;
        /*  padding: 20px 0; */
        ${TabItem} {
          height: 40px;
          width: 100%;
          padding: 12px 10px;
          background-color: ${props => props.theme.colors.custom.lightText};
          color: #4e5358;
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          white-space: nowrap;
          border-radius: 4px;
          margin-right: 10px;
          display: flex;

          &.active {
            border: 1px solid white;
            background-color: ${props => props.theme.colors.custom.blue};
            color: #ffff;
          }
        }
      `;
      break;
    case Tabs.TYPE.SECONDARY:
    default:
      style = css`
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: flex-end;
        position: relative;
        overflow: auto;
        padding-bottom: 7px;
        flex-wrap: wrap;
        overflow: hidden;
        justify-content: center;
        color: gray;

        &::after {
          content: '';
          height: 2px;
          width: 100%;
          background-color: lightgrey;
          position: absolute;
          /*                     bottom: 4px;
 */
        }

        ${TabItem} {
          position: relative;
          display: inline-block;
          cursor: pointer;
          width: fit-content;
          padding: 20px;
          white-space: nowrap;
          z-index: 1;
          display: flex;
          min-width: 120px;
          justify-content: center;
          align-items: center;
          align-content: center;

          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: transparent;
            transition: 0.2s ease-in;
          }

          &.active {
            color: ${props => (props.platform === 'youtube'
              ? `${theme.colors.custom.youtube}`
              : `${theme.colors.custom.dailymotion}`)};
            font-weight: 500;
            &:after {
              background-color: ${props => (props.platform === 'youtube'
              ? `${theme.colors.custom.youtube}`
              : `${theme.colors.custom.dailymotion}`)};;
            }
          }
        }
      `;
      break;
  }

  return style;
};

export const TabsContainer = styled.div`
  ${props => calculateStyle(props)};
  /* background-color: #f2f6fb; */
`;
