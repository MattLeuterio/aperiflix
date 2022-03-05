import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const PlaceholderLoaderWave = styled.div`
  @keyframes wave {
    0% {
      left: 0;
    }
    100% {
      left: calc(100% - 20%);
    }
  }
  
  // display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.mixin.rgba(theme.colors.primary.white, 0.2)};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: all 500ms ease-in-out;
  pointer-events: none;
  overflow: hidden;
  
  &:after {
    content: '';
    background-image: linear-gradient(to right, ${({ theme }) => theme.colors.custom.transparent}, rgba(204, 204, 204, 0.5), ${({ theme }) => theme.colors.custom.transparent});
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 40%;
    ${({ isLoading }) => isLoading && css`
      animation-name: wave;
      animation-duration: 1.2s;
      animation-iteration-count: infinite;
    `}
    z-index: 1;
  }
  
  ${({ isLoading, theme }) => isLoading && css`
    ~ div {
      font-family: ${theme.fontset.placeholder} !important;
      color: ${theme.colors.primary.lightgray} !important;
      div, span {
        background-color: transparent;
        color: ${theme.colors.primary.lightgray} !important;
        font-family: ${theme.fontset.placeholder} !important;
      }
      img {
        background-image: unset;
        background-color: ${theme.colors.custom.backgroundlight};
      }
      button {
        display: none;
      }
    }
  `}
  
`;

const PlaceholderLoader = ({ isLoading }) => (
  <PlaceholderLoaderWave isLoading={isLoading} />
);

PlaceholderLoader.propTypes = {
  isLoading: PropTypes.bool
};

PlaceholderLoader.defaultProps = {
  isLoading: false
};

export default PlaceholderLoader;
