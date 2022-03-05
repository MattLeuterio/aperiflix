import produce from 'immer';
import { MENU_SET_SECTION } from '../actions/menu';
import routes from '../../routes';
import { AUTH_LOGOUT } from '../actions/auth';

const newSection = ({
  label = '', id = '', isActive = false, icon = '', route
}) => ({
  label, id, isActive, icon, route
});
export const MenuSections = [
  newSection({
    label: 'Cerca Prodotto', id: '1', icon: 'icon-search', route: routes.searchVideo.path
  })
];

const initialState = {
  sections: MenuSections,
  activeSection: {
    id: '',
    isActive: false
  }
};

const menuReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case AUTH_LOGOUT._ERROR:
    case AUTH_LOGOUT._SUCCESS:
      draft = initialState;
      break;

    case MENU_SET_SECTION: {
      draft.activeSection = action.section || initialState.activeSection;

      break;
    }

    default:
      return state;
  }
  return draft;
});

export default menuReducer;
