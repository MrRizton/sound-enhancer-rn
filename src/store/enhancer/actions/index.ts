import {OnFilePickStartActionType, SetFileActionType} from './actionTypes';
import {IOnFilePickStartAction, ISetFileAction} from './types';
import {ActionCreator} from 'redux';
import {DocumentPickerResponse} from 'react-native-document-picker';

export const setFileAction: ActionCreator<ISetFileAction> = (
  file: DocumentPickerResponse,
) => ({
  type: SetFileActionType,
  file,
});

export const onFilePickStartAction: ActionCreator<IOnFilePickStartAction> = () => ({
  type: OnFilePickStartActionType,
});
