import React, { useState, useEffect } from 'react';
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
  PublishersList,
  PublisherRow,
  NamePublisher,
  RolePublisher,
  ActionPublisher,
  EditButton,
  EditRoleWrapper,
  EditRoleTitle,
  EditRole,
  BtnCancel,
  BtnSave,
  AddPublisherWrapper,
  SelectWrapper,
  BtnDelete,
  DeletePublisherAction
} from './style';
import { MODAL_CLOSE } from '../../../redux/actions';
import { CustomSelect, Icon } from '../../../atoms';
import theme from '../../../ui/theme';
import {
  customStylesSelectPrimary,
  defaultUserRoleSelect,
  getLabelValue
} from '../../../utils/common';
import {
  ADD_PUBLISHER_TO_ACCOUNT,
  REMOVE_PUBLISHER_FROM_ACCOUNT,
  UPDATE_PUBLISHER_IN_ACCOUNT
} from '../../../redux/actions/admin';

const modalId = 'PublishersUserModal';

const PublishersUserModal = ({
  onClose,
  user,
  userType,
  listPublisherByAccount,
  addPublisherToAccount,
  updatePublisherInAccount,
  removePublisherFromAccount,
  availablePublisherByAccountList,
  labels
}) => {
  const [listPublishers, setListPublishers] = useState([]);
  const [
    availablePublisherByAccount,
    setAvailablePublisherByAccount
  ] = useState([]);
  const [allPublishersFiltered, setAllPublishersFiltered] = useState([]);

  // Edit Role
  const [editRoleVisible, setEditRoleVisible] = useState(false);
  const [publisherSelected, setPublisherSelected] = useState([]);
  const [roleSelected, setRoleSelected] = useState([]);

  // Add Publisher
  const [publisherToAddSelected, setPublisherToAddSelected] = useState([]);
  const [publisherRoleToAddSelected, setPublisherRoleToAddSelected] = useState(
    []
  );

  // Delete Publisher
  const [deletePublisherVisible, setDeletePublisherVisible] = useState(false);

  useEffect(() => {
    setListPublishers(listPublisherByAccount);
  }, [listPublisherByAccount, addPublisherToAccount]);

  useEffect(() => {
    setAvailablePublisherByAccount(listPublisherByAccount);
  }, [listPublisherByAccount, addPublisherToAccount]);

  useEffect(() => {
    const publisherList = (availablePublisherByAccountList || []).reduce(
      (acc, pub) => [...acc, { label: pub.name, value: pub.name }],
      []
    );

    setAllPublishersFiltered(publisherList);
  }, [availablePublisherByAccountList]);

  const handleOnClose = () => {
    setPublisherToAddSelected([]);
    setPublisherRoleToAddSelected([]);
    setPublisherSelected([]);
    setRoleSelected([]);
    setEditRoleVisible(false);
    onClose();
  };

  const handleOnClickEditRole = publisher => {
    setDeletePublisherVisible(false);
    setEditRoleVisible(true);
    setPublisherSelected(publisher);
    setRoleSelected({ label: publisher.role, role: publisher.role });
  };

  const handleOnDeletePublisher = publisher => {
    setEditRoleVisible(false);
    setDeletePublisherVisible(true);
    setPublisherSelected(publisher);
  };

  const handleOnChangeEditRole = (publisher, value) => {
    // setPublisherSelected(publisher);
    // setRoleSelected([{ name: publisher.name, role: value.value }]);
    const body = {
      username: user.username,
      publisher: [
        {
          name: publisher.name,
          role: value.value
        }
      ]
    };
    updatePublisherInAccount(body);
  };

  const handleOnSaveUpdateRole = () => {
    const body = {
      username: user.username,
      publisher: [
        {
          name: publisherSelected.name,
          role: roleSelected.value
        }
      ]
    };
    updatePublisherInAccount(body);
    setEditRoleVisible(false);
  };

  const handleOnDelete = () => {
    const body = {
      username: user.username,
      publisher: [publisherSelected.name]
    };
    removePublisherFromAccount(body);
    setDeletePublisherVisible(false);
  };

  const handleOnChangePublisherToAdd = value => {
    setPublisherToAddSelected(value);
  };

  const handleOnChangePublisherRoleToAdd = value => {
    setPublisherRoleToAddSelected(value);
  };

  const handleOnAddPublisher = () => {
    if (
      Object.keys(publisherToAddSelected).length > 0
      && Object.keys(publisherRoleToAddSelected).length > 0
    ) {
      const body = {
        username: user.username,
        publisher: [
          {
            name: publisherToAddSelected.value,
            role: publisherRoleToAddSelected.value
          }
        ]
      };
      addPublisherToAccount(body);
      setPublisherToAddSelected([]);
      setPublisherRoleToAddSelected([]);
    }
  };

  return (
    <Modal id={modalId}>
      <Container>
        <ModalWrapper>
          <ModalGlobalContainer
            height="500px"
            onMouseDown={stopEvent}
            onClick={stopEvent}
          >
            <ModalTitle>
              <Roboto htmlAttribute="span" type="modalTitle">
                {getLabelValue('modal_edit_user_publishers', labels)}
              </Roboto>
              <Icon
                type="icon-close"
                color={theme.colors.custom.darkText}
                size={20}
                onClick={handleOnClose}
              />
            </ModalTitle>
            <ModalBody>
              <Roboto type="h2">{getLabelValue('select_add_publisher_label', labels)}</Roboto>
              <AddPublisherWrapper>
                <SelectWrapper>
                  <CustomSelect
                    styles={customStylesSelectPrimary}
                    options={allPublishersFiltered}
                    value={publisherToAddSelected}
                    onChange={handleOnChangePublisherToAdd}
                  />
                  <CustomSelect
                    styles={customStylesSelectPrimary}
                    options={defaultUserRoleSelect}
                    value={publisherRoleToAddSelected}
                    onChange={handleOnChangePublisherRoleToAdd}
                  />
                </SelectWrapper>
                <BtnSave
                  disabled={
                    !Object.keys(publisherToAddSelected).length > 0
                    || !Object.keys(publisherRoleToAddSelected).length > 0
                  }
                  onClick={() => handleOnAddPublisher()}
                >
                  {getLabelValue('btn_add', labels)}
                </BtnSave>
              </AddPublisherWrapper>

              {listPublishers?.length > 0 && (
                <>
                  <Roboto type="h2">{getLabelValue('modal_add_publisher', labels)}</Roboto>
                  <PublishersList>
                    {listPublishers?.map(publisher => (
                      <PublisherRow>
                        <NamePublisher>{publisher.name}</NamePublisher>
                        {/* <RolePublisher>{publisher.role}</RolePublisher> */}
                        {(userType === 'super_admin' || userType === 'admin') && (
                          <>
                            <CustomSelect
                              styles={customStylesSelectPrimary}
                              options={defaultUserRoleSelect}
                              value={[{ label: publisher.role, value: publisher.role }]}
                              onChange={(value) => handleOnChangeEditRole(publisher, value)}
                            />
                            <ActionPublisher>
                              {/* <EditButton
                                onClick={() => handleOnClickEditRole(publisher)}
                              >
                                {getLabelValue('edit_role_user_publisher', labels)}
                              </EditButton> */}
                              {userType === 'super_admin' && (
                                <Icon
                                  onClick={() => handleOnDeletePublisher(publisher)}
                                  type="icon-delete"
                                  color={theme.colors.primary.red}
                                  size="20"
                                />
                              )}
                            </ActionPublisher>
                          </>
                        )}
                        {(deletePublisherVisible && publisherSelected.name === publisher.name) && (
                          <EditRoleWrapper>
                            <Roboto configuration={{ fontSize: 12 }}>
                              {getLabelValue('message_delete_item_user_publisher', labels)}{' '}
                              <EditRoleTitle>{publisherSelected.name}</EditRoleTitle>?
                            </Roboto>
                            <DeletePublisherAction>
                              <BtnCancel onClick={() => setDeletePublisherVisible(false)}>
                                {getLabelValue('btn_cancel', labels)}
                              </BtnCancel>
                              <BtnDelete onClick={() => handleOnDelete()}>
                                {getLabelValue('btn_delete', labels)}
                              </BtnDelete>
                            </DeletePublisherAction>
                          </EditRoleWrapper>
                        )}
                      </PublisherRow>
                    ))}
                  </PublishersList>
                </>
              )}

              {/* {editRoleVisible && (
                <EditRoleWrapper>
                  <Roboto type="h2">
                    {getLabelValue('edit_role_user_publisher', labels)} -{' '}
                    <EditRoleTitle>{publisherSelected.name}</EditRoleTitle>
                  </Roboto>
                  <EditRole>
                    <CustomSelect
                      styles={customStylesSelectPrimary}
                      options={defaultUserRoleSelect}
                      value={roleSelected}
                      onChange={handleOnChangeEditRole}
                    />
                    <BtnCancel onClick={() => setEditRoleVisible(false)}>
                      {getLabelValue('btn_cancel', labels)}
                    </BtnCancel>
                    <BtnSave onClick={() => handleOnSaveUpdateRole()}>
                      {getLabelValue('btn_save', labels)}
                    </BtnSave>
                  </EditRole>
                </EditRoleWrapper>
              )} */}
            </ModalBody>
          </ModalGlobalContainer>
        </ModalWrapper>
      </Container>
    </Modal>
  );
};

