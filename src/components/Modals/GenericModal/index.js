import React from 'react';
import { push } from 'redux-first-history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../../../ui/gridSystem';
import Modal, { stopEvent } from '../Modal';

import {
  ButtonsContainer, ButtonWrapper, ModalBody,
  ModalDescription, ModalGlobalContainer, ModalTitle,
  ModalWrapper
} from '../Modal.style';

import Arial from '../../../ui/typography/arial';
import { MODAL_CLOSE } from '../../../redux/actions';
import { Button, Icon } from '../../../atoms';
import Gotham from '../../../ui/typography/inter';

let modalId = 'GenericModal';

const GenericModal = ({
  id, pushUrl, onClose, title, description, onSubmit,
  redirectTo, confirm_button, abort_button, children
}) => {
  modalId = id;

  const CloseAndChangeLocation = () => {
    onClose();
    if (redirectTo) pushUrl(redirectTo);
  };

  const handleOnAbort = () => {
    if (abort_button.onClick) {
      abort_button.onClick();
    }
    onClose();
  };

  const handleOnConfirm = () => {
    if (onSubmit) onSubmit();
    if (confirm_button.onClick) {
      confirm_button.onClick();
      if (redirectTo) pushUrl(redirectTo);
    }
    onClose();
  };

  return (
    <Modal id={modalId}>
      <Container>
        <ModalWrapper>
          <ModalGlobalContainer
            onMouseDown={stopEvent}
            onClick={stopEvent}
          >
            <ModalTitle>
              {title && <Gotham htmlAttribute="span" type="modalTitle">{title}</Gotham>}
              <Icon type="icon-close" size={30} onClick={CloseAndChangeLocation} />
            </ModalTitle>
            {description && (
            <ModalDescription>
              <Arial type="modalSubtitle">{description}</Arial>
            </ModalDescription>
            )}
            <ModalBody>
              {children}
            </ModalBody>
            <ButtonsContainer>
              {abort_button && (
              <ButtonWrapper>
                <Button btnText={abort_button.label || 'Anulla'} btnType={Button.TYPE.SECONDARY} onClick={handleOnAbort} />
              </ButtonWrapper>
              )}
              {confirm_button && (
              <ButtonWrapper>
                <Button btnText={confirm_button.label} btnType={Button.TYPE.PRIMARY} onClick={handleOnConfirm} />
              </ButtonWrapper>
              )}
            </ButtonsContainer>
          </ModalGlobalContainer>
        </ModalWrapper>
      </Container>
    </Modal>
  );
};

GenericModal.propTypes = {
  children: PropTypes.node,
  // HOC (connect, state)
  title: PropTypes.string,
  description: PropTypes.string,
  redirectTo: PropTypes.string,
  confirm_button: PropTypes.object,
  abort_button: PropTypes.object,
  onSubmit: PropTypes.func,

  // HOC (connect, dispatch)
  onClose: PropTypes.func.isRequired,
  pushUrl: PropTypes.func.isRequired
};

GenericModal.id = modalId;

export default connect(
  state => {
    const {
      payload: {
        title, description, redirectTo, confirm_button, abort_button
      } = {}
    } = state.modal;
    return {
      redirectTo,
      title,
      description,
      confirm_button,
      abort_button
    };
  },
  dispatch => ({
    onClose: () => dispatch({ type: MODAL_CLOSE }),
    pushUrl: url => dispatch(push(url))
  })
)(GenericModal);
