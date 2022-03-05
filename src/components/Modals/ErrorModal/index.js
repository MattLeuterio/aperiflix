import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'redux-first-history';

import { Container } from '../../../ui/gridSystem';
import Modal, { stopEvent } from '../Modal';
import theme from '../../../ui/theme';
import {
  ModalGlobalContainer, ModalWrapper
} from '../Modal.style';

import Gotham from '../../../ui/typography/inter';
import Arial from '../../../ui/typography/arial';
import Icon from '../../../atoms/Icon';
import {
  Title, Subtitle, ContentWrapper, Head, IconClose, SubHead
} from './style';

import { MODAL_CLOSE } from '../../../redux/actions';

const modalId = 'ErrorModal';

const ErrorModal = ({
  pushUrl, onClose, redirectTo, errorText, errorDescription
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
              <Icon type="icon-errore" size={60} color={theme.colors.primary.red} />
              <Title><Gotham type="modalTitle">Errore</Gotham></Title>
              {errorText ? (
                <Subtitle>
                  <Arial type="modalSubtitle">
                    <Head>{errorText}{errorDescription ? ':' : null}</Head>
                    <SubHead>{errorDescription}</SubHead>
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

ErrorModal.propTypes = {
  // HOC (connect, state)
  errorText: PropTypes.string,
  errorDescription: PropTypes.string,
  redirectTo: PropTypes.string,

  // HOC (connect, dispatch)
  onClose: PropTypes.func.isRequired,
  pushUrl: PropTypes.func.isRequired
};

ErrorModal.id = modalId;

export default connect(
  state => {
    const { payload: { errorText, errorDescription, redirectTo } = {} } = state.modal;
    return {
      redirectTo,
      errorDescription,
      errorText
    };
  },
  dispatch => ({
    onClose: () => dispatch({ type: MODAL_CLOSE }),
    pushUrl: url => dispatch(push(url))
  })
)(ErrorModal);
