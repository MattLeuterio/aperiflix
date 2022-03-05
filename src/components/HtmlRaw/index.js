import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { HRC } from './styles';


const HtmlRaw = ({ html }) => {
  const setupRoutine = () => {
    // insert here all functions to fire
  };

  useEffect(() => {
    setupRoutine();
  }, []);

  return (
    <>
      {html && (
        <HRC dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </>
  );
};

HtmlRaw.propTypes = {
  html: PropTypes.string
};

export default HtmlRaw;
