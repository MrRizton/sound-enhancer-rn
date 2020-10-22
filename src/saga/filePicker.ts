import DocumentPicker, {
  DocumentPickerOptions,
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {call, put, takeEvery} from 'redux-saga/effects';
import {onErrorAction} from '../store/actions';
import {setFileAction} from '../store/enhancer/actions';
import {OnFilePickStartActionType} from '../store/enhancer/actions/actionTypes';
import {IOnFilePickStartAction} from '../store/enhancer/actions/types';

const options: DocumentPickerOptions<'android'> = {
  type: ['audio/*'],
};

function* filePicker() {
  yield takeEvery(OnFilePickStartActionType, function* (
    action: IOnFilePickStartAction,
  ) {
    const result: DocumentPickerResponse = yield call(
      //@ts-ignore
      DocumentPicker.pick,
      options,
    );

    if (result.type.includes('wav')) {
      yield put(setFileAction(result));
    } else {
      yield put(onErrorAction({message: 'The selected file is not .wav type'}));
    }
  });
}

export default filePicker;
