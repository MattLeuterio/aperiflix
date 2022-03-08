import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  Container, Product
} from './style';
import theme from '../../ui/theme';
import Inter from '../../ui/typography/inter';
import compose from '../../redux/compose';
import { SET_PRODUCT_TYPE } from '../../redux/actions/filters';
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
  setProductType
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
          key={prType.name}
          onClick={() => handleOnSelectType(prType.type)}
        >
          <Inter
            type="italic"
            configuration={prType.type === typeSelected && { fontWeight: 700, color: theme.colors.primary.red }}
          >
            {prType.name}
          </Inter>
        </Product>
      ))}
    </Container>
  );
};

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
