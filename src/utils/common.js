import moment from 'moment';
import theme from '../ui/theme';

export const shouldUseMock = () => process.env.REACT_APP_DEPLOY_ENV?.trim() === 'LOCAL'
  && Number(process.env.REACT_APP_ENABLE_MOCK) === 1;

export function getPaths(location) {
  const loc = location || window.location;
  const pathname = loc ? loc.pathname || '' : '';
  const paths = pathname.split('/');
  const params = {};
  loc.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    params[key] = decodeURIComponent(decodeURIComponent(value.toString()));
  });

  return {
    pathname,
    paths,
    params
  };
}

export const formatFilters = (filters = {}) => Object.keys(filters).reduce((acc, key) => {
  let obj = {};
  if (filters[key].value) {
    const value = typeof filters[key].value === 'object'
      ? filters[key].value?.value
      : filters[key].value;
    if (filters[key].value.key) {
      obj = {
        [filters[key].value.key]: value.split(';')[1]
      };
    } else {
      obj = {
        [key]: value
      };
    }
  }
  return { ...acc, ...obj };
}, {});

export const getAppliedFilters = (filters = {}) => Object.keys(filters).reduce((acc, key) => {
  let filter = '';
  if (filters[key].value && key !== 'order' && key !== 'sorts') {
    filter = typeof filters[key].value === 'object'
      ? filters[key].value?.label
      : filters[key].value;
  }
  return filter.length > 0 ? [...acc, filter] : [...acc];
}, []);

export const truncateByWord = (text = '', size = 120, suffix = '...') => {
  if (text && size && text.length >= size) {
    const trimmedText = text.substring(0, size);
    return `${trimmedText.substr(
      0,
      Math.min(trimmedText.length, trimmedText.lastIndexOf(' '))
    )}${suffix}`;
  }

  return text;
};

export const getRandomNumber = (min = 0, max = 20) => Math.floor(Math.random() * (max - min) + min);

export const priceFormat = (value = 0, replace = true) => {
  let price = Number(value)
    .toFixed(2)
    .toString();
  price = price.replace(',', '.');
  price = price.slice(0, price.indexOf('.') + 3);
  if (replace) price = price.replace('.', ',');
  return price;
};

export const dateFormat = (date = moment()) => (moment(date).format('DD/MM/YYYY') !== 'Invalid date'
  ? moment(date).format('DD/MM/YYYY')
  : date);

export const getElementFromList = (list = [], type = '') => (list || []).find(({ type_code = '' }) => type_code === type)?.value || '';

export const parseAuthor = (author = '') => {
  const authorArray = [];
  (author?.trim().split(';') || []).forEach((v = '') => (v ? authorArray.push(v.trim()) : null));
  return authorArray.join(', ');
};

export const searchClientType = {
  SALESFORCE: 'salesforce',
  ORCE: 'orce'
};

export const defaultUserTypeSelect = [
  { label: 'admin', value: 'admin' },
  { label: 'member', value: 'member' }
];

export const defaultUserTypeSelectSuperAdmin = [
  { label: 'admin', value: 'admin' },
  { label: 'member', value: 'member' }
];

export const defaultUserTypeSelectAdmin = [
  { label: 'member', value: 'member' }
];

export const defaultChannelTypeSelect = [
  { label: 'Youtube', value: 'youtube' },
  { label: 'Dailymotion', value: 'dailymotion' }
];

export const defaultUserRoleSelect = [
  { label: 'creator', value: 'creator' },
  { label: 'editor', value: 'editor' }
];

export const customStylesSelectPrimary = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width
  }),

  control: (_, { selectProps: { width } }) => ({
    width: 150,
    display: 'flex',
    border: `1px solid ${theme.colors.custom.blue}`,
    borderRadius: '10px',
    height: '30px'
  }),

  indicatorsContainer: (provided, state) => {
    const color = theme.colors.custom.blue;
    const cursor = 'pointer';

    return { ...provided, color, cursor };
  },

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),

  singleValue: (provided, state) => {
    const fontStyle = 'italic';
    const fontSize = '14px';

    return { ...provided, fontStyle, fontSize };
  }
};

export const getLabelValue = (label, list) => (list[label] || label);

export const customStylesSelectMenu = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width
  }),

  control: (_, { selectProps: { width } }) => ({
    width: 190,
    display: 'flex',
    border: `1px solid ${theme.colors.custom.blue}`,
    borderRadius: '10px',
    height: '30px'
  }),

  indicatorsContainer: (provided, state) => {
    const color = theme.colors.custom.blue;
    const cursor = 'pointer';

    return { ...provided, color, cursor };
  },

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),

  singleValue: (provided, state) => {
    const fontStyle = 'italic';
    const fontSize = '14px';

    return { ...provided, fontStyle, fontSize };
  }
};

export const customStylesSelectLang = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width
  }),

  control: (_, { selectProps: { width } }) => ({
    width: 80,
    display: 'flex',
    borderRadius: '10px',
    height: '30px'
  }),

  indicatorsContainer: (provided, state) => {
    const color = theme.colors.custom.blue;
    const cursor = 'pointer';

    return { ...provided, color, cursor };
  },

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),

  singleValue: (provided, state) => {
    const fontStyle = 'italic';
    const fontSize = '14px';

    return { ...provided, fontStyle, fontSize };
  }
};

export const customStylesSelectLangModal = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width
  }),

  control: (_, { selectProps: { width } }) => ({
    width: 80,
    display: 'flex',
    borderRadius: '10px',
    height: '30px',
    border: `1px solid ${theme.colors.custom.blue}`
  }),

  indicatorsContainer: (provided, state) => {
    const color = theme.colors.custom.blue;
    const cursor = 'pointer';

    return { ...provided, color, cursor };
  },

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),

  singleValue: (provided, state) => {
    const fontStyle = 'italic';
    const fontSize = '14px';

    return { ...provided, fontStyle, fontSize };
  }
};
