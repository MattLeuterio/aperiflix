import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColS = styled.div``;

const Col = ({
  children, className, xs, sm, md, lg
}) => {
  const getValueByBreakPoint = () => {
    const breakPoints = [
      { label: 'xs', value: xs },
      { label: 'sm', value: sm },
      { label: 'md', value: md },
      { label: 'lg', value: lg }
    ];
    let classNames = '';

    breakPoints.forEach(bp => {
      if (bp && typeof bp.value === 'number') {
        classNames += ` col-${bp.label}-${bp.value}`;
      } else if (bp && bp.value && bp.value.size) {
        classNames += ` col-${bp.label}-${bp.value.size} offset-${bp.label}-${bp
          .value.offset || 0}`;
      }
    });

    if (!classNames) classNames = 'col';
    return classNames;
  };

  return <ColS className={`${getValueByBreakPoint()} ${className}`}>{children}</ColS>;
};

const breakPointInterface = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    size: PropTypes.number,
    offset: PropTypes.number
  })
]);

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: breakPointInterface,
  sm: breakPointInterface,
  md: breakPointInterface,
  lg: breakPointInterface
};

Col.defaultProps = {
  className: ''
};

export default Col;
