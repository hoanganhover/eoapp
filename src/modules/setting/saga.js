
import {put, call, takeEvery} from 'redux-saga/effects';

import * as Actions from './constants';

import {getStore,getRevenue} from './service';

/**
 * Fetch data setting loading
 * @returns {IterableIterator<*>}
 */
function* loadingSettingSaga() {
  try {
    const data = yield call(getStore);
    const dataRev = yield call(getRevenue);
    yield put({ type: Actions.LOADING_SETTING_SUCCESS, data, dataRev });
  } catch (e) {
    yield put({ type: Actions.LOADING_SETTING_ERROR, error: e });
  }
}

export default function* settingSaga() {
  yield takeEvery(Actions.LOADING_SETTING, loadingSettingSaga);
}
