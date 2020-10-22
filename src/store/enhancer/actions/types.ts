import {SetFileActionType} from './actionTypes';
import {Action} from 'redux';

export interface ISetFileAction extends Action<typeof SetFileActionType> {
  file: string;
}

type EnhancerAction = ISetFileAction;

export default EnhancerAction;
