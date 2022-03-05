import React from 'react';
import PropTypes from 'prop-types';
import { Zoom, toast } from 'react-toastify';
import { connect } from 'react-redux';

import { Icon } from '../../atoms';
import { ToastContainer, ToastCustomContainer, ToastWrapper } from './style';
import Arial from '../../ui/typography/arial';
import theme from '../../ui/theme';

const Toast = () => (
  <ToastWrapper>
    <ToastContainer
      autoClose={2500}
      closeButton={false}
      transition={Zoom}
    />
  </ToastWrapper>
);

const ToastSuccess = ({ children }) => (
  <ToastCustomContainer>
    <Icon type="icon-verde" size={30} />
    <Arial type="toast" style={{ marginLeft: '10px' }}>
      {children}
    </Arial>
  </ToastCustomContainer>
);
ToastSuccess.propTypes = {
  children: PropTypes.node
};

const ToastInfo = ({ children }) => (
  <ToastCustomContainer>
    <Icon type="icon-verde" size={30} />
    <Arial type="toast" style={{ marginLeft: '10px' }}>
      {children}
    </Arial>
  </ToastCustomContainer>
);
ToastInfo.propTypes = {
  children: PropTypes.node
};

const ToastError = ({ children }) => (
  <ToastCustomContainer>
    <Icon type="icon-allert" size={30} color={theme.colors.primary.red} />
    <Arial type="toast" style={{ marginLeft: '10px' }}>
      {children}
    </Arial>
  </ToastCustomContainer>
);
ToastError.propTypes = {
  children: PropTypes.node
};

Toast.TYPE = {
  DEFAULT: 'default',
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
};

Toast.show = (type = Toast.TYPE.DEFAULT, content = 'you miss to pass content') => {
  switch (type) {
    case Toast.TYPE.INFO:
      toast.info(<ToastInfo>{content}</ToastInfo>);
      break;
    case Toast.TYPE.SUCCESS:
      toast.success(<ToastSuccess>{content}</ToastSuccess>);
      break;
    case Toast.TYPE.ERROR:
      toast.error(<ToastError>{content}</ToastError>);
      break;
    default:
      toast[type](content);
      break;
  }
};

Toast.propTypes = {
  // HOC (connect, state)
};

export default connect(
  state => {
  }
)(Toast);
