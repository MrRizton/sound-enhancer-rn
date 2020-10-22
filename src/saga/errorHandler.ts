import {takeEvery} from 'redux-saga/effects';
import {onErrorActionType} from '../store/actions/actionTypes';
import {Alert} from 'react-native';
import {IOnErrorAction} from '../store/actions/types';

function* errorHandler() {
  yield takeEvery(onErrorActionType, function* (action: IOnErrorAction) {
    const {error} = action;
    const {message} = error;
    Alert.alert(message);
  });
}

export default errorHandler;
