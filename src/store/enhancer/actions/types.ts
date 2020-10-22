import {OnFilePickStartActionType, SetFileActionType} from './actionTypes';
import {Action} from 'redux';
import {DocumentPickerResponse} from 'react-native-document-picker';

export interface ISetFileAction extends Action<typeof SetFileActionType> {
  file: DocumentPickerResponse;
}

export type IOnFilePickStartAction = Action<typeof OnFilePickStartActionType>;

type EnhancerAction = ISetFileAction | IOnFilePickStartAction;

export default EnhancerAction;
