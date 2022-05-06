import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CloseOutline as CloseIcon, VideocamOffOutline as NoVideoIcon } from 'react-ionicons';
import ReactPlayer from 'react-player';
import {
  Body,
  Container,
  Content,
  Cover,
  Description, DetailsProduct,
  Genre,
  Header,
  InfoSection,
  ReleaseDate,
  RowInfo,
  RowRating,
  VideoWrapper,
  Detail, NoVideoWrapper
} from './style';
import theme from '../../ui/theme';
import { GET_PRODUCT_DETAILS, GET_PRODUCT_VIDEO } from '../../redux/actions/product';
import Inter from '../../ui/typography/inter';
// eslint-disable-next-line import/no-cycle
import { RatingBottle } from '../../atoms';

const ProductDetailsPanel = ({
  onClose, isOpen, product, getProductDetails, details,
  getProductVideo, videoProduct
}) => {
  const [video, setVideo] = useState({});
  const [hasExternalDetails, setHasExternalDetails] = useState(false);

  useEffect(() => {
    if (product) {
      const payload = {
        id: product?.idTmdb,
        prodType: product?.productType
      };
      getProductDetails(payload);
      getProductVideo(payload);
    }
    setHasExternalDetails(Boolean(Object.keys(details).length > 0));
  }, [product]);

  useEffect(() => {
    if (videoProduct) {
      const videoSel = videoProduct.find(el => el.site === 'YouTube' && el.type === 'Trailer');
      setVideo(videoSel);
    }
  }, [videoProduct]);

  useEffect(() => {
    setHasExternalDetails(Boolean(Object.keys(details).length > 0));
  }, [details]);
  return (
    <Container isOpen={isOpen}>
      <CloseIcon
        className="iconClose"
        color={theme.colors.primary.white}
        onClick={() => onClose()}
        height="30px"
        width="30px"
      />
      <Content>
        <Header>
          <Cover posterPath={!hasExternalDetails
            ? product?.posterPath
            : product?.posterPath || `https://image.tmdb.org/t/p/original/${details?.poster_path}`}
          />
          <InfoSection>
            <RowInfo>
              {(!hasExternalDetails
                ? product?.releaseDate
                : product?.releaseDate || (details?.release_date || details?.first_air_date)) && (
                <ReleaseDate>
                  <Inter type="prodDetailsDate">{product?.releaseDate || details?.release_date || details?.first_air_date}</Inter>
                </ReleaseDate>
              )}
              <Genre>
                <Inter type="prodDetailsGenre">{!hasExternalDetails
                  ? <span>{product.genre}</span>
                  : details?.genres?.map((genre) => (
                    <span key={genre.name}>{genre.name}</span>
                  ))}
                </Inter>
              </Genre>
              {product?.productType === 'Film' && (
                <Inter type="prodDetailsRuntime">{!hasExternalDetails ? product.runtime : product.runtime || details?.runtime} min.</Inter>
              )}
            </RowInfo>
            <Inter type="prodDetailsTitle">{!hasExternalDetails ? product.title : product.title || (details?.title || details?.name)}</Inter>
            <RowRating>
              {product?.mVote && <RatingBottle vote={product?.mVote} voter="m" />}
              {product?.iVote && <RatingBottle vote={product?.iVote} voter="i" />}
            </RowRating>
            <Description>
              <Inter type="prodDetailsSummary">{!hasExternalDetails ? product.summary : product.summary || details?.overview}</Inter>
            </Description>
          </InfoSection>
        </Header>
        <Body>
          <VideoWrapper>
            <Inter type="medium">
              Video
              {(!hasExternalDetails || videoProduct?.length > 0) && (
                <Inter htmlAttribute="span" type="prodVideoType">{" - "}{!hasExternalDetails ? 'Trailer' : video?.type}</Inter>
              )}
            </Inter>
            {(!hasExternalDetails || videoProduct?.length > 0) ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${product?.trailerId || video?.key}`}
                width="100%"
                height="100%"
                controls
              />
            ) : (
              <NoVideoWrapper>
                <NoVideoIcon
                  color={theme.colors.primary.white}
                  onClick={() => onClose()}
                  height="30px"
                  width="30px"
                />
              </NoVideoWrapper>
            )}
          </VideoWrapper>
          <DetailsProduct>
            {(!hasExternalDetails || (details?.original_name || details?.original_title)) && (
              <Detail>
                <Inter type="bold">Titolo Originale</Inter>
                <Inter type="cardTitle">{product.originalTitle || details?.original_name || details?.original_title}</Inter>
              </Detail>
            )}
            {(!hasExternalDetails || details?.original_language) && (
              <Detail>
                <Inter type="bold">Lingua Originale</Inter>
                <Inter type="cardTitle">{product.originalLanguage || details?.original_language}</Inter>
              </Detail>
            )}
          </DetailsProduct>
        </Body>
      </Content>
    </Container>
  );
};

ProductDetailsPanel.propTypes = {
  // HOC (connect, state)

  // HOC (connect, dispatch)
  onClose: PropTypes.func
};

export default connect(
  state => ({
    details: state.product.productSelectedDetails,
    videoProduct: state.product.productSelectedVideo
  }),
  dispatch => ({
    //onClose: () => dispatch({ type: MODAL_CLOSE }),
    getProductDetails: (payload) => dispatch({ type: GET_PRODUCT_DETAILS._REQUEST, payload }),
    getProductVideo: (payload) => dispatch({ type: GET_PRODUCT_VIDEO._REQUEST, payload })
  })
)(ProductDetailsPanel);
