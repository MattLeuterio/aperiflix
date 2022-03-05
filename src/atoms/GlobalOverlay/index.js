import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { GlobalOverlaySC } from './styles';

const GlobalOverlay = ({ isOpen }) => (
  <GlobalOverlaySC isOpen={isOpen} />
);

GlobalOverlay.propTypes = {
  // HOC (connect, state)
  isOpen: PropTypes.bool.isRequired
};

export default connect(
  state => {
    const { globalOverlayOpen } = state.app;

    return {
      isOpen: globalOverlayOpen
    };
  }
)(GlobalOverlay);
