import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  FiltersSection,
  Jumbotron,
} from '../index';
import { PageContainer, PageContent } from './styles';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import { heightHeaderShow } from '../../const';
import { Header } from '../../atoms';

const GlobalLayout = ({
  children, mediaIsPhone
}) => {
  const [vh, setVh] = useState(`${window.innerHeight * 0.01}px`);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.pageYOffset);
    };
  });

  window.addEventListener('resize', () => {
    const newVh = `${window.innerHeight * 0.01}px`;
    setVh(newVh);
  });

  return (
    <>
      <Header isVisible={mediaIsPhone || scrollPosition >= heightHeaderShow} />
      {(!mediaIsPhone) && (
        <FiltersSection isHeader={scrollPosition >= heightHeaderShow} />
      )}
      <Jumbotron />
      <PageContainer
        vh={vh}
      >
        <PageContent
          jumbotronIsActive={!mediaIsPhone && scrollPosition < 258}
          className="page-content"
        >
          {children}
        </PageContent>
      </PageContainer>
    </>
  );
};

GlobalLayout.propTypes = {
  children: PropTypes.node
};

export default connect(
  state => {
  },
  dispatch => ({
  })
)(withMediaQueries(GlobalLayout));
