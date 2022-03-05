import React from 'react';
import PropTypes from 'prop-types';

import Arial from '../../ui/typography/arial';
import { ButtonContainer, Container, IconContainer } from './style';
import theme from '../../ui/theme';
import { CloseOutline as CloseIcon } from 'react-ionicons';
import Inter from '../../ui/typography/inter';
import compose from '../../redux/compose';
import { connect } from 'react-redux';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import {
  SET_FILTERS_CLOSE,
  SET_FILTERS_OPEN
} from '../../redux/actions/filters';

const FilterPill = ({
  name, value, handleOnClickRemove
}) => {
  return (
    <Container>
      <Inter type="h4" configuration={{ fontWeight: 500 }}>
        {name}: {value}
      </Inter>
      <CloseIcon
        className='iconClose'
        color={theme.colors.primary.white}
        onClick={() => handleOnClickRemove()}
        height="24px"
        width="24px"
      />
    </Container>
  );
};

const composed = compose(
  connect(
    state => {
      const { filtersOpen: filtersState } = state.filters;
      return {
        filtersState
      };
    },
    dispatch => ({
      setFiltersOpen: () => dispatch({ type: SET_FILTERS_OPEN }),
      setFiltersClose: () => dispatch({ type: SET_FILTERS_CLOSE }),
    })
  ),
  withMediaQueries
)(FilterPill);

export default composed;
