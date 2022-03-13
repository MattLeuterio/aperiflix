import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  FiltersRow,
  FiltersWrapper,
  HomeContainer,
  InfoRow,
  ResultsContainer,
  TotalWrappers,
  BottleRender, NoResultWrapper
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import Inter from '../../ui/typography/inter';
import { CardProduct, FilterPill } from '../../atoms';
import {
  SET_FILTER_BY_TITLE, SET_FILTERS_CLOSE, SET_GENRE, SET_ORDER
} from '../../redux/actions/filters';
// eslint-disable-next-line import/extensions
import { ProductDetailsPanel } from '../../components';
import EmptyBottle from '../../ui/assets/img/rating/bottle-empty.png';

const initialListFiltersSelected = [
  {
    name: 'Title',
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
  setFilterByTitle, setGenre, setOrder, productsList,
  orderSelected, filtersOpen, setFiltersPanelClose
}) => {
  const [detailsPanelIsOpen, setDetailsPanelIsOpen] = useState(false);
  const [productSelected, setProductSelected] = useState({});
  const [listProducts, setListProducts] = useState([]);
  const [countFilters, setCountFilters] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [listFiltersSelected, setListFiltersSelected] = useState(initialListFiltersSelected);

  const switchFilterValue = (name) => {
    let sel = null;
    switch (name) {
      case 'Title':
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
      case 'Title':
        setFilterByTitle('');
        break;
      case 'Genre':
        setGenre('');
        break;
      case 'Order':
        setOrder('');
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
      { name: 'Title', value: Boolean(filterByTitle) },
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

    if (filterByTitle) {
      const list = newList.length > 0 ? newList : productsList;
      newList = list.filter(el => el.title.toLowerCase().includes(filterByTitle.toLowerCase()));
    }

    setListProducts(genreList && genreList.length <= 0 ? [] : newList);
  }, [productTypeSelected, genreSelected, orderSelected, filterByTitle]);

  const handleOnClickCard = (product) => {
    if (filtersOpen) setFiltersPanelClose();
    setDetailsPanelIsOpen(true);
    setProductSelected(product);
  };

  return (
    <>
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
                  key={filter.name}
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
            <CardProduct
              key={product.id}
              product={product}
              onClickCard={() => handleOnClickCard(product)}
            />
          )) : (
            <NoResultWrapper>
              <Inter>Nessun risultato</Inter>
              <BottleRender srcBg={EmptyBottle} />
            </NoResultWrapper>
          )}
        </ResultsContainer>
      </HomeContainer>
      <ProductDetailsPanel
        product={productSelected}
        isOpen={detailsPanelIsOpen}
        onClose={() => setDetailsPanelIsOpen(false)}
      />
    </>
  );
};


Home.propTypes = {
};

export default connect(
  state => {
    const {
      filterByTitle, genreSelected, orderSelected,
      productType: productTypeSelected, filtersOpen
    } = state.filters;
    const { productsList } = state.product;
    return {
      filterByTitle, genreSelected, orderSelected,
      productsList, productTypeSelected, filtersOpen
    };
  },
  dispatch => ({
    setFilterByTitle: (searchValue) => dispatch({ type: SET_FILTER_BY_TITLE, searchValue }),
    setGenre: (genre) => dispatch({ type: SET_GENRE, genre }),
    setOrder: (order) => dispatch({ type: SET_ORDER, order }),
    setFiltersPanelClose: () => dispatch({ type: SET_FILTERS_CLOSE })
  })
)(withMediaQueries(Home));
