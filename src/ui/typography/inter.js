import React from 'react';
import PropTypes from 'prop-types';
import Typeface, { TypefaceInterface } from './index';
import { FontBase } from '../../const';
import theme from '../theme';
import { withMediaQueries } from '../../hoc/withMediaQueries';

const baseConfig = {
  color: 'unset',
  fontFamily: theme.fontset.inter,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: 'normal',
  fontSize: FontBase
};

const types = {
  light: {
    fontWeight: 300
  },
  medium: {
    fontWeight: 500
  },
  bold: {
    fontWeight: 700
  },
  italic: {
    fontStyle: 'italic'
  },
  h1: {
    color: theme.colors.custom.darkText,
    fontSize: 22,
    fontWeight: 500
  },
  h2: {
    color: theme.colors.custom.darkText,
    fontSize: 18,
    fontWeight: 500
  },
  h3: {
    fontSize: 16,
    fontWeight: 400
  },
  h4: {
    fontSize: 14,
    fontWeight: 400
  },
  error: {
    color: theme.colors.primary.red,
    fontSize: 12
  },
  cardGenre: {
    fontSize: 14,
    fontWeight: 300,
    fontStyle: 'italic'
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 600
  },
  cardProductType: {
    fontSize: 14,
    fontWeight: 600
  },
  headerUser: {
    color: theme.colors.custom.blue,
    fontWeight: 500
  },
  modalTitle: {
    fontSize: 22,
    color: theme.colors.custom.darkText,
    fontWeight: 500
  },
  youtubeLabel: {
    fontSize: 12,
    color: theme.colors.custom.youtube,
    fontWeight: 500,
    textTransform: 'capitalize'
  },
  dailymotionLabel: {
    fontSize: 12,
    color: theme.colors.custom.dailymotion,
    fontWeight: 500,
    textTransform: 'capitalize'
  },
  dailyLabel: {
    fontSize: 12,
    color: theme.colors.custom.dailymotion,
    fontWeight: 500,
    textTransform: 'capitalize'
  },
  labelCardUser: {
    fontSize: 12,
    color: theme.colors.custom.darkGray,
    fontWeight: 500
  },
  goBack: {
    fontSize: 24,
    color: theme.colors.custom.darkText,
    fontWeight: 500
  },
  widthHeightMessage: {
    fontSize: 12,
    color: theme.colors.custom.darkText,
    fontStyle: 'italic',
    lineHeight: 1.4
  }

};

const Inter = ({
  type,
  configuration,
  children,
  htmlAttribute,
  onClick,
  mediaIsDesktop,
  mediaIsLaptop
}) => {
  const finalConfiguration = {
    ...baseConfig,
    ...types[type],
    ...configuration
  };
  return (
    <Typeface
      htmlAttribute={htmlAttribute}
      configuration={
        mediaIsDesktop || mediaIsLaptop
          ? { ...finalConfiguration, fontSize: finalConfiguration.fontSize }
          : { ...finalConfiguration }
      }
      onClick={onClick}
    >
      {children}
    </Typeface>
  );
};

Inter.propTypes = {
  htmlAttribute: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.keys(types)),
  configuration: TypefaceInterface,
  onClick: PropTypes.func
};

export default withMediaQueries(Inter);
