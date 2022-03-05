import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../ui/theme';

const IconSC = styled.span`
  font-size: ${({ size }) => size}px;
  transform: rotate(0deg);
  //z-index: 1;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'unset')};
  color: ${({ color, disabled }) => (disabled ? theme.colors.primary.lightergray : color)};
  
  ${({ rotate }) => rotate && css`transform: rotate(${rotate}deg);`};
  
  ${({
    position, top, left, bottom, right, rotate
  }) => (position === 'absolute' ? `
      position: absolute;
      top: ${top}px;
      left: ${left}px;
      bottom: ${bottom}px;
      right: ${right}px;
    ` : position === 'center' ? `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) ${rotate ? `rotate(${rotate}deg)` : ''};
    ` : null)
};
  
  transition: all 250ms ease-in-out;
`;

const Path = styled.span``;

const Icon = ({
  type, position, onClick, size, color,
  clickable, disabled, top, left, bottom,
  right, rotate
}) => {
  const handleOnclick = (e) => {
    if (onClick && !disabled) onClick(e);
  };
  return (
    <IconSC className={type} position={position} top={top} left={left} bottom={bottom} right={right} onClick={handleOnclick} size={size} color={color} clickable={clickable} disabled={disabled} rotate={rotate}>
      <Path className="path1" />
      <Path className="path2" />
      <Path className="path3" />
      <Path className="path4" />
      <Path className="path5" />
    </IconSC>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  position: PropTypes.oneOf(['absolute', 'relative', 'center']),
  size: PropTypes.number,
  color: PropTypes.string,
  rotate: PropTypes.number,
  clickable: PropTypes.bool,
  disabled: PropTypes.bool,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icon.defaultProps = {
  position: 'relative',
  size: 12,
  color: theme.colors.primary.lightblack,
  clickable: true
};

export default Icon;
