import * as Actions from './constants';

const initState = {
  data: {
    PaymentMethods : [],
    Stores : []
  },
  dataRev :[]
  //loading: false,
};

export default function settingReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.LOADING_SETTING_SUCCESS:
      return {
        ...state,
        data: action.data,
        dataRev: action.dataRev,
      };
    default:
      return state;
  }
}
