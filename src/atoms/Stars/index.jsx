import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StarsContainer, StarItem } from './style';

const Stars = ({ stars, onClick, selected = 0 }) => {
  const starsElement = [];
  const [starsSelected, selectStar] = useState(Number(selected));

  const onClickStar = (value) => {
    const newValue = value === starsSelected ? 0 : value;
    selectStar(newValue);
    if (onClick) onClick(newValue);
  };

  useEffect(() => {
    selectStar(Number(selected));
  }, [selected]);

  for (let i = 0; i < stars; i += 1) {
    starsElement.push(
      <StarItem
        key={i}
        className={` ${
          i < starsSelected ? 'icon-star-full' : 'icon-star-empty'
        }`}
        onClick={() => onClickStar(i + 1)}
      />
    );
  }
  return <StarsContainer>{starsElement}</StarsContainer>;
};

Stars.propTypes = {
  stars: PropTypes.number,
  onClick: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Stars.defaultProps = {
  stars: 5
};

export default Stars;
