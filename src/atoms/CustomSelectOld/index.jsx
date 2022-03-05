import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { SelectContainer } from './style';
import theme from '../../ui/theme';
import { MediaQueryInterface } from '../../interface/mediaQueries';
import { withMediaQueries } from '../../hoc/withMediaQueries';

const CustomSelectOld = ({
  options = [], onChange, onBlur, selected, disabled, isClearable,
  placeholder = 'Select...', styles = {}, readonly = false,
  formatOptionLabel, className, isSearchType = false, mediaIsPhone, isMulti = false
}) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? theme.colors.custom.blue
        : theme.colors.primary.darkGray,
      backgroundColor: theme.colors.primary.white,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      lineHeight: '20px',
      minHeight: 40,
      height: 'auto',
      '&:hover': {
        color: theme.colors.primary.white,
        backgroundColor: theme.colors.custom.blue
      },
      ...styles?.option
    }),
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      height: 40,
      borderRadius: 6,
      boxShadow: 'none',
      backgroundColor: !state.isDisabled ? theme.colors.primary.white : theme.colors.primary.lightgray,
      cursor: !state.isDisabled ? 'pointer' : 'not-allowed',
      border: `solid 1px ${theme.colors.primary.lightgray}`,
      '&:hover': {
        border: `solid 1px ${theme.colors.primary.lightgray}`,
        boxShadow: 'none'
      },
      ...styles?.controls
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.primary.white,
      borderRadius: 6,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      border: `solid 1px ${theme.colors.primary.lightgray}`,
      borderTop: 'none',
      boxShadow: 'none',
      marginTop: -6,
      overflow: 'hidden',
      height: 'auto',
      ...styles?.menu
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
      '&:hover': {
        boxShadow: 'none'
      },
      ...styles?.menuList
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.isFocused ? 'rotate(180deg)' : null,
      ...styles?.dropdownIndicator
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      color: theme.colors.primary.darkGray,
      '&:hover': {
        color: theme.colors.primary.darkGray
      },
      ...styles?.indicatorsContainer
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
      ...styles?.indicatorSeparator
    })
  };

  const [selectedOption, setSelectedOption] = useState(selected);

  const onchangeSelected = (value) => {
    setSelectedOption(value);
    if (onChange) onChange(value);
  };

  const handleOnBlur = (e) => {
    e.preventDefault();
    if (onBlur) onBlur(selectedOption);
  };

  useEffect(() => {
    setSelectedOption(selected);
    if (selectedOption?.value !== selected?.value) {
      onChange(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const [searchInput, setSearchInput] = useState('');
  let customProps = {};
  if (isSearchType) {
    customProps = {
      menuIsOpen: searchInput.length >= 3,
      isClearable: true
    };
  }

  return (
    <SelectContainer readonly={readonly} isSearchType={isSearchType}>
      <Select
        className={className}
        styles={customStyles}
        value={selectedOption}
        onChange={onchangeSelected}
        onBlur={handleOnBlur}
        isDisabled={disabled}
        options={options}
        placeholder={placeholder}
        formatOptionLabel={formatOptionLabel}
        onInputChange={(value) => setSearchInput(value)}
        noOptionsMessage={() => <>Nessun risultato</>}
        isClearable={isClearable}
        isSearchable={!mediaIsPhone || isSearchType}
        isMulti={isMulti}
        {...customProps}
      />
    </SelectContainer>
  );
};

CustomSelectOld.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  styles: PropTypes.object,
  customProps: PropTypes.object,
  mediaIsPhone: MediaQueryInterface,
};

export default withMediaQueries(CustomSelectOld);
