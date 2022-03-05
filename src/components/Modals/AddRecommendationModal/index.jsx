import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import compose from '../../../redux/compose';
import { Container, Row, Col } from '../../../ui/gridSystem';
import Modal, { stopEvent } from '../Modal';

import {
  ButtonsContainer,
  ButtonWrapper,
  ModalBody,
  ModalDescription,
  ModalGlobalContainer,
  ModalTitle,
  ModalWrapper
} from '../Modal.style';

import { FormContainer, RadioContainer } from './style';
import { MODAL_CLOSE } from '../../../redux/actions';
import {
  Button,
  FormInput,
  Icon,
  PlaceholderLoader,
  RadioButton
} from '../../../atoms';
import Gotham from '../../../ui/typography/gotham';
import {
  ADD_RECOMMENDATION_ADVICE,
  GET_MOTIVATIONS_RECOMMENDATION
} from '../../../redux/actions/recommendation';
import { withMediaQueries } from '../../../hoc/withMediaQueries';
import { MediaQueryInterface } from '../../../interface/mediaQueries';

const modalId = 'AddRecommendationModal';

const AddRecommendationModal = ({
  onClose,
  motivations_recommendation = [],
  getMotivations,
  ean,
  submitRecommendation,
  recommendation_is_active,
  isLoading,
  mediaIsPhone
}) => {
  const [motivationId, setMotivationId] = useState();
  const [otherValue, setOtherValue] = useState();

  const checkSubmitDisabled = () => {
    if (motivationId > 0) return true;
    if (motivationId === 0 && otherValue?.length >= 5) return true;
  };

  const handleOnClose = () => {
    setMotivationId();
    setOtherValue('');
    onClose();
  };

  useEffect(() => {
    getMotivations();
  }, [getMotivations]);

  const handleChange = val => {
    setMotivationId(Number(val));
  };

  const handleChangeOther = val => {
    setOtherValue(val);
  };

  const handleSubmit = () => {
    const body = {
      product_ean: recommendation_is_active,
      suggestion_product_ean: ean,
      motivation_ids: motivationId.toString()
    };

    if (motivationId === 0) {
      body.motivation_text = `${otherValue}`;
    }

    submitRecommendation(body);
    handleOnClose();
  };

  const motivationsCount = motivations_recommendation.length;
  let col1 = 0;
  if (motivationsCount) {
    // col1 = motivationsCount / 2 - (motivationsCount % 2 === 0 ? 0 : 1);
    col1 = Math.ceil(motivationsCount / 2);
  }

  return (
    <Modal id={modalId}>
      <Container>
        <ModalWrapper>
          <ModalGlobalContainer onMouseDown={stopEvent} onClick={stopEvent}>
            <ModalTitle>
              <Gotham htmlAttribute="span" type="modalTitle">
                Seleziona una motivazione
              </Gotham>
              <Icon type="icon-close" size={30} onClick={handleOnClose} />
            </ModalTitle>
            <ModalDescription />
            <ModalBody>
              <FormContainer>
                <PlaceholderLoader isLoading={isLoading} />
                {!isLoading && (
                  <Container>
                    <Row>
                      <Col sm={12} md={6} lg={6} className="pl-0">
                        {motivations_recommendation.slice(0, col1).map(elm => (
                          <RadioContainer key={elm.id}>
                            <RadioButton
                              name={elm.description}
                              label={elm.description}
                              value={elm.id.toString()}
                              checked={elm.id === motivationId}
                              onChange={handleChange}
                            />
                          </RadioContainer>
                        ))}
                        {!mediaIsPhone && col1 % 2 === 0 && (
                          <RadioContainer>
                            <RadioButton
                              name="Altro"
                              label="Altro"
                              value={0}
                              checked={motivationId === 0}
                              onChange={handleChange}
                            />
                          </RadioContainer>
                        )}
                      </Col>
                      <Col sm={12} md={6} lg={6} className="pl-0">
                        {motivations_recommendation
                          .slice(col1, motivations_recommendation.length + 1)
                          .map(elm => (
                            <RadioContainer key={elm.id}>
                              <RadioButton
                                name={elm.description}
                                label={elm.description}
                                value={elm.id.toString()}
                                checked={elm.id === motivationId}
                                onChange={handleChange}
                              />
                            </RadioContainer>
                          ))}
                        {(mediaIsPhone || col1 % 2 !== 0) && (
                          <RadioContainer>
                            <RadioButton
                              name="Altro"
                              label="Altro"
                              value={0}
                              checked={motivationId === 0}
                              onChange={handleChange}
                            />
                          </RadioContainer>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="p-0 mt-2">
                        {motivationId === 0 && (
                          <FormInput
                            placeholder="Inserisci motivazione"
                            label="Motivazione:"
                            onChange={handleChangeOther}
                            value={otherValue}
                          />
                        )}
                      </Col>
                    </Row>
                  </Container>
                )}
              </FormContainer>
            </ModalBody>
            <ButtonsContainer>
              <ButtonWrapper>
                <Button
                  btnText="Cancel"
                  btnType={Button.TYPE.SECONDARY}
                  onClick={handleOnClose}
                />
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  btnText="Finish"
                  btnType={Button.TYPE.PRIMARY}
                  disabled={!checkSubmitDisabled()}
                  onClick={handleSubmit}
                />
              </ButtonWrapper>
            </ButtonsContainer>
          </ModalGlobalContainer>
        </ModalWrapper>
      </Container>
    </Modal>
  );
};

AddRecommendationModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  motivations_recommendation: PropTypes.array,
  ean: PropTypes.string,
  recommendation_is_active: PropTypes.string,
  submitRecommendation: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  mediaIsPhone: MediaQueryInterface
};

AddRecommendationModal.id = modalId;

const composed = compose(
  connect(
    state => {
      const { payload: { ean } = {} } = state.modal;
      const {
        motivations_recommendation,
        recommendation_is_active,
        loading: { motivations_recommendation: isLoading }
      } = state.recommendation;
      return {
        motivations_recommendation,
        ean,
        recommendation_is_active,
        isLoading
      };
    },
    dispatch => ({
      onClose: () => dispatch({ type: MODAL_CLOSE }),
      getMotivations: () =>
        dispatch({ type: GET_MOTIVATIONS_RECOMMENDATION._REQUEST }),
      submitRecommendation: body =>
        dispatch({
          type: ADD_RECOMMENDATION_ADVICE._REQUEST,
          body,
          refresh: false
        })
    })
  ),
  withMediaQueries
)(AddRecommendationModal);
export default composed;
