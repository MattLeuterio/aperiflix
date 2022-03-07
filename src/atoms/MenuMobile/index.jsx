import React from 'react';
import { connect } from 'react-redux';
import compose from '../../redux/compose';

import {
  Container
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import { ProductType } from '../index';
import { FiltersSection } from '../../components';

const MenuMobile = ({
  open
}) => (
  <Container isOpen={open}>
    <ProductType />
    <FiltersSection isMenuMobile />
  </Container>
);

const composed = compose(
  connect(
    state => {},
    dispatch => ({
    })
  ),
  withMediaQueries
)(MenuMobile);
export default composed;
