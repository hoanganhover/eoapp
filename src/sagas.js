import { all } from 'redux-saga/effects';

import settingSaga from "./modules/setting/saga";

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([settingSaga()]);
}
