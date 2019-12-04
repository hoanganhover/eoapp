import * as Actions from './constants';
import {getToken} from '../../helper/helper';

const initState = {
  data: {
    PaymentMethods : [],
    Stores : [],
    ...getToken(),
  },
  dataRev :[]
  //loading: false,
};

export default function settingReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.LOADING_SETTING_SUCCESS:
      localStorage.setItem('token_data', JSON.stringify(action.data));
      return {
        ...state,
        data: action.data,
        dataRev: action.dataRev
      };
    default:
      return state;
  }
}
