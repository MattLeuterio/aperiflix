import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  0% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

const LoaderContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  position: fixed;
  z-index: ${props => props.theme.zIndex.loader};
  
  animation: ${spinnerAnimation} .5s;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
`;

const SpinnerContainer = styled.div`
  width: ${props => props.size || 60}px;
  height: ${props => props.size || 60}px;

  position: relative;
  margin: auto;
  
  animation: ${spinnerAnimation} .5s;
`;

const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.custom.blue};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-bounce 1.05s infinite ease-in-out;
  animation: sk-bounce 1.5s infinite ease-in-out;

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

  ${props => props.num === 2
    && css`
      -webkit-animation-delay: -0.75s;
      animation-delay: -0.75s;
    `}
`;

export const Spinner = ({ size }) => (
  <SpinnerContainer size={size}>
    <Bounce num={1} />
    <Bounce num={2} />
  </SpinnerContainer>
);

Spinner.propTypes = {
  size: PropTypes.number
};

const LinearLoaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  background-color: ${props => props.theme.colors.custom.background};
  z-index: ${props => props.theme.zIndex.loader};
`;

const LinearBar = styled.div`
  content: "";
  display: inline;
  position: absolute;
  width: 0;
  height: 100%;
  left: 50%;
  text-align: center;
  
  &:nth-child(1) {
    background-color: ${props => props.theme.colors.custom.youtube};
    -webkit-animation: loading 3s linear infinite;
            animation: loading 3s linear infinite;
  }
  &:nth-child(2) {
    background-color: ${props => props.theme.colors.primary.red};
    -webkit-animation: loading 3s linear 1s infinite;
            animation: loading 3s linear 1s infinite;
  }
  &:nth-child(3) {
    background-color: ${props => props.theme.colors.primary.lightred};
    -webkit-animation: loading 3s linear 2s infinite;
            animation: loading 3s linear 2s infinite;
  }
  @-webkit-keyframes loading {
      from {left: 50%; width: 0;z-index:100;}
      33.3333% {left: 0; width: 100%;z-index: 10;}
      to {left: 0; width: 100%;}
  }
  @keyframes loading {
      from {left: 50%; width: 0;z-index:100;}
      33.3333% {left: 0; width: 100%;z-index: 10;}
      to {left: 0; width: 100%;}
  }
`;

export const LinearLoader = () => (
  <LinearLoaderContainer>
    <LinearBar />
    <LinearBar />
    <LinearBar />
  </LinearLoaderContainer>
);


const Loader = ({ isSpinning, type }) => {
  const getLoaderByType = animationType => {
    let loader;
    switch (animationType) {
      case Loader.TYPE.BOUNCE:
      default:
        loader = <Spinner />;
        break;
    }
    return loader;
  };

  return (
    <>
      {isSpinning ? (
        <LoaderContainer>
          <LoaderWrapper>
            {getLoaderByType(type)}
          </LoaderWrapper>
        </LoaderContainer>
      ) : null}
    </>
  );
};

Loader.TYPE = {
  BOUNCE: 'bounce'
};

Loader.propTypes = {
  type: PropTypes.oneOf(Object.values(Loader.TYPE)),

  // HOC (connect, state)
  isSpinning: PropTypes.bool.isRequired
};

Loader.defaultProps = {
  type: Loader.TYPE.BOUNCE
};

export default connect(state => ({
  isSpinning: state.app.loader.isSpinning
}))(Loader);
