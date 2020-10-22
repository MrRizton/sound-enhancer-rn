import {Action} from 'redux';
import {
  LogoutActionType,
  onErrorActionType,
  ClearStoreActionType,
} from './actionTypes';

export type LogoutAction = Action<typeof LogoutActionType>;

export type ClearStoreAction = Action<typeof ClearStoreActionType>;

export interface IOnErrorAction extends Action<typeof onErrorActionType> {
  error: Error;
}
