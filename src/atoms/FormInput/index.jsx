import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CustomInput from '../CustomInput';
import CustomSelect from '../CustomSelectOld';
import PhoneInput from '../PhoneInput';
import Roboto from '../../ui/typography/inter';
import { Label, FormInputContainer, Error } from './style';
import { CustomDatePicker, ModalCustomInput } from '../index';
import ModalPasswordInput from '../ModalPasswordInput';
import InputFileUpload from '../InputFileUpload';
import { getLabelValue } from '../../utils/common';

const FormInput = props => {
  const {
    label, type, valid, value, readonly, height, labels, widthHeightCheck
  } = props;

  const renderType = () => {
    switch (type) {
      case 'select':
        // eslint-disable-next-line react/jsx-props-no-spreading
        return (<CustomSelect {...props} placeholder={getLabelValue('select_placeholder_default', labels)} />);
      case 'date':
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <CustomDatePicker {...props} placeholder={getLabelValue('input_placeholder_default', labels)} />;
      case 'phonenumber':
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <PhoneInput {...props} />;
      case 'modal-input':
        return <ModalCustomInput {...props} placeholder={getLabelValue('input_placeholder_default', labels)} />;
      case 'form-password':
        return <ModalPasswordInput {...props} placeholder={getLabelValue('input_placeholder_default', labels)} />;
      case 'upload-file':
        return <InputFileUpload {...props} />;
      default:
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <CustomInput {...props} placeholder={getLabelValue('input_placeholder_default', labels)} />;
    }
  };

  return (
    <FormInputContainer height={height} className="form-inputs" type={type}>
      <Label type={type}>
        <Roboto configuration={{ fontSize: 13 }}>
          {label}
        </Roboto>
      </Label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {renderType()}
      {!readonly && (!valid || typeof valid === 'string') && value && (
        <Error>
          <Roboto type="error">{valid || getLabelValue('input_field_not_valid_message', labels)}</Roboto>
        </Error>
      )}
      {(type === 'modal-input' && widthHeightCheck) && (
        <Error>
          <Roboto type="error">{getLabelValue('input_field_not_valid_message', labels)}</Roboto>
        </Error>
      )}
    </FormInputContainer>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  valid: PropTypes.bool,
  readonly: PropTypes.bool,
  precompiled: PropTypes.bool
};

FormInput.defaultProps = {
  readonly: false,
  valid: true
};

export default connect(
  state => ({
    labels: state.app.selectedLabel
  }),
  dispatch => ({
  })
)(FormInput);
