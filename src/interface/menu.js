import PropTypes from 'prop-types';

export const MenuActionInterface = PropTypes.func.isRequired;

export const MenuSectionIdInterface = PropTypes.string.isRequired;
export const MenuSectionInterface = PropTypes.shape({
  label: PropTypes.string,
  id: MenuSectionIdInterface,
  isActive: PropTypes.bool.isRequired
});
