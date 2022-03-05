import React from 'react';

import { FooterContainer } from './style';
import Arial from '../../ui/typography/arial';
import { Container } from '../../ui/gridSystem';


const Footer = () => (
  <FooterContainer>
    <Container>
      <Arial type="footerText">React Base - AMA, All Rights Reserved.</Arial>
    </Container>
  </FooterContainer>
);

export default Footer;
