import React from 'react';
import theme from '../../ui/theme';
import compose from '../../redux/compose';
import { connect } from 'react-redux';
import { SET_GENRE } from '../../redux/actions/filters';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import Inter from '../../ui/typography/inter';

const Genre = ({
  nameGenre, idGenre, setGenre, genreSelected
}) => {
  const handleOnClickGenre = (genre) => {
    setGenre(genre);
  };

  return (
    <Inter
      type="h4"
      configuration={nameGenre === genreSelected &&
        {color: theme.colors.primary.red}}
      onClick={() => handleOnClickGenre(nameGenre)}
    >
      {nameGenre}
    </Inter>
  );
};

const composed = compose(
  connect(
    state => {
      const { genreSelected } = state.filters;
      return {
        genreSelected
      }
    },
    dispatch => ({
      setGenre: (genre) => dispatch({ type: SET_GENRE, genre }),
    })
  ),
  withMediaQueries
)(Genre);
export default composed;
