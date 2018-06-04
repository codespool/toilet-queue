import { takeEvery, call, put } from 'redux-saga/effects'

import { getList } from '../lib/fetcher'

import { REQUEST_LIST } from '../actionTypes'
import { populateList, setLoading } from '../actions'

export default function * rootSaga() {
    yield takeEvery(REQUEST_LIST, makeListRequest)
}

function * makeListRequest(action) {
  try {
    yield put(setLoading(true))
    const response = yield call(getList)
    const toiletList = yield call(response.json.bind(response))
    yield put(populateList(toiletList))
  } catch (e) {
    console.error('Failed to fetch: ', e)
  } finally {
    yield put(setLoading(false))
  }
}
