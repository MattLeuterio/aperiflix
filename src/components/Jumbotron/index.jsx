import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import compose from '../../redux/compose';

import {
  LogoContainer,
  SearchContainer,
  ActionsContainer,
  JumbotronContainer,
  FiltersContainer,
  ProductTypeContainer
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import {
  FiltersButton, Logo, ProductType, Search
} from '../../atoms';
import { SET_FILTER_BY_TITLE } from '../../redux/actions/filters';

const Jumbotron = ({
  mediaIsPhone, setFilterByTitle
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    setFilterByTitle(searchValue);
  }, [searchValue]);
  return (
    <JumbotronContainer>
      <LogoContainer>
        <Logo size={mediaIsPhone ? 'medium' : 'large'} />
      </LogoContainer>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <ActionsContainer>
        <FiltersContainer>
          <FiltersButton />
        </FiltersContainer>
        <ProductTypeContainer>
          <ProductType />
        </ProductTypeContainer>
      </ActionsContainer>
    </JumbotronContainer>
  );
};

Jumbotron.propTypes = {
};

const composed = compose(
  connect(
    state => {},
    dispatch => ({
      setFilterByTitle: (searchValue) => dispatch({ type: SET_FILTER_BY_TITLE, searchValue })
    })
  ),
  withMediaQueries
)(Jumbotron);
export default composed;
