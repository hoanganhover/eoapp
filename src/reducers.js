import { combineReducers } from 'redux';

import settingReducer from './modules/setting/reducer';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  setting: settingReducer,
});

export default rootReducers;
