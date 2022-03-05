import React from 'react';
import PropTypes from 'prop-types';

import Arial from '../../ui/typography/arial';
import { ButtonContainer, Container, IconContainer } from './style';
import theme from '../../ui/theme';
import { FilterOutline as FilterIcon } from 'react-ionicons';
import Inter from '../../ui/typography/inter';
import compose from '../../redux/compose';
import { connect } from 'react-redux';
import { AUTH_LOGOUT } from '../../redux/actions/auth';
import {
  SET_SELECTED_LABELS,
  SET_SELECTED_PUBLISHERS
} from '../../redux/actions';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import {
  SET_FILTERS_CLOSE,
  SET_FILTERS_OPEN
} from '../../redux/actions/filters';

const FiltersButton = ({
  disabled,
  setFiltersOpen,
  setFiltersClose,
  filtersState
}) => {
  const handleOnClick = () => {
    if (filtersState) {
      setFiltersClose();
    } else {
      setFiltersOpen();
    }
  };

  return (
    <Container
      disabled={disabled}
      onClick={handleOnClick}
      opened={filtersState}
    >
      <FilterIcon color={'#00000'} height="21px" width="21px" />
      <Inter type="h4" configuration={{ fontWeight: 500 }}>
        Filters
      </Inter>
    </Container>
  );
};

FiltersButton.propTypes = {
  disabled: PropTypes.bool
};

FiltersButton.defaultProps = {
  disabled: false
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
)(FiltersButton);

export default composed;
