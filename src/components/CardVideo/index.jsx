import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'redux-first-history';
import moment from 'moment';
import ReactPlayer from 'react-player';

import {
  Container, DateVideo, EmbeddedContainer, TitleVideo, VideoContainer
} from './style';
import Roboto from '../../ui/typography/inter';
// eslint-disable-next-line import/no-cycle
import { Icon } from '../../atoms';
import routes from '../../routes';
import HtmlRaw from '../HtmlRaw';
import { getLabelValue } from '../../utils/common';


const CardVideo = ({
  idVideo, videoName, videoDate, pushUrl, labels, platform
}) => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    setVideoId(idVideo);
  }, [idVideo, videoName]);

  const onClickEmbedded = (idVid, plat) => {
    pushUrl(`${routes.videoSettings.path}/${plat}/${idVid}`);
  };

  return (
    <Container>
      {videoId && videoName && (
        <VideoContainer>
          {platform === 'dm' ? (
            <ReactPlayer
              key={videoId}
              url={`https://www.dailymotion.com/video/${videoId}`}
              width="100%"
              height="100%"
              controls
            />
          ) : (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width="100%"
              height="100%"
              controls
            />
          )}
          <EmbeddedContainer onClick={() => onClickEmbedded(videoId, platform)}>
            <Roboto configuration={{ fontSize: 12 }}>{getLabelValue('btn_embeb', labels)}</Roboto>
            <Icon type="icon-eye" size={12} />
          </EmbeddedContainer>
        </VideoContainer>
      )}
      <DateVideo>{platform === 'dm' ? moment.unix(videoDate).format('DD/MM/YYYY') : moment(videoDate).format('DD/MM/YYYY')}</DateVideo>
      <TitleVideo><HtmlRaw html={videoName} /></TitleVideo>
    </Container>
  );
};


CardVideo.propTypes = {
  idVideo: PropTypes.string,
  videoName: PropTypes.string
};

export default connect(
  state => ({
    labels: state.app.selectedLabel
  }),
  dispatch => ({
    pushUrl: url => dispatch(push(url))
  })
)(CardVideo);
