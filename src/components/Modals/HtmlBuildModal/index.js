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
  ButtonWrapper
} from './style';
import { MODAL_CLOSE } from '../../../redux/actions';
import { Button, Icon, TextArea } from '../../../atoms';
import theme from '../../../ui/theme';
import Toast from '../../Toast';
import { getLabelValue } from '../../../utils/common';

const modalId = 'HtmlBuildModal';

const HtmlBuildModal = ({
  onClose, payload, htmlBuildYT, labels, platform = 'yt', htmlBuildDM
}) => {
  const [data, setData] = useState(payload);

  useEffect(() => {
    setData(payload);
  }, [payload]);

  const handleOnClose = () => {
    onClose();
  };

  const handleOnCopy = () => {
    const textArea = document.querySelector('#embedValue');
    window.navigator.clipboard.writeText(textArea.value);
    Toast.show(Toast.TYPE.SUCCESS, getLabelValue('message_clipboard', labels));
    handleOnClose();
  };

  return (
    <Modal id={modalId}>
      <Container>
        <ModalWrapper>
          <ModalGlobalContainer
            height={500}
            onMouseDown={stopEvent}
            onClick={stopEvent}
          >
            <ModalTitle>
              <Roboto htmlAttribute="span" type="modalTitle">
                {platform === 'yt'
                  ? getLabelValue('modal_html_youtube_player', labels)
                  : getLabelValue('modal_html_dailymotion_player', labels)
                }
              </Roboto>
              <Icon
                type="icon-close"
                color={theme.colors.custom.darkText}
                size={20}
                onClick={handleOnClose}
              />
            </ModalTitle>
            <ModalBody>
              <TextArea
                id="embedValue"
                text={platform === 'yt'
                  ? htmlBuildYT
                  : JSON.stringify(htmlBuildDM).replace('"<script', '<script').replace('script>"', 'script>')}
                rows={19}
                readOnly
              />
              <ButtonWrapper>
                <Button
                  btnText={getLabelValue('btn_copy', labels)}
                  width="200px"
                  btnType={Button.TYPE.PRIMARY}
                  onClick={handleOnCopy}
                />
              </ButtonWrapper>
            </ModalBody>
          </ModalGlobalContainer>
        </ModalWrapper>
      </Container>
    </Modal>
  );
};

HtmlBuildModal.propTypes = {
  // HOC (connect, state)
  payload: PropTypes.object.isRequired,
  // HOC (connect, dispatch)
  onClose: PropTypes.func.isRequired
};

HtmlBuildModal.id = modalId;

export default connect(
  state => ({
    htmlBuildYT: state.search.htmlBuildYT,
    htmlBuildDM: state.search.htmlBuildDM,
    labels: state.app.selectedLabel
  }),
  dispatch => ({
    onClose: () => dispatch({ type: MODAL_CLOSE })
  })
)(HtmlBuildModal);
