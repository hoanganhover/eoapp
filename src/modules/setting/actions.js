import * as Actions from './constants';

export function getSetting() {
  return {
    type: Actions.LOADING_SETTING,
  };
}
export function addStore(data) {
  return {
    type: Actions.ADD_STORE,
    data:data,
  };
}
