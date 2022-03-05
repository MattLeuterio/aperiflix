export const parseQueryParams = (filters = {}) => {
  const queryParts = [];

  Object.keys(filters).forEach((key) => {
    if (!filters[key] || (typeof filters[key] !== 'number' && !filters[key].length)) {
      return;
    }
    queryParts.push(`${key}=${encodeURIComponent(filters[key])}`);
  });

  return `?${queryParts.join('&')}`;
};
