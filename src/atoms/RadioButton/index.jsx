import React from 'react';
import PropTypes from 'prop-types';

import {
  RadioButtonContainer, Label, Input, CustomRadio, Text
} from './style';
import Arial from '../../ui/typography/arial';

const RadioButton = ({
  label,
  name,
  value,
  onChange,
  disabled,
  checked
}) => {
  const handleOnChange = (e) => {
    const { currentTarget } = e;
    if (onChange) onChange(currentTarget.value);
  };
  return (
    <RadioButtonContainer>
      <Label>
        <Input
          id={`${name}-${value}`}
          type="radio"
          name={name}
          value={value}
          onChange={handleOnChange}
          checked={checked}
          disabled={disabled}
        />
        <CustomRadio disabled={disabled} />
        <Text htmlFor={`${name}-${value}`}><Arial type="cartNewProduct" htmlAttribute="span">{label}</Arial></Text>
      </Label>
    </RadioButtonContainer>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

export default RadioButton;
