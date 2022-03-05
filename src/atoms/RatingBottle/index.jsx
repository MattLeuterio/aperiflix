import React, { createRef, useEffect, useState } from 'react';

import { Container, Plug, Rating } from './style';
import compose from '../../redux/compose';
import { connect } from 'react-redux';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import { RenderBottles } from '../index';
import plugM from '../../ui/assets/img/rating/plug-m.png';
import plugI from '../../ui/assets/img/rating/plug-i.png';

const RatingBottle = ({
  vote = 0, voter = 'm',
}) => {
  return (
    <Container>
      <Plug srcPlug={voter === 'm' ? plugM : plugI} />
      <Rating>
        <RenderBottles vote={vote}/>
      </Rating>
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
    })
  ),
  withMediaQueries
)(RatingBottle);

export default composed;
