import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../../../ui/gridSystem';
import Modal, { stopEvent } from '../Modal';

import {
  ModalBody,
  ModalGlobalContainer,
  ModalTitle,
  ModalWrapper
} from '../Modal.style';

import Roboto from '../../../ui/typography/roboto';
import {
  EditRoleWrapper,
  EditRoleTitle,
  EditRole,
  BtnCancel,
  BtnSave,
  InfoUser
} from './style';
import { MODAL_CLOSE } from '../../../redux/actions';
import { CustomSelect, Icon } from '../../../atoms';
import theme from '../../../ui/theme';
import {
  customStylesSelectPrimary,
  defaultUserTypeSelect
} from '../../../utils/common';
import { SWITCH_USER_TYPE } from '../../../redux/actions/admin';

const modalId = 'SwitchUserTypeModal';

const SwitchUserTypeModal = ({ onClose, user, switchUserType }) => {
  const [typeSelected, setTypeSelected] = useState('');

  const handleOnClose = () => {
    setTypeSelected('');
    onClose();
  };

  const handleOnChangeType = newRole => {
    setTypeSelected(newRole);
  };

  const handleOnSaveUpdateRole = () => {
    if (typeSelected) {
      const body = {
        username: user.username,
        type: typeSelected.value
      };
      switchUserType(body);
      handleOnClose();
    }
  };

  return (
    <Modal id={modalId}>
      <Container>
        <ModalWrapper>
          <ModalGlobalContainer
            height="250px"
            onMouseDown={stopEvent}
            onClick={stopEvent}
          >
            <ModalTitle>
              <Roboto htmlAttribute="span" type="modalTitle">
                Change user type
              </Roboto>
              <Icon
                type="icon-close"
                color={theme.colors.custom.darkText}
                size={20}
                onClick={handleOnClose}
              />
            </ModalTitle>
            <ModalBody>
              <EditRoleWrapper>
                <InfoUser>
                  <Roboto type="h2">
                    User: <EditRoleTitle>{user.username}</EditRoleTitle>
                  </Roboto>
                  <Roboto type="h2">
                    User type: <EditRoleTitle>{user.type}</EditRoleTitle>
                  </Roboto>
                </InfoUser>
                <EditRole>
                  <CustomSelect
                    styles={customStylesSelectPrimary}
                    options={defaultUserTypeSelect}
                    value={typeSelected}
                    onChange={handleOnChangeType}
                  />
                  <BtnCancel onClick={() => handleOnClose()}>Cancel</BtnCancel>
                  <BtnSave
                    disabled={!typeSelected}
                    onClick={() => handleOnSaveUpdateRole()}
                  >
                    Save
                  </BtnSave>
                </EditRole>
              </EditRoleWrapper>
            </ModalBody>
          </ModalGlobalContainer>
        </ModalWrapper>
      </Container>
    </Modal>
  );
};

SwitchUserTypeModal.propTypes = {
  // HOC (connect, state)

  // HOC (connect, dispatch)
  onClose: PropTypes.func.isRequired,

  user: PropTypes.object
};

SwitchUserTypeModal.id = modalId;

export default connect(
  state => ({
    userList: state.admin.userList,
    listPublisherByAccount: state.admin.selectedUserPublisher
  }),
  dispatch => ({
    onClose: () => dispatch({ type: MODAL_CLOSE }),
    switchUserType: body => dispatch({ type: SWITCH_USER_TYPE._REQUEST, body })
  })
)(SwitchUserTypeModal);
