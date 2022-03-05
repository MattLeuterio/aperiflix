import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PropTypes from 'prop-types';

import { InputContainer } from './style';

const CustomInput = ({
  onBlur,
  onChange,
  placeholder,
  value,
  valid,
  readonly,
  disabled,
  onFocus,
  onKeyPress,
}) => {
  const [val, setVal] = useState(value);
  useEffect(() => {
    setVal(value);
  }, [value]);

  const updateValue = (newValue) => {
    setVal(newValue);
    if (onChange) onChange(newValue ? `+${newValue}` : '');
  };

  const handleOnBlur = () => {
    if (onBlur) onBlur(val);
  };

  const handleOnFocus = () => {
    if (onFocus) onFocus();
  };

  const handleOnKeyPress = e => {
    if (onKeyPress) onKeyPress(e);
  };

  return (
    <InputContainer
      valid={readonly || (valid && typeof valid !== 'string')}
      value={value}
      readonly={readonly}
      disabled={disabled}
    >
      <PhoneInput
        country="it"
        preferredCountries={['it']}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onChange={updateValue}
        onKeyPress={handleOnKeyPress}
        placeholder={readonly ? '-' : placeholder}
        value={val}
        readonly={readonly}
        disabled={disabled}
      />
    </InputContainer>
  );
};

CustomInput.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool
};

CustomInput.defaultProps = {
  placeholder: 'Insert...',
  readonly: false,
  valid: true
};

export default CustomInput;
