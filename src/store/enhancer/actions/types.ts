import {
  OnFilePickStartActionType,
  RemoveFileActionType,
  SetFileActionType,
} from './actionTypes';
import {Action} from 'redux';
import {DocumentPickerResponse} from 'react-native-document-picker';

export interface ISetFileAction extends Action<typeof SetFileActionType> {
  file: DocumentPickerResponse;
}

export type IOnFilePickStartAction = Action<typeof OnFilePickStartActionType>;

export type IRemoveFileAction = Action<typeof RemoveFileActionType>;

type EnhancerAction =
  | ISetFileAction
  | IOnFilePickStartAction
  | IRemoveFileAction;

export default EnhancerAction;
