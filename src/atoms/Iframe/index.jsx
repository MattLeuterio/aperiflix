import React from 'react';
import PropTypes from 'prop-types';

import { IframeContainer, IframeComponent } from './style';

const Iframe = ({
  src, width, height, widthUnit = 'px', heightUnit = 'px'
}) => (
  <IframeContainer>
    <IframeComponent width={`${width}${widthUnit}`} height={`${height}${heightUnit}`} src={src} />
  </IframeContainer>
);

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  widthUnit: PropTypes.string,
  heightUnit: PropTypes.string
};

export default Iframe;
