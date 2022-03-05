import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Label, Input, CustomCheckbox, Text
} from './style';
import Arial from '../../ui/typography/arial';
import { getRandomNumber } from '../../utils/common';

const Checkbox = ({
  label, name, value: eValue,
  onChange, disabled, checked = false
}) => {
  const [value, setValue] = useState(eValue);
  const [selected, setSelected] = useState(eValue);
  useEffect(() => { setValue(eValue); }, [eValue]);
  useEffect(() => { setSelected(checked); }, [checked]);

  const handleOnChange = ({ currentTarget: { value: newValue } = {} }) => {
    setValue(newValue);
    setSelected(!selected);
    if (onChange) onChange({checked: !selected, value: newValue});
  };

  return (
    <Label htmlFor={name} disabled={disabled}>
      <Input
        id={name}
        type="checkbox"
        name={name}
        value={value}
        onChange={handleOnChange}
        checked={selected}
        disabled={disabled}
      />
      <CustomCheckbox disabled={disabled} />
      <Text disabled={disabled}>
        <Arial htmlAttribute="span" type="label">{label}</Arial>
      </Text>
    </Label>
  );
};
Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  name: `checkbox-${getRandomNumber(1)}`
};

export default Checkbox;
