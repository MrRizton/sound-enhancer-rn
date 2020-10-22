import {all, call} from 'redux-saga/effects';
import errorHandler from './errorHandler';
import filePicker from './filePicker';

export default function* rootSaga() {
  yield all([call(errorHandler), call(filePicker)]);
}
