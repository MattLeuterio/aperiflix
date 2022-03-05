import PropTypes from 'prop-types';

export const MediaQueryInterface = PropTypes.bool.isRequired;
export const MediaQueriesInterface = PropTypes.shape({
  mediaIsPhone: MediaQueryInterface,
  mediaIsTablet: MediaQueryInterface,
  mediaIsLaptop: MediaQueryInterface,
  mediaIsDesktop: MediaQueryInterface
});

export const ScreenSizeInterface = PropTypes.number.isRequired;
export const ScreenSizesInterface = PropTypes.shape({
  height: ScreenSizeInterface,
  width: ScreenSizeInterface
});
