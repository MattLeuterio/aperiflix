import PropTypes from 'prop-types';

export const StoreInterface = PropTypes.shape({
  code: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  residence_city: PropTypes.string,
  zip_code: PropTypes.string,
  discrict: PropTypes.string,
  address: PropTypes.string
});
export const StoresInterface = PropTypes.arrayOf(StoreInterface);

export const HeadStateInterface = PropTypes.shape({
  code: PropTypes.string.isRequired,
  description: PropTypes.string
});
export const HeadStatesInterface = PropTypes.arrayOf(HeadStateInterface);
