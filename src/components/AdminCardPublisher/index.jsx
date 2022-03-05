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


const AdminCardPublisher = ({
  publisherList, onClickEditUser, onClickDeletePublisher, labels,
  userType
}) => {
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [platformSelected, setPlatformSelected] = useState(localStorage.getItem('activeTabPlatform'));

  useEffect(() => {
    setVisibleDelete(userType === 'super_admin');
  }, [userType]);

  useEffect(() => {
    setPlatformSelected(localStorage.getItem('activeTabPlatform'));
  }, [localStorage.getItem('activeTabPlatform')]);

  return (
    <AdminCardContainer>
      <>
        <UserDetail>
          <AdminUserDetail label={getLabelValue('info_publisher_name', labels)} value={publisherList.name} isPublisher />
          <AdminUserDetail
            label={platformSelected === 'youtube'
              ? getLabelValue('info_youtube_id', labels)
              : getLabelValue('info_dailymotion_id', labels)}
            value={platformSelected === 'youtube'
              ? publisherList.youtube.channelId
              : publisherList.dailymotion.channelId}
            isPublisher
            type={platformSelected === 'youtube' ? 'youtubeLabel' : 'dailymotionLabel'}
          />
          <AdminUserDetail
            label={platformSelected === 'youtube'
              ? getLabelValue('info_youtube_adv_code', labels)
              : getLabelValue('info_dailymotion_adv_code', labels)}
            value={platformSelected === 'youtube'
              ? publisherList.youtube.adv_code
              : publisherList.dailymotion.adv_code}
            isPublisher
            type={platformSelected === 'youtube' ? 'youtubeLabel' : 'dailymotionLabel'}
          />
          {/* <AdminUserDetail label="Dailymotion ID" value={publisherList.dailymotion.channelId} isPublisher type="dailyLabel" /> */}
        </UserDetail>
        <ButtonsWrapper>
          <AdminCta btnType="edit" width="50px" onClick={onClickEditUser} />
          {visibleDelete
            && (
              <>
                <AdminCta btnType="delete" width="50px" onClick={onClickDeletePublisher} />
              </>
            )
          }
        </ButtonsWrapper>
      </>
    </AdminCardContainer>
  );
};


AdminCardPublisher.propTypes = {
  publisherList: PropTypes.array,
  onClickEditUser: PropTypes.func,
  // HOC (connect, state)
  userType: PropTypes.string
  // HOC (connect, dispatch)

};

export default connect(
  state => ({
    userType: state.auth.user_data.type,
    labels: state.app.selectedLabel
  }),
  dispatch => ({
  })
)(AdminCardPublisher);
