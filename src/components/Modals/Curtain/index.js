import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CurtainWrapper } from './index.styles';

const Curtain = (props) => {
  const {
    open, noscroll, children, backgroundColor, onClick
  } = props;
  const body = document.getElementsByTagName('body')[0];
  const [state, setState] = useState({ curtainAdded: false });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (props.open && !state.curtainAdded) {
      setState({ curtainAdded: true });
    }

    if (!noscroll) {
      return null;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, noscroll]);

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <CurtainWrapper
      backgroundColor={backgroundColor}
      onMouseDown={onClick}
    >
      {children}
    </CurtainWrapper>, body
  );
};

Curtain.propTypes = {
  open: PropTypes.bool,
  noscroll: PropTypes.bool,
  backgroundColor: PropTypes.string,
  children: PropTypes.any,

  onClick: PropTypes.func
};

export default Curtain;
