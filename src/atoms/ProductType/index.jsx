import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Arial from '../../ui/typography/arial';
import {
  ButtonContainer, Container, IconContainer, Product
} from './style';
import theme from '../../ui/theme';
import { FilterOutline as FilterIcon } from 'react-ionicons';
import Inter from '../../ui/typography/inter';
import compose from '../../redux/compose';
import { connect } from 'react-redux';
import { SET_FILTERS_CLOSE, SET_FILTERS_OPEN, SET_PRODUCT_TYPE } from '../../redux/actions/filters';
import { AUTH_LOGOUT } from '../../redux/actions/auth';
import { SET_SELECTED_LABELS, SET_SELECTED_PUBLISHERS } from '../../redux/actions';
import { withMediaQueries } from '../../hoc/withMediaQueries';

const productTypeList = [
  {
    name: 'All',
    type: 'all'
  },
  {
    name: 'Film',
    type: 'film'
  },
  {
    name: 'Tv-Series',
    type: 'tv-series'
  }
]

const ProductType = ({
  setProductType, productTypeState
}) => {
  const [typeSelected, setTypeSelected] = useState('all');
  const handleOnSelectType = (type) => {
    setTypeSelected(type);
  }

  useEffect(() => {
    setProductType(typeSelected);
  }, [typeSelected]);

  return (
  <Container>
    {productTypeList.map((prType) => (
      <Product
        onClick={() => handleOnSelectType(prType.type)}
      >
        <Inter
          type='italic'
          configuration={prType.type === typeSelected && {fontWeight: 700, color: theme.colors.primary.red}}
        >
          {prType.name}
        </Inter>
      </Product>
    ))}
  </Container>
  );
}

ProductType.propTypes = {
};

ProductType.defaultProps = {
};

const composed = compose(
  connect(
    state => {
      const { productType: productTypeState } = state.filters;
      return {
        productTypeState
      };
    },
    dispatch => ({
      setProductType: (prodType) => dispatch({ type: SET_PRODUCT_TYPE, prodType }),
    })
  ),
  withMediaQueries
)(ProductType);

export default composed;
