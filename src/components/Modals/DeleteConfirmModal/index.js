import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../../../ui/gridSystem';
import Modal, { stopEvent } from '../Modal';

import { ModalBody, ModalGlobalContainer, ModalWrapper } from '../Modal.style';

import Roboto from '../../../ui/typography/roboto';
import {
  NameData, BtnCancel, BtnDelete, DeletePublisherAction
} from './style';
import { MODAL_CLOSE } from '../../../redux/actions';
import { DELETE_ACCOUNT, DELETE_PUBLISHER } from '../../../redux/actions/admin';
import { getLabelValue } from '../../../utils/common';

const modalId = 'DeleteConfirmModal';

const DeleteConfirmModal = ({
  onClose,
  payload,
  type,
  deleteAccount,
  deletePublisher,
  labels
}) => {
  const [data, setData] = useState(payload);

  useEffect(() => {
    setData(payload);
  }, [payload]);

  const handleOnClose = () => {
    onClose();
  };

  const handleOnDelete = () => {
    type === 'users' ? deleteAccount() : deletePublisher();
    handleOnClose();
  };

  return (
    <Modal id={modalId}>
      <Container>
        <ModalWrapper>
          <ModalGlobalContainer
            height="165px"
            onMouseDown={stopEvent}
            onClick={stopEvent}
          >
            <ModalBody>
              <Roboto type="h2">
                {getLabelValue('message_delete_user_publisher', labels)}{' '}
                <NameData>{data.username || data.name}</NameData>?
              </Roboto>
              <DeletePublisherAction>
                <BtnCancel onClick={() => handleOnClose()}>{getLabelValue('btn_cancel', labels)}</BtnCancel>
                <BtnDelete onClick={() => handleOnDelete()}>
                  {getLabelValue('btn_confirmation', labels)}
                </BtnDelete>
              </DeletePublisherAction>
            </ModalBody>
          </ModalGlobalContainer>
        </ModalWrapper>
      </Container>
    </Modal>
  );
};

DeleteConfirmModal.propTypes = {
  type: PropTypes.string,
  // HOC (connect, state)
  payload: PropTypes.object.isRequired,
  // HOC (connect, dispatch)
  deletePublisher: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

DeleteConfirmModal.id = modalId;

export default connect(
  state => {
    const { payload } = state.modal;
    return {
      payload,
      labels: state.app.selectedLabel
    };
  },
  dispatch => ({
    deleteAccount: () => dispatch({ type: DELETE_ACCOUNT._REQUEST }),
    deletePublisher: () => dispatch({ type: DELETE_PUBLISHER._REQUEST }),
    onClose: () => dispatch({ type: MODAL_CLOSE })
  })
)(DeleteConfirmModal);