PublishersUserModal.propTypes = {
  // HOC (connect, state)
  userType: PropTypes.string,
  listPublisherByAccount: PropTypes.array,
  availablePublisherByAccountList: PropTypes.array,

  // HOC (connect, dispatch)
  onClose: PropTypes.func.isRequired,
  addPublisherToAccount: PropTypes.func,
  updatePublisherInAccount: PropTypes.func,
  removePublisherFromAccount: PropTypes.func,

  user: PropTypes.object
};

PublishersUserModal.id = modalId;

export default connect(
  state => ({
    userList: state.admin.userList,
    userType: state.auth.user_data.type,
    listPublisherByAccount: state.admin.selectedUserPublisher,
    availablePublisherByAccountList: state.admin.availablePublisherByAccount,
    labels: state.app.selectedLabel
  }),
  dispatch => ({
    onClose: () => dispatch({ type: MODAL_CLOSE }),
    addPublisherToAccount: body => dispatch({ type: ADD_PUBLISHER_TO_ACCOUNT._REQUEST, body }),
    updatePublisherInAccount: body => dispatch({ type: UPDATE_PUBLISHER_IN_ACCOUNT._REQUEST, body }),
    removePublisherFromAccount: body => dispatch({ type: REMOVE_PUBLISHER_FROM_ACCOUNT._REQUEST, body })
  })
)(PublishersUserModal);
