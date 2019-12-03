import * as Actions from './constants';

const initState = {
  data: [],
  loading: false,
};

export default function settingReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.LOADING_SETTING:
      return {
        ...state,
        loading: true,
      };
    case Actions.LOADING_SETTING_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case Actions.LOADING_SETTING_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
