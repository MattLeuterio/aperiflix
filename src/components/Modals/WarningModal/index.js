import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../../../ui/gridSystem';
import Modal, { stopEvent } from '../Modal';

import { ModalGlobalContainer, ModalWrapper, ModalTitle } from '../Modal.style';

import Arial from '../../../ui/typography/arial';
import { ButtonContainer } from './style';
import { MODAL_CLOSE } from '../../../redux/actions';
import { Button, Icon } from '../../../atoms';

const modalId = 'WarningModal';

const WarningModal = ({ onClose }) => (
  <Modal id={modalId}>
    <Container>
      <ModalWrapper>
        <ModalGlobalContainer
          onMouseDown={stopEvent}
          onClick={stopEvent}
          height="224px"
          width="466px"
        >
          <ModalTitle>
            <Arial type="bold">Feature not available</Arial>
            <Icon type="icon-close-5" onClick={onClose} />
          </ModalTitle>
          <Arial>This feature is not available in the Beta version.</Arial>
          <ButtonContainer>
            <Button btnType="primary" btnText="Close" onClick={onClose} />
          </ButtonContainer>
        </ModalGlobalContainer>
      </ModalWrapper>
    </Container>
  </Modal>
);

WarningModal.propTypes = {
  // HOC (connect, dispatch)
  onClose: PropTypes.func.isRequired
};

WarningModal.id = modalId;

export default connect(
  () => ({}),
  dispatch => ({
    onClose: () => dispatch({ type: MODAL_CLOSE })
  })
)(WarningModal);
