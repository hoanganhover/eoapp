
import {put, call, takeEvery} from 'redux-saga/effects';

import * as Actions from './constants';

import {getSetting} from './service';

/**
 * Fetch data setting loading
 * @returns {IterableIterator<*>}
 */
function* loadingSettingSaga() {
  try {
    const data = yield call(getSetting);
    yield put({ type: Actions.LOADING_SETTING_SUCCESS, payload: [] });
  } catch (e) {
    yield put({ type: Actions.LOADING_SETTING_ERROR, error: e });
  }
}

export default function* settingSaga() {
  yield takeEvery(Actions.LOADING_SETTING, loadingSettingSaga);
}
