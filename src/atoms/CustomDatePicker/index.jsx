import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import { DatePickerContainer } from './style';
import { dateFormat } from '../../utils/common';

const parseDateFormat = (v) => {
  if (typeof v === 'string' && v?.length) {
    let date = v.replace(/-/gi, '/').split('/');
    date = {
      day: date[0],
      month: date[1],
      year: date[2]
    };
    const newDate = new Date(moment(`${date.year}-${date.month}-${date.day}`).format('YYYY-MM-DD'));
    // eslint-disable-next-line no-restricted-globals
    return isNaN(Date.parse(newDate)) ? undefined : newDate;
  }
  return undefined;
};
// (v ? new Date(moment(v).format('YYYY-MM-DD')) : undefined);
const CustomDatePicker = ({
  onChange, placeholder, value,
  name, valid, readonly,
  disabled, minDate, maxDate,
  showTimeSelect = false
}) => {
  const [val, setVal] = useState(value);
  useEffect(() => { setVal(value); }, [value]);
  const updateValue = (newValue) => {
    setVal(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <DatePickerContainer valid={readonly || valid} value={value} readonly={readonly} disabled={disabled}>
      <DatePicker
        dateFormat="dd/MM/yyyy HH:mm"
        onChange={updateValue}
        placeholderText={readonly ? '-' : placeholder}
        selected={val}
        name={name}
        readOnly={readonly}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        showTimeSelect={showTimeSelect}
      />
    </DatePickerContainer>
  );
};

CustomDatePicker.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool
};

CustomDatePicker.defaultProps = {
  placeholder: 'Insert...',
  valid: true
};

export default CustomDatePicker;
