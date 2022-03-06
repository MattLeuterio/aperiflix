import React from 'react';
import PropTypes from 'prop-types';

import {
  CardProductContainer, CoverSection, InfoSection, RatingWrapper, TypeWrapper
} from './style';
import { RatingBottle } from '../index';
import Inter from '../../ui/typography/inter';

const CardProduct = ({
  product
}) => (
  <CardProductContainer>
    <CoverSection cover={product.cover}>
      <RatingWrapper>
        {product.mVote && <RatingBottle vote={product.mVote} voter="m" />}
        {product.iVote && <RatingBottle vote={product.iVote} voter="i" />}
      </RatingWrapper>
      <TypeWrapper>
        <Inter type="cardProductType">{product.productType}</Inter>
      </TypeWrapper>
    </CoverSection>
    <InfoSection>
      <Inter type="cardGenre">{product.genre}</Inter>
      <Inter type="cardTitle">{product.title}</Inter>
    </InfoSection>
  </CardProductContainer>
);

CardProduct.propTypes = {
  product: PropTypes.object.isRequired
};

export default CardProduct;
