export function createAsyncActionType(section = '', type = '') {
  const action = {
    _REQUEST: `@@${section.toLowerCase()}/${type.toUpperCase()}_REQUEST`,
    _SUCCESS: `@@${section.toLowerCase()}/${type.toUpperCase()}_SUCCESS`,
    _ERROR: `@@${section.toLowerCase()}/${type.toUpperCase()}_ERROR`
  };

  return action;
}

export const SET_PRODUCTS = '@@products/SET_PRODUCTS';
export const GET_PRODUCT_DETAILS = createAsyncActionType('product', 'GET_PRODUCT_DETAILS');
export const GET_PRODUCT_VIDEO = createAsyncActionType('product', 'GET_PRODUCT_VIDEO');
