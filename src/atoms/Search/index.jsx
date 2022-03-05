import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import compose from '../../redux/compose';

import {
  SearchWrapper,
  SearchInput
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import theme from '../../ui/theme';
import { 
  SearchOutline as SearchIcon,
  CloseOutline as CloseIcon 
} from 'react-ionicons';
import { SET_FILTER_BY_TITLE } from '../../redux/actions/filters';

const Search = ({
  setFilterByTitle, isHeader, mediaIsPhone, filterByTitle
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [openSearchMobile, setOpenSearchMobile] = useState(false);

  const handleOnChange = (value) => {
    setFilterByTitle(value);
  }

  const openSearchOnMobile = () => {
    if(mediaIsPhone) setOpenSearchMobile(!openSearchMobile);
  }

  return (
    <SearchWrapper isHeader={isHeader} isMobile={mediaIsPhone} isSearchOpen={openSearchMobile && mediaIsPhone}>
      <SearchIcon
        onClick={() => openSearchOnMobile()}
        className='iconSearch'
        color={theme.colors.primary.white}
        height="22px"
        width="22px"
      />
      <SearchInput
        type="text"
        id="myInput"
        value={filterByTitle}
        onChange={(e) => handleOnChange(e.target.value)}
        placeholder="Filter by name.."
        title="Type in a name"
      />
      {filterByTitle.length > 0 && (
        <CloseIcon
          className='iconClose'
          color={theme.colors.primary.white}
          onClick={() => setFilterByTitle ('')}
          height="24px"
          width="24px"
        />
      )}
    </SearchWrapper>
  );
};

const composed = compose(
  connect(
    state => {
      const { filterByTitle } = state.filters;
      return { filterByTitle }
    },
    dispatch => ({
      setFilterByTitle: (searchValue) => dispatch({ type: SET_FILTER_BY_TITLE, searchValue }),
    })
  ),
  withMediaQueries
)(Search);
export default composed;
