import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Arial from '../../ui/typography/arial';
import {
  ButtonContainer, Container, IconContainer, Product
} from './style';
import theme from '../../ui/theme';
import {
  Grid as CardsIcon,
  List as ListIcon
} from 'react-ionicons';
import Inter from '../../ui/typography/inter';
import compose from '../../redux/compose';
import { connect } from 'react-redux';
import { SET_DISPLAY_TYPE, SET_PRODUCT_TYPE } from '../../redux/actions/filters';
import { withMediaQueries } from '../../hoc/withMediaQueries';

const DisplayType = ({
   setDisplayType, displayTypeState
}) => {
  const [typeSelected, setTypeSelected] = useState('cards');

  const handleOnSelectType = (type) => {
    setTypeSelected(type);
    console.log('click type', type);
  }

  useEffect(() => {
    setDisplayType(typeSelected);
  }, [typeSelected]);

  return (
  <Container>
      <IconContainer
        onClick={() => handleOnSelectType('list')}
      >
        <ListIcon
          color={
            typeSelected === 'list' ?
              theme.colors.primary.red
              : theme.colors.primary.white
          }
          height="24px"
          width="24px"
        />
      </IconContainer>
      <IconContainer
        onClick={() => handleOnSelectType('cards')}
      >
        <CardsIcon
          color={
            typeSelected === 'cards' ?
              theme.colors.primary.red
              : theme.colors.primary.white
          }
          height="20px"
          width="20px"
        />
      </IconContainer>
  </Container>
  );
}

DisplayType.propTypes = {
};

DisplayType.defaultProps = {
};

const composed = compose(
  connect(
    state => {
      const { displayType: displayTypeState } = state.filters;
      return {
        displayTypeState
      };
    },
    dispatch => ({
      setDisplayType: (displayType) => dispatch({ type: SET_DISPLAY_TYPE, displayType }),
    })
  ),
  withMediaQueries
)(DisplayType);

export default composed;

