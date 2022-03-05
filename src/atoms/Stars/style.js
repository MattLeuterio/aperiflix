import styled from 'styled-components';

const StarsContainer = styled.div.attrs(() => ({
  className: 'stars'
}))`
  width: 100%;
  margin-top: -5px;
  margin-bottom: 5px;

  & > span:hover {
    -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: ${props => props.theme.colors.custom.youtube};
  }
`;

const StarItem = styled.span`
  font-size: 30px;
  margin-top: -5px;
  cursor: pointer;

  &.icon-star-full {
    color: ${props => props.theme.colors.custom.youtube};
  }
`;

export { StarsContainer, StarItem };
