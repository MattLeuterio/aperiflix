import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'redux-first-history';

import { Container } from '../../../ui/gridSystem';
import Modal, { stopEvent } from '../Modal';

import {
  ModalGlobalContainer, ModalWrapper
} from '../Modal.style';

import Gotham from '../../../ui/typography/gotham';
import Arial from '../../../ui/typography/arial';
import Icon from '../../../atoms/Icon';
import {
  Title, Subtitle, ContentWrapper, Head, IconClose
} from './style';

import { MODAL_CLOSE } from '../../../redux/actions';

const modalId = 'SuccessModal';

const SuccessModal = ({
  pushUrl, onClose, title, description, redirectTo
}) => {
  const CloseAndChangeLocation = () => {
    onClose();
    if (redirectTo) pushUrl(redirectTo);
  };

  return (
    <Modal id={modalId}>
      <Container>
        <ModalWrapper>
          <ModalGlobalContainer
            onMouseDown={stopEvent}
            onClick={stopEvent}
          >
            <ContentWrapper>
              <IconClose className="icon-close" onClick={CloseAndChangeLocation} />
              <Icon type="icon-ok" size={60} />
              {title ? <Title><Gotham type="modalTitle">{title}</Gotham></Title> : null}
              {description ? (
                <Subtitle>
                  <Arial type="modalSubtitle">
                    <Head>{description}</Head>
                  </Arial>
                </Subtitle>
              ) : null}
            </ContentWrapper>
          </ModalGlobalContainer>
        </ModalWrapper>
      </Container>
    </Modal>
  );
};

SuccessModal.propTypes = {
  // HOC (connect, state)
  title: PropTypes.string,
  description: PropTypes.string,
  redirectTo: PropTypes.string,

  // HOC (connect, dispatch)
  onClose: PropTypes.func.isRequired,
  pushUrl: PropTypes.func.isRequired
};

SuccessModal.id = modalId;

export default connect(
  state => {
    const { payload: { title, description, redirectTo } = {} } = state.modal;
    return {
      redirectTo,
      title,
      description
    };
  },
  dispatch => ({
    onClose: () => dispatch({ type: MODAL_CLOSE }),
    pushUrl: url => dispatch(push(url))
  })
)(SuccessModal);
