import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AdminCta, AdminUserDetail } from '../../atoms';
import {
  AdminCardContainer,
  UserDetail,
  ButtonsWrapper
} from './style';
import { getLabelValue } from '../../utils/common';


const AdminCardUser = ({
  userList, onClickEditPublisherUser, onClickEditUser, onClickDeleteUser,
  userType, onClickSwitchUserType, username, labels
}) => {
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [user, setUser] = useState(userList);
  useEffect(() => {
    setUser(userList);
  }, [userList]);
  useEffect(() => {
    setVisibleDelete(userType === 'super_admin');
  }, [userType]);
  return (
    <AdminCardContainer>
      <>
        <UserDetail>
          <AdminUserDetail label={getLabelValue('info_username', labels)} value={user.username} />
          <AdminUserDetail label={getLabelValue('info_name', labels)} value={user.name} />
          <AdminUserDetail label={getLabelValue('info_surname', labels)} value={user.surname} />
          <AdminUserDetail label={getLabelValue('info_user_type', labels)} value={user.type} pubCount={user.publishers_count} role={user.type} isInfoRole />
        </UserDetail>
        <ButtonsWrapper>
          <AdminCta btnType="publisher" width="130px" onClick={onClickEditPublisherUser} disabled={user.type === 'super_admin' || user.type === 'admin'} />
          <AdminCta
            btnType="edit"
            width="50px"
            onClick={onClickEditUser}
            disabled={(userType === 'super_admin' && user.type === 'super_admin' && username !== user.username)
                    || (userType === 'admin' && user.type === 'admin' && username !== user.username) || (userType === 'admin' && user.type === 'super_admin')}
          />
          {visibleDelete
            && (
              <>
                <AdminCta btnType="delete" width="50px" onClick={onClickDeleteUser} disabled={user.type === 'super_admin'} />
              </>
            )
          }
        </ButtonsWrapper>
      </>
    </AdminCardContainer>
  );
};


AdminCardUser.propTypes = {
  userList: PropTypes.array,
  onClickEditPublisherUser: PropTypes.func,
  onClickEditUser: PropTypes.func,
  onClickDeleteUser: PropTypes.func,
  onClickSwitchUserType: PropTypes.func,
  // HOC (connect, state)
  userType: PropTypes.string,
  username: PropTypes.string
};

export default connect(
  state => ({
    userType: state.auth.user_data.type,
    username: state.auth.user_data.username,
    labels: state.app.selectedLabel
  }),
  dispatch => ({
  })
)(AdminCardUser);
