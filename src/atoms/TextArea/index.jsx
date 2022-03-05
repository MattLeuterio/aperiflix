import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Arial from '../../ui/typography/arial';
import {
  Label, TextAreaContainer, TextAreaWrapper, TextInput
} from './style';
import theme from '../../ui/theme';

const TextArea = ({
  label, placeholder, text, onChange, rows = 5, readOnly = false, id = ''
}) => {
  const [value, setValue] = useState(text);
  useEffect(() => { setValue(text); }, [text]);

  const handleOnChange = ({ currentTarget: { value: newValue } = {} }) => {
    if (onChange) onChange(newValue);
  };

  return (
    <TextAreaContainer>
      <Label>
        <Arial type="label" configuration={{ color: theme.colors.primary.black }}>{label}</Arial>
      </Label>
      <TextAreaWrapper>
        <TextInput id={id} rows={rows} placeholder={placeholder} onChange={handleOnChange} value={value} readOnly={readOnly} />
      </TextAreaWrapper>
    </TextAreaContainer>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func
};

export default TextArea;
