import { combineReducers } from 'redux';

import settingReducer from './modules/setting/reducer';
import productReducer from './modules/products/reducer';


/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  setting: settingReducer,
  products: productReducer,
});

export default rootReducers;
