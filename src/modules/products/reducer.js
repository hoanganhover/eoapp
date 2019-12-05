import * as Actions from './constants';
import {getToken} from '../../helper/helper';

const initState = {
  data: []
  //loading: false,
};

export default function settingReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.SAVE_PRODUCT_SUCCESS:
      // console.log(action);
      // const data = state.data.push(action.data);
      // console.log("data",data, state.data);
      // return state.data.push(action.data);
      const data = [].concat(state.data, action.data);
      return Object.assign({}, state, { data: data });
    default:
      return state;
  }
}
