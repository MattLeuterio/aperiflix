import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Input, InputContainer, SpanIcon, ValidInput
} from './style';
import { RegexpType, validator } from '../../utils/validator';

const ModalCustomInput = ({
  onBlur,
  onChange,
  placeholder,
  value,
  name,
  icon,
  type,
  valid,
  readonly,
  autoFocus,
  disabled,
  ean,
  onClickIcon,
  onFocus,
  onKeyPress,
  defaultValue,
  onKeyUp,
  padding
}) => {
  const [val, setVal] = useState(value);
  useEffect(() => {
    setVal(value);
  }, [value]);

  const updateValue = ({ currentTarget: { value: newValue } = {} }) => {
    if (newValue.length <= 0 || !validator(RegexpType.SPACEONLY, newValue)) {
      setVal(newValue);
      if (onChange) onChange(newValue.trim());
    }
  };

  const handleOnBlur = () => {
    setVal(val || defaultValue);
    if (onBlur) onBlur(val || defaultValue);
  };

  const handleOnFocus = () => {
    if (onFocus) onFocus();
  };

  const handleOnKeyPress = e => {
    if (onKeyPress) onKeyPress(e);
  };
  const handleOnKeyUp = e => {
    if (onKeyUp) onKeyUp(e);
  };

  const handleOnclickIcon = () => {
    if (onClickIcon && value.length > 0 && valid) onClickIcon();
  };

  return (
    <InputContainer
      valid={readonly || (valid && typeof valid !== 'string')}
      value={value}
      readonly={readonly}
      disabled={disabled}
      padding={padding}
    >
      <Input
        autoFocus={autoFocus}
        type={type}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onChange={updateValue}
        onKeyPress={handleOnKeyPress}
        onKeyUp={handleOnKeyUp}
        placeholder={readonly ? '-' : placeholder}
        value={val}
        name={name}
        readonly={readonly}
        disabled={disabled}
        icon={icon}
      />
      {icon ? (
        <SpanIcon
          className={icon}
          hasValue={val?.length >= 1}
          onClick={handleOnclickIcon}
        />
      ) : (
        ''
      )}
      {valid && !icon && val?.length >= 1 && ean && (
        <ValidInput className="icon-check" />
      )}
    </InputContainer>
  );
};

ModalCustomInput.propTypes = {
  onChange: PropTypes.func,
  onClickIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  ean: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.string
};

ModalCustomInput.defaultProps = {
  autoFocus: false,
  placeholder: 'Insert...',
  readonly: false,
  type: 'text',
  valid: true
};

export default ModalCustomInput;
