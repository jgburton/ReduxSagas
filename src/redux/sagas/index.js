import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import dogSaga from './dogSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    dogSaga(),
  ])
}