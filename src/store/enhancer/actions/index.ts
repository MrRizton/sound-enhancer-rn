import {SetFileActionType} from './actionTypes';
import {ISetFileAction} from './types';
import {ActionCreator} from 'redux';

export const setFileAction: ActionCreator<ISetFileAction> = (file: string) => ({
  type: SetFileActionType,
  file,
});
