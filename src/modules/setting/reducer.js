import * as Actions from './constants';

const initState = {
  data: [],
  loading: false,
};

export default function settingReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.LOADING_SETTING:
      return state;
    default:
      return state;
  }
}
