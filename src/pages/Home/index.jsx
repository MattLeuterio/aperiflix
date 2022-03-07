import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  FiltersRow,
  FiltersWrapper,
  HomeContainer,
  InfoRow,
  ResultsContainer,
  TotalWrappers
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import Inter from '../../ui/typography/inter';
import { CardProduct, FilterPill } from '../../atoms';
import { SET_FILTER_BY_TITLE, SET_GENRE } from '../../redux/actions/filters';

const initialListFiltersSelected = [
  {
    name: 'Query',
    value: false
  },
  {
    name: 'Genre',
    value: false
  },
  {
    name: 'Order',
    value: false
  }
];

const Home = ({
  filterByTitle, genreSelected, productTypeSelected,
  setFilterByTitle, setGenre, productsList, orderSelected
}) => {
  const [listProducts, setListProducts] = useState([]);
  const [countFilters, setCountFilters] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [listFiltersSelected, setListFiltersSelected] = useState(initialListFiltersSelected);

  const switchFilterValue = (name) => {
    let sel = null;
    switch (name) {
      case 'Query':
        sel = filterByTitle;
        break;
      case 'Genre':
        sel = genreSelected;
        break;
      case 'Order':
        sel = orderSelected;
        break;

      default:
        sel = null;
    }

    return sel;
  };

  const switchFilterAction = (name) => {
    switch (name) {
      case 'Query':
        setFilterByTitle('');
        break;
      case 'Genre':
        setGenre('');
        break;

      default:
        setFilterByTitle('');
    }
  };

  useEffect(() => {
    setListProducts(productsList);
  }, [productsList]);

  useEffect(() => {
    setTotalProducts(listProducts.length);
  }, [listProducts]);

  useEffect(() => {
    setListFiltersSelected([
      { name: 'Query', value: Boolean(filterByTitle) },
      { name: 'Genre', value: Boolean(genreSelected) },
      { name: 'Order', value: Boolean(orderSelected) }
    ]);
  }, [filterByTitle, genreSelected, orderSelected]);

  useEffect(() => {
    setCountFilters(listFiltersSelected.filter(el => el.value).length);
  }, [listFiltersSelected]);

  useEffect(() => {
    let newList = [];
    let genreList;

    if ((productTypeSelected !== 'all')) {
      const list = newList.length > 0 ? newList : productsList;
      newList = list.filter(el => el.productType.toLowerCase() === productTypeSelected);
    } else {
      newList = productsList;
    }

    if (genreSelected) {
      const list = newList.length > 0 ? newList : productsList;
      newList = list.filter(el => el.genre.toLowerCase() === genreSelected.toLowerCase());
      genreList = newList;
    }

    if (orderSelected) {
      const list = newList.length > 0 ? newList : productsList;
      newList = list.sort((a, b) => {
        const totalA = (a.mVote || 0) + (a.iVote || 0);
        const totalB = (b.mVote || 0) + (b.iVote || 0);
        if (orderSelected === 'More Drunks') {
          return totalB - totalA;
        }
        return totalA - totalB;
      });
    }

    setListProducts(genreList && genreList.length <= 0 ? [] : newList);
  }, [productTypeSelected, genreSelected, orderSelected]);

  return (
    <HomeContainer>
      <InfoRow>
        <FiltersWrapper>
          <Inter
            htmlAttribute="span"
            type="bold"
            configuration={{ fontSize: 20 }}
          >
            Filters
          </Inter>
          <Inter
            htmlAttribute="span"
          >
            ({countFilters})
          </Inter>
        </FiltersWrapper>
        <TotalWrappers>
          <Inter
            htmlAttribute="span"
            type="medium"
            configuration={{ fontSize: 14 }}
          >
            Total:
          </Inter>
          <Inter
            htmlAttribute="span"
            type="medium"
            configuration={{ fontSize: 14 }}
          >
            {totalProducts}
          </Inter>
        </TotalWrappers>
      </InfoRow>
      <FiltersRow>
        {/* eslint-disable-next-line array-callback-return,consistent-return */}
        {listFiltersSelected.map(filter => {
          if (filter.value) {
            return (
              <FilterPill
                name={filter.name}
                value={switchFilterValue(filter.name)}
                handleOnClickRemove={() => switchFilterAction(filter.name)}
              />
            );
          }
        })}
      </FiltersRow>
      <ResultsContainer>
        {listProducts.length > 0 ? listProducts.map(product => (
          <CardProduct product={product} />
        )) : (
          <div>No result</div>
        )}
      </ResultsContainer>
    </HomeContainer>
  );
};


Home.propTypes = {
};

export default connect(
  state => {
    const {
      filterByTitle, genreSelected, orderSelected, productType: productTypeSelected
    } = state.filters;
    const { productsList } = state.product;
    return {
      filterByTitle, genreSelected, orderSelected, productsList, productTypeSelected
    };
  },
  dispatch => ({
    setFilterByTitle: (searchValue) => dispatch({ type: SET_FILTER_BY_TITLE, searchValue }),
    setGenre: (genre) => dispatch({ type: SET_GENRE, genre })
  })
)(withMediaQueries(Home));
