import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import Select from 'react-select';
import compose from '../../redux/compose';

import {
  LogoContainer,
  SearchContainer,
  ActionsContainer,
  JumbotronContainer,
  FiltersContainer,
  ProductTypeContainer,
  DisplayContainer,
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import { FiltersButton, Logo, ProductType, DisplayType, Search } from '../../atoms';
import { SET_FILTER_BY_TITLE } from '../../redux/actions/filters';

const Jumbotron = ({
 mediaIsPhone, setFilterByTitle
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (value) => {
    setSearchValue(value);
  }

  useEffect(() => {
    setFilterByTitle(searchValue);
  }, [searchValue]);
  return (
    <JumbotronContainer>
      <LogoContainer>
        <Logo size={mediaIsPhone ? 'medium' : 'large'}/>
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
        <DisplayContainer>
          <DisplayType />
        </DisplayContainer>
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
      setFilterByTitle: (searchValue) => dispatch({ type: SET_FILTER_BY_TITLE, searchValue }),
    })
  ),
  withMediaQueries
)(Jumbotron);
export default composed;
