import {all, call} from 'redux-saga/effects';
import errorHandler from './errorHandler';

export default function* rootSaga() {
  yield all([call(errorHandler)]);
}
