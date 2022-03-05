import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import compose from '../../redux/compose';

import {
  FiltersSectionContainer, Genres, Orders,
  Section
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import { Genre, Order } from '../../atoms';
import { genresList, ordersList } from '../../utils/filters';
import Inter from '../../ui/typography/inter';

const FiltersSection = ({
  mediaIsPhone, filtersOpen, isHeader, isMenuMobile
}) => {
  return (
    <FiltersSectionContainer isMenuMobile={isMenuMobile} isOpen={filtersOpen} isHeader={isHeader}>
      <Section>
        <Inter type="bold">Genres</Inter>
        <Genres>
          {genresList.map((genre) => (
            <Genre nameGenre={genre.name} />
          ))}
        </Genres>
      </Section>
      <Section>
        <Inter type="bold">Orders</Inter>
        <Orders>
          {ordersList.map((order) => (
            <Order nameOrder={order.name} />
          ))}
        </Orders>
      </Section>
    </FiltersSectionContainer>
  );
};

const composed = compose(
  connect(
    state => {
      const { filtersOpen } = state.filters;
      return { filtersOpen }
    },
    dispatch => ({
    })
  ),
  withMediaQueries
)(FiltersSection);
export default composed;
