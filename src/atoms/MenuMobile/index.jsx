import React from 'react';
import PropTypes from 'prop-types';

import Arial from '../../ui/typography/arial';
import {
  ButtonContainer, Container, IconContainer
} from './style';
import theme from '../../ui/theme';

import Icon from '../Icon';
import compose from '../../redux/compose';
import { connect } from 'react-redux';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import { DisplayType, ProductType } from '../index';
import { FiltersSection } from '../../components';

const MenuMobile = ({
  open
}) => (
 <Container isOpen={open}>
   <DisplayType />
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
