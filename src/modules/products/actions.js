import * as Actions from './constants';

export function saveProducts(data) {
  return {
    type: Actions.SAVE_PRODUCT_SUCCESS,
    data,
  };
}
