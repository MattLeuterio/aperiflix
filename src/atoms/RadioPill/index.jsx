import React from 'react';
import PropTypes from 'prop-types';

import { Label } from '../RadioButton/style';
import {
  RadioPillContainer, CustomRadio, Text, Input
} from './style';
import Arial from '../../ui/typography/arial';

const RadioPill = ({
  label, name, value,
  onChange, checked
}) => {
  const handleOnchange = ({ currentTarget: { value: newValue } = {} }) => {
    if (onChange) onChange(newValue);
  };

  const handleOnclick = ({ currentTarget: { value: newValue } = {} }) => {
    if (value === newValue && onChange) onChange(null);
  };

  return (
    <RadioPillContainer>
      <Label>
        <Input
          type="radio"
          name={name}
          value={value}
          onChange={handleOnchange}
          onClick={handleOnclick}
          checked={checked}
        />
        <CustomRadio>
          <Text><Arial htmlAttribute="span" type="radioPill">{label}</Arial></Text>
        </CustomRadio>
      </Label>
    </RadioPillContainer>
  );
};

RadioPill.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  checked: PropTypes.bool
};

export default RadioPill;
