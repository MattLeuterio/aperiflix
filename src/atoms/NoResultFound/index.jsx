import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonWrapper,
  NoResultContainer,
  NoResultLabel,
  NoResultSubLabel
} from './style';
import Arial from '../../ui/typography/arial';
import Gotham from '../../ui/typography/inter';
import theme from '../../ui/theme';
import { Button, Icon } from '../index';

const NoResultFound = ({
  icon,
  text,
  btnText,
  btnOnClick,
  subText,
  buttonType,
  isRecommendation = false
}) => (
  <NoResultContainer>
    <Icon type={icon} size={131} />
    <NoResultLabel>
      {isRecommendation ? (
        <Gotham
          type="title"
          configuration={{
            color: !subText
              ? theme.colors.primary.gray
              : theme.colors.primary.black
          }}
        >
          {text}
        </Gotham>
      ) : (
        <Arial
          configuration={{
            fontSize: 18,
            color: !subText
              ? theme.colors.primary.gray
              : theme.colors.primary.black
          }}
        >
          {text}
        </Arial>
      )}
    </NoResultLabel>
    {subText && (
      <NoResultSubLabel>
        <Arial
          configuration={{ fontSize: 14, color: theme.colors.primary.gray }}
        >
          {subText}
        </Arial>
      </NoResultSubLabel>
    )}
    {btnOnClick && btnText && (
      <ButtonWrapper>
        <Button
          onClick={btnOnClick}
          btnText={btnText}
          btnType={buttonType ? buttonType : Button.TYPE.SECONDARY}
        />
      </ButtonWrapper>
    )}
  </NoResultContainer>
);

NoResultFound.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnOnClick: PropTypes.func,
  subText: PropTypes.string,
  buttonType: PropTypes.string
};

export default NoResultFound;
