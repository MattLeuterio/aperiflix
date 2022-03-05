import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Curtain from './Curtain';

import { ModalWrapper } from './Modal.style';

import ModalsPortal from './ModalsPortal';
import { MODAL_CLOSE } from '../../redux/actions';

export const stopEvent = event => event.stopPropagation();

const Modal = ({
  currentId, id, children, onClose, onModalClose
}) => (currentId === id ? (
  <ModalsPortal.Source>
    <Curtain open noscroll onClick={onClose || onModalClose}>
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </Curtain>
  </ModalsPortal.Source>
) : null);


Modal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
  onClose: PropTypes.func,

  // HOC (connect)
  currentId: PropTypes.string,

  // HOC (dispatch)
  onModalClose: PropTypes.func.isRequired
};

export default connect(
  state => ({
    currentId: state.modal.id,
    opened: state.modal.open
  }),
  dispatch => ({
    onModalClose: () => dispatch({ type: MODAL_CLOSE })
  })
)(Modal);
