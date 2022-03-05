import React from 'react';
import theme from '../../ui/theme';
import compose from '../../redux/compose';
import { connect } from 'react-redux';
import { SET_GENRE, SET_ORDER } from '../../redux/actions/filters';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import Inter from '../../ui/typography/inter';

const Order = ({
  nameOrder, setOrder, orderSelected
}) => {
  const handleOnClickGenre = (order) => {
    setOrder(order);
  }
  return (
    <Inter
      type="h4"
      configuration={nameOrder === orderSelected &&
        {color: theme.colors.primary.red}}
      onClick={() => handleOnClickGenre(nameOrder)}
    >
      {nameOrder}
    </Inter>
  );
};

const composed = compose(
  connect(
    state => {
      const { orderSelected } = state.filters;
      return {
        orderSelected
      }
    },
    dispatch => ({
      setOrder: (order) => dispatch({ type: SET_ORDER, order }),
    })
  ),
  withMediaQueries
)(Order);
export default composed;
