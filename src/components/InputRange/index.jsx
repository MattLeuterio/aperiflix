import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CustomInput } from '../../atoms';
import Arial from '../../ui/typography/arial';
import { Label, InputRangeContainer, Error, InputContainer } from './style';
import theme from '../../ui/theme';

const InputRange = ({
  label,
  precompiled,
  value = {},
  onChange,
  onKeyPress,
  disabled,
  minVal = 0,
  maxVal = 9999999
}) => {
  const { min, max } = value;
  const [range, setRange] = useState({ min, max });

  const handleOnChange = (field = '', newValue) => {
    setRange({
      ...range,
      [field]: newValue
    });
  };

  useEffect(() => {
    if (onChange) onChange(range);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  useEffect(() => {
    setRange({ min: value.min, max: value.max });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max]);

  const fromIsValid = () => {
    let valid = true;
    if (range.min) {
      valid =
        Number(range.min) >= Number(minVal) &&
        Number(range.min) <= Number(maxVal);
    }

    if (range.min && range.max && valid) {
      valid = Number(range.min) <= Number(range.max);
    }

    return valid;
  };

  const toIsValid = () => {
    let valid = true;
    if (range.max) {
      valid =
        Number(range.max) <= Number(maxVal) &&
        Number(range.max) >= Number(minVal);
    }

    if (range.min && range.max && valid) {
      valid = Number(range.max) >= Number(range.min);
    }

    return valid;
  };

  return (
    <InputRangeContainer>
      <Label>
        <Arial
          type="label"
          configuration={{
            color:
              fromIsValid() && toIsValid()
                ? theme.colors.primary.black
                : theme.colors.primary.red,
            fontWeight: precompiled ? 500 : 400
          }}
        >
          {label}
        </Arial>
      </Label>
      <InputContainer>
        <CustomInput
          placeholder="Da"
          type="number"
          onChange={newValue => handleOnChange('min', newValue)}
          onKeyPress={onKeyPress}
          value={range.min}
          valid={fromIsValid()}
          disabled={disabled}
        />
        <CustomInput
          placeholder="A"
          type="number"
          onChange={newValue => handleOnChange('max', newValue)}
          onKeyPress={onKeyPress}
          valid={toIsValid()}
          value={range.max}
          disabled={disabled}
        />
      </InputContainer>
      {(!fromIsValid() || !toIsValid()) && (
        <Error>
          <Arial type="error">{`Errore: il campo non è valido (valore minimo è ${minVal}, valore massimo è ${maxVal})`}</Arial>
        </Error>
      )}
    </InputRangeContainer>
  );
};

InputRange.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object,
  minVal: PropTypes.number,
  maxVal: PropTypes.number,
  precompiled: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};

export default InputRange;
